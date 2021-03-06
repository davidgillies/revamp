"""revamp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from revamp_tool import urls as rt_urls
from django.views.i18n import JavaScriptCatalog
from django.conf.urls.i18n import i18n_patterns
from django.views.decorators.csrf import csrf_exempt
from wagtail.admin import urls as wagtailadmin_urls
from wagtail.documents import urls as wagtaildocs_urls
from wagtail.core import urls as wagtail_urls

from graphene_django.views import GraphQLView

urlpatterns = [
    path('jsi18n/', JavaScriptCatalog.as_view(), name='javascript-catalog'),
    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=True))),

]

urlpatterns += i18n_patterns(
    path('admintools/', include('admin_tools.urls')),
    path('admin/', admin.site.urls),
    path('accounts/', include('registration.backends.default.urls')),
    path('revamp_tool/', include(rt_urls)),
    re_path(r'^cms/', include(wagtailadmin_urls)),
    re_path(r'^documents/', include(wagtaildocs_urls)),
    re_path(r'^', include(wagtail_urls)),
)
