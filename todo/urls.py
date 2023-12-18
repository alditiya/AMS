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
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)
router.register("media", FilesViewSet, basename="media")
router.register("todo", views.TodoViewSet, basename="todo")
router.register("ajb", views.AjbViewSet, basename="AJB")
router.register("pbb", views.PbbViewSet, basename="PBB")
router.register("hgb", views.HgbViewSet, basename="HGB")

urlpatterns = [
    path("api/", include(router.urls)),
    ##path("login/", LoginView.as_view()),
    ##baru
    path("login/", views.login_view, name="api_login"),
    path("logout/", views.logout_view, name="api_logout"),
    path("session/", views.session_view, name="api_session"),
    path("whoami/", views.whoami_view, name="api_whoami"),
    ##end of new
    path("", include(router.urls)),
    ##path("get-details/", UserDetailAPI.as_view()),
    ##path("", include("rest_framework.urls", namespace="rest_framework")),
    path("todos/", views.todo_list),  # type: ignore
    path("shm/", views.shmviewset),  # type: ignore
    path("todos/<int:pk>/", views.todo_detail),  # type: ignore
]

urlpatterns += router.urls
