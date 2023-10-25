from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FilesViewSet

from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('files', FilesViewSet, basename='files')
router.register('todo', views.TodoViewSet, basename='todo')

urlpatterns = [
    path('api/', include(router.urls)),
]

urlpatterns += router.urls
