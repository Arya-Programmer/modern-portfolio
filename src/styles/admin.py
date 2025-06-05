# admin.py
from django.contrib import admin
from django import forms
from .models import Style
from .admin_widgets import PrettyJSONWidget


class ColorThemeForm(forms.ModelForm):
    class Meta:
        model = Style
        fields = "__all__"
        widgets = {
            "data": PrettyJSONWidget(attrs={"cols": 80, "rows": 20}),
        }


@admin.register(Style)
class ColorThemeAdmin(admin.ModelAdmin):
    form = ColorThemeForm
