from rest_framework import viewsets
from .models import Project, Tag
from .serializers import ProjectSerializer, TagSerializer

# Create your views here.


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.prefetch_related("tags").all()
    serializer_class = ProjectSerializer
