from pyexpat import model
from attr import field
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.models import User, Group
from .models import Todo
from . import models


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "username"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]


class TodoSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    nameDoc = serializers.CharField(max_length=255)
    noDoc = serializers.CharField(max_length=25)
    jenisDokumen = serializers.CharField()
    alamatProperti = serializers.CharField(max_length=255, default="Indonesia")
    ppat = serializers.CharField(max_length=255)
    pdf = serializers.FileField()
    body = serializers.CharField(max_length=200)
    completed = serializers.BooleanField(default=False)  # type: ignore
    updated = serializers.DateTimeField()
    created = serializers.DateTimeField()

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Todo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.id = validated_data.get("id", instance.id)
        instance.nameDoc = validated_data.get("nama Dokumen", instance.nameDoc)
        instance.noDoc = validated_data.get("nomor Dokumen", instance.noDoc)
        instance.jenisDokumen = validated_data.get(
            "jenis Dokumen", instance.jenisDokumen
        )
        instance.alamatProperti = validated_data.get(
            "alamat properti", instance.alamatProperti
        )
        instance.pdf = validated_data.get("PDF", instance.pdf)
        instance.body = validated_data.get("Body", instance.body)
        instance.complete = validated_data.get("status", instance.complete)
        instance.update = validated_data.get("update", instance.update)
        instance.created = validated_data.get("created", instance.created)
        instance.save()
        return instance

    class Meta:
        model = Todo
        fields = "__all__"


class AjbSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    nameDoc = serializers.CharField(max_length=255)
    noDoc = serializers.CharField(max_length=25)
    jenisDokumen = serializers.CharField()
    alamatProperti = serializers.CharField(max_length=255, default="Indonesia")
    ppat = serializers.CharField(max_length=255)
    pdf = serializers.FileField()
    body = serializers.CharField(max_length=200)
    completed = serializers.BooleanField(default=False)  # type: ignore
    updated = serializers.DateTimeField()
    created = serializers.DateTimeField()

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Todo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.nameDoc = validated_data.get("nama Dokumen", instance.nameDoc)
        instance.noDoc = validated_data.get("nomor Dokumen", instance.noDoc)
        instance.jenisDokumen = validated_data.get(
            "jenis Dokumen", instance.jenisDokumen
        )
        instance.alamatProperti = validated_data.get(
            "alamat properti", instance.alamatProperti
        )
        instance.pdf = validated_data.get("PDF", instance.pdf)
        instance.body = validated_data.get("Body", instance.body)
        instance.complete = validated_data.get("status", instance.complete)
        instance.update = validated_data.get("update", instance.update)
        instance.created = validated_data.get("created", instance.created)
        instance.save()
        return instance

    class Meta:
        model = models.Todo
        fields = "__all__"


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = "__all__"
