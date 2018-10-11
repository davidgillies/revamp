from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView

from revamp_tool.models import WasteQuality, TreatmentProcesses, Prices


# Home page
class HomePage(TemplateView):
    template_name = 'revamp_tool/home.html'


# tool
class RevampTool(TemplateView):
    template_name = 'revamp_tool/revamp_tool.html'

    def get_context_data(self, *args, **kwargs):
        context = super(RevampTool, self).get_context_data(*args, **kwargs)
        context['wastequalityoptions'] = WasteQuality.objects.get(name='default')
        context['treatmentprocesses'] = TreatmentProcesses.objects.get(name='default')
        context['prices'] = Prices.objects.get(name='default')
        return context
