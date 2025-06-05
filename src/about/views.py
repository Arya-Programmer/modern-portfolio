from rest_framework import viewsets
from .models import About, Skill
from .serializers import AboutSerializer, SkillSerializer


class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.prefetch_related("skills").all()
    serializer_class = AboutSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
