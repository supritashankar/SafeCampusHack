import pusher
import json
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.template import loader
from django.views.generic.base import TemplateView
from django.views import View

class HomeView(TemplateView):

    template_name = "messenger/home.html"

    def get_context_data(self, **kwargs):
        context = super(HomeView, self).get_context_data(**kwargs)
        return context
