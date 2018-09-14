from django.urls import path

from revamp_tool.views import home_page

urlpatterns = [
    path('', home_page, name='home'),
    ]
