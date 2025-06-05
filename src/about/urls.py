from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AboutViewSet, SkillViewSet

router = DefaultRouter()
router.register("about", AboutViewSet)
router.register("skills", SkillViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
