##from tarfile import data_filter
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User, Group
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from rest_framework import viewsets, permissions, generics
from rest_framework.parsers import JSONParser
from . import serializers
from .serializers import FileSerializer, UserSerializer, GroupSerializer, TodoSerializer
from .models import Todo
from . import models
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication

# Create your views here.
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
import json
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


@require_POST
def login_view(request):
    data = json.loads(request.body)
    username = data.get("username")
    password = data.get("password")

    if username is None or password is None:
        return JsonResponse({"detail": "Please provide username and password"})
    user = authenticate(username=username, password=password)
    if user is None:
        return JsonResponse({"detail": "Invalid Credential"}, status=400)
    login(request, user)
    return JsonResponse({"details": "Succesfully Logged in"})


def logout_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"detail": "you are not logged in!"}, status=400)
    logout(request)
    return JsonResponse({"detail": "succesfully logged out!"})


@ensure_csrf_cookie
def session_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"isauthenticated": False})
    return JsonResponse({"isauthenticated": True})


def whoami_view(request):
    if not request.user.is_authenticated:
        return JsonResponse({"isauthenticated": False})
    return JsonResponse({"Username": request.user.username})


class LoginView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            "user": str(request.user),  # `django.contrib.auth.User` instance.
            "auth": str(request.auth),  # None
        }
        return Response(content)


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


class UserDetailAPI(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        user = User.objects.get(id=request.user.id)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all().order_by("id").values()
    serializer_class = serializers.TodoSerializer


class FilesViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = FileSerializer


class AjbViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.filter(jenisDokumen="AJB").values()
    serializer_class = serializers.TodoSerializer


class PbbViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.filter(jenisDokumen="PBB").values()
    serializer_class = serializers.TodoSerializer


class HgbViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.filter(jenisDokumen="HGB").values()
    serializer_class = serializers.TodoSerializer


@csrf_exempt
def shmviewset(request):
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
