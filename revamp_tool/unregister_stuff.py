from django.contrib import admin
from wagtail.core.models import *
from taggit.models import Tag
from wagtail.documents.models import Document
from wagtail.images.models import Image


admin.site.unregister(Page)
admin.site.unregister(Site)
admin.site.unregister(Tag)
admin.site.unregister(Document)
admin.site.unregister(Image)
