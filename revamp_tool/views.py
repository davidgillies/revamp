from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView


# Create your views here.
def home_page(request):
    return HttpResponse('<!DOCTYPE html><title>REVAMP</title></html>')


class HomePage(TemplateView):
    template_name = 'revamp_tool/home.html'
