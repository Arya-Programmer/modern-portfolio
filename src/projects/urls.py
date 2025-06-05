from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, TagViewSet

router = DefaultRouter()
router.register("projects", ProjectViewSet)
router.register("tags", TagViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
