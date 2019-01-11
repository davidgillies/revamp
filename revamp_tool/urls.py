from django.urls import path
from django.views.generic import TemplateView

from revamp_tool.views import HomePage, RevampTool, RevampDev, download_excel, delete_project, load_approved_project, ProjectSaveView

from revamp_tool import unregister_stuff

urlpatterns = [
    path('dev/', RevampDev.as_view(), name='revamp-dev'),
    path('download_excel/<int:project_id>/', download_excel, name='download_excel'),
    path('delete_project/', delete_project, name='delete_project'),
    path('save_project/', ProjectSaveView.as_view(), name='save_project'),
    path('load_approved_library/', load_approved_project, name='load_approved_library'),
    path('', RevampTool.as_view(), name='revamp tool'),
    #path('', HomePage.as_view(), name='home'),
]
