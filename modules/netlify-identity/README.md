# Netlify Identity Support for Decap CMS

## Configurations

```toml
[params.decap_cms._netlify_identity]
js_url = "https://identity.netlify.com/v1/netlify-identity-widget.js"
```

## Inject Partials

If your theme doesn't implement HugoPress, you will need to inject the following partials into your homepage.

```html
{{- if .IsHome }}
  {{ partialCached "hugopress/modules/decap-cms-netlify-identity/script" . }}
  {{ partialCached "hugopress/modules/decap-cms-netlify-identity/callback-script" . }}
{{- end }}
```
