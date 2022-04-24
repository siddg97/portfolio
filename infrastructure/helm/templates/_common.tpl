{{/* Common labels and annotations */}}
{{- define "resource.labels" }}
helm.sh/chart: "{{ .Chart.Name }}-{{ .Chart.Version | replace "+" "_" }}"
app.kubernetes.io/managed-by: {{ .Release.Service }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion }}
{{- end }}

{{/* Microservice labels */}}
{{- define "srv.labels" }}
app: {{ .name }}
app.kubernetes.io/name: {{ .name }}
{{- end }}

{{/* Image definition for containers */}}
{{- define "srv.image" }}
image: "{{ .repository }}:{{ .tag }}"
imagePullPolicy: IfNotPresent
{{- end }}

{{/* Health and readiness checks for microservice containers */}}
{{- define "srv.probes" }}
livenessProbe:
  httpGet:
    path: /checks/healthz
    port: {{ .port }}
  initialDelaySeconds: 5
  periodSeconds: 10
  timeoutSeconds: 5
readinessProbe:
  httpGet:
    path: /checks/readiness
    port: {{ .port }}
  initialDelaySeconds: 5
  periodSeconds: 10
  failureThreshold: 2
  successThreshold: 1
  timeoutSeconds: 5
{{- end }}

{{/* K8s service name */}}
{{- define "srv.svc.name" -}}
{{ .name }}-svc
{{- end }}

{{/* K8s service hostname */}}
{{- define "srv.svc.hostname" -}}
"{{ include "srv.svc.name" . }}.default.svc.cluster.local:{{ .port }}"
{{- end }}

{{/* K8s deployment name */}}
{{- define "svc.depl.name" -}}
{{ .name }}-depl
{{- end }}
