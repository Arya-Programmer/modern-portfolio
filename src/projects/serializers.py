from rest_framework import serializers
from .models import Project, Tag


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)  # Nested skill info

    class Meta:
        model = Project
        fields = "__all__"
