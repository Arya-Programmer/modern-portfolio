from django.shortcuts import render
from rest_framework import viewsets
from .models import Experience
from .serializers import ProjectSerializer

# Create your views here.


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ProjectSerializer
