from django.shortcuts import render
from rest_framework import viewsets
from .models import Style
from .serializers import StyleSerializer

# Create your views here.


class StyleViewSet(viewsets.ModelViewSet):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer
