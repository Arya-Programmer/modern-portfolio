from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StyleViewSet

router = DefaultRouter()
router.register(r"styles", StyleViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
