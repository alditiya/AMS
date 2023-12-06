from pyexpat import model
from attr import field
from rest_framework import serializers
from django.contrib.auth.models import User, Group
from .models import Todo
from . import models


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ("url", "username", "email", "groups")


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
        instance.title = validated_data.get("nama Dokumen", instance.nameDoc)
        instance.code = validated_data.get("nomor Dokumen", instance.noDoc)
        instance.linenos = validated_data.get("jenis Dokumen", instance.jenisDokumen)
        instance.language = validated_data.get(
            "alamat properti", instance.alamatProperti
        )
        instance.style = validated_data.get("PDF", instance.pdf)
        instance.style = validated_data.get("Body", instance.body)
        instance.style = validated_data.get("status", instance.complete)
        instance.style = validated_data.get("update", instance.update)
        instance.style = validated_data.get("created", instance.created)
        instance.save()
        return instance

    class Meta:
        model = models.Todo
        fields = "__all__"


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        field = ["id", "pdf"]
