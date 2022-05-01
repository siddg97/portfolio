{{/* Global env vars */}}
{{- define "env.global" }}
- name: ENV
  value: "{{ .Values.global.env }}"
{{- end }}

{{/* Jager env vars */}}
{{- define "env.jaeger" }}
- name: TRACE_ENABLE
  value: "{{ .Values.global.traceEnabled }}"
- name: TRACE_PROBABILITY
  value: "{{ .Values.global.traceProbability }}"
- name: TRACE_HOST
  value: "{{ .Values.global.traceHost }}"
{{- end }}

{{/* react dev env vars */}}
{{- define "env.react.dev" }}
{{- if .Values.global.local }}
env:
  - name: WDS_SOCKET_PORT
    value: '6001'
{{- end }}
{{- end }}

{{/* mail env vars */}}
{{- define "env.mail" }}
- name: MAIL_HOST
  value: "{{ .Values.mail.host }}"
- name: MAIL_PORT
  value: "{{ .Values.mail.port }}"
- name: MAIL_SENDER
  value: "{{ .Values.mail.sender }}"
- name: MAIL_USER
  value: "{{ .Values.mail.user }}"
- name: MAIL_PASSWORD
  value: "{{ .Values.mail.password }}"
{{- end }}