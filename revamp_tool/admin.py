from django.contrib import admin
from revamp_tool.models import *


# Register your models here.

# IDEAS:
# 1. Add search for references?
# 2. filter on references?
# 3. arrange in fieldsets?


class RevampProjectAdmin(admin.ModelAdmin):
    save_as = True
    list_display = ('name', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')


class WasteStreamsAdmin(admin.ModelAdmin):
    save_as = True
    save_on_top = True
    list_display = ('name', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')


class PricesAdmin(admin.ModelAdmin):
    save_as = True
    save_on_top = True
    list_display = ('name', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')


class TreatmentProcessesAdmin(admin.ModelAdmin):
    save_as = True
    save_on_top = True
    list_display = ('name', 'created_at', 'updated_at', 'approved')
    list_filter = ('created_at', 'updated_at', 'approved')


class WasteQualityAdmin(admin.ModelAdmin):
    save_as = True
    save_on_top = True
    list_display = ('name', 'created_at', 'updated_at', 'approved')
    list_filter = ('created_at', 'updated_at', 'approved')


class LocationAdmin(admin.ModelAdmin):
    save_as = True
    save_on_top = True
    list_display = ('city', 'date_prepared', 'prepared_by')
    list_filter = ('date_prepared', 'prepared_by')
    
admin.site.register(RevampProject, RevampProjectAdmin)
admin.site.register(WasteStreams, WasteStreamsAdmin)
admin.site.register(Prices, PricesAdmin)
admin.site.register(TreatmentProcesses, TreatmentProcessesAdmin)
admin.site.register(WasteQuality, WasteQualityAdmin)
admin.site.register(Location, LocationAdmin)
