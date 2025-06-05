from rest_framework import serializers
from .models import Experience


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = "__all__"
