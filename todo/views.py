from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User, Group
from rest_framework import permissions
from rest_framework import viewsets
from . import serializers
from rest_framework.parsers import JSONParser
from .serializers import FileSerializer, UserSerializer, GroupSerializer, TodoSerializer
from .models import Todo
from . import models

# Create your views here.


@csrf_exempt
def todo_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == "GET":
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = TodoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def todo_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        todo = Todo.objects.get(pk=pk)
    except Todo.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "GET":
        serializer = TodoSerializer(todo)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = TodoSerializer(todo, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == "DELETE":
        todo.delete()
        return HttpResponse(status=204)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class TodoViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer


class FilesViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = FileSerializer
