from django.contrib import admin
from revamp_tool.models import *


# Register your models here.
class RevampProjectAdmin(admin.ModelAdmin):
	pass


class WasteStreamsAdmin(admin.ModelAdmin):
	pass


class PricesAdmin(admin.ModelAdmin):
	pass


class TreatmentProcessesAdmin(admin.ModelAdmin):
	pass


class WasteQualityAdmin(admin.ModelAdmin):
	pass


admin.site.register(RevampProject, RevampProjectAdmin)
admin.site.register(WasteStreams, WasteStreamsAdmin)
admin.site.register(Prices, PricesAdmin)
admin.site.register(TreatmentProcesses, TreatmentProcessesAdmin)
admin.site.register(WasteQuality, WasteQualityAdmin)
