from attr import field
from rest_framework import serializers
from .models import Todo
from . import models

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = '__all__'

class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        field = ['id', 'pdf']