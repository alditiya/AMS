from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import permissions
from rest_framework import viewsets
from . import serializers
from .serializers import FileSerializer, UserSerializer, GroupSerializer
from .models import Sertifikat
from . import models

# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class SertifikatViewSet(viewsets.ModelViewSet):
    queryset = models.Sertifikat.objects.all()
    serializer_class = serializers.SertifikatSerializer


class FilesViewSet(viewsets.ModelViewSet):
    queryset = models.Sertifikat.objects.all()
    serializer_class = FileSerializer
