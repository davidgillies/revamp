from django.urls import path
from django.views.generic import TemplateView

from revamp_tool.views import HomePage, RevampTool

urlpatterns = [
	path('revamp_tool/', RevampTool.as_view(), name='revamp tool'),
    path('', HomePage.as_view(), name='home'),
]
