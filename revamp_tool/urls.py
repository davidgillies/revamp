from django.urls import path
from django.views.generic import TemplateView

from revamp_tool.views import HomePage

urlpatterns = [
    path('', HomePage.as_view(), name='home'),
]
