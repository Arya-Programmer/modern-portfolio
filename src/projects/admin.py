from django.contrib import admin
from .models import Project, Tag

# Register your models here.

admin.site.register(Tag)
admin.site.register(Project)
