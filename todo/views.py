from django.shortcuts import render
from .models import Todo
from rest_framework import viewsets
from . import serializers
from .serializers import FileSerializer
from . import models

# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer
    
class FilesViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = FileSerializer
