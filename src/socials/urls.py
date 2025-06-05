from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SocialViewSet

router = DefaultRouter()
router.register("socials", SocialViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
