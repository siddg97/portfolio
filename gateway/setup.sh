#!/bin/bash

WORKDIR="."

# Variables set through this script
set -a
ENV=${ENV:-"prod"}
PORT=${PORT:-3000}
LUA_CACHE="off"
WEBSITE_DEV_MODE="include website-dev.conf;"

if [ "$ENV" == "prod" ]; then
  LUA_CACHE="on"
  WEBSITE_DEV_MODE=""
fi
set +a

# Ensure that all the variables that cannot be set in this script are defined
if [ -z "${BACKEND_HOST}" ]; then
  echo "Variable not defined: BACKEND_HOST"
  exit 1
fi
export BACKEND_HOST="$BACKEND_HOST"

if [ -z "${WEBSITE_HOST}" ]; then
  echo "Variable not defined: WEBSITE_HOST"
  exit 1
fi
export WEBSITE_HOST="$WEBSITE_HOST"

# Perform env variable replacement in all the template files
for infile in "${WORKDIR}"/tmpl/*.conf.tmpl; do
  p="${infile//.tmpl/}"
  filename="${p##*/}"
  outfile="${WORKDIR}/$filename"
  outfiletmp="${outfile}_temporary_for_envbust_file_overwrite"

  # shellcheck disable=SC2016
  envsubst '${PORT}
  ${LUA_CACHE}
  ${WEBSITE_DEV_MODE}
  ${BACKEND_HOST}
  ${WEBSITE_HOST}' < "$infile" > "$outfiletmp"

  cp "$outfiletmp" "$outfile"
  rm "$outfiletmp"
done

nginx -g "daemon off; error_log /dev/stderr warn;"