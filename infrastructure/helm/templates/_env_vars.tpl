{{/* Global env vars */}}
{{- define "env.global" }}
- name: ENV
  value: {{ .Values.global.env | quote }}
{{- end }}

{{/* Jager env vars */}}
{{- define "env.jaeger" }}
- name: TRACE_ENABLE
  value: {{ .Values.global.traceEnabled | quote }}
- name: TRACE_PROBABILITY
  value: {{ .Values.global.traceProbability | quote }}
- name: TRACE_HOST
  value: {{ .Values.global.traceHost | quote }}
{{- end }}