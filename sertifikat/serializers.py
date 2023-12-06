from pyexpat import model
from attr import field
from rest_framework import serializers
from django.contrib.auth.models import User, Group
from .models import Sertifikat
from . import models


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ("url", "username", "email", "groups")


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]


class SertifikatSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Sertifikat
        fields = "__all__"


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sertifikat
        field = ["id", "pdf"]
