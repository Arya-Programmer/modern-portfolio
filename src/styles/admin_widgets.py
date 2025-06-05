from django import forms
import json


class PrettyJSONWidget(forms.Textarea):
    def format_value(self, value):
        if isinstance(value, str):
            try:
                value = json.loads(value)
            except Exception:
                return value
        try:
            return json.dumps(value, indent=2, sort_keys=True)
        except Exception:
            return super().format_value(value)

    class Media:
        css = {
            "all": [
                "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.9/codemirror.min.css"
            ]
        }
        js = [
            "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.9/codemirror.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.9/mode/javascript/javascript.min.js",
            "js/jsoneditor-init.js",  # We'll define this next
        ]
