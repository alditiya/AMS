from pyexpat import model
from attr import fields
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FilesViewSet
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from . import views


# Serializers define the API representation
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "is_staff"]


# ViewSet define the web behavior
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


router = routers.DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)
router.register("files", FilesViewSet, basename="files")
router.register("todo", views.TodoViewSet, basename="todo")

urlpatterns = [
    path("api/", include(router.urls)),
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("todos/", views.todo_list),  # type: ignore
    path("todos/<int:pk>/", views.todo_detail),  # type: ignore
]

urlpatterns += router.urls
