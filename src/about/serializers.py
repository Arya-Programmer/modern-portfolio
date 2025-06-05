from rest_framework import serializers
from .models import About, Skill


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"


class AboutSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)  # Nested skill info

    class Meta:
        model = About
        fields = "__all__"
