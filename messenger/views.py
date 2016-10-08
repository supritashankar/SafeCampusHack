import pusher
import json
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import loader
from django.views.generic.base import TemplateView
from django.views import View

def index(request):
    return HttpResponse("Hello, world. You're at the messenger index.")
