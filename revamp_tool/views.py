from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.generic import TemplateView, View
from django.forms.models import model_to_dict
from django.utils.crypto import get_random_string
from openpyxl import load_workbook
from openpyxl.writer.excel import save_virtual_workbook
from datetime import datetime

import json

from revamp_tool.models import WasteQuality, TreatmentProcesses, Prices, RevampProject, WasteStreams, Location


def convert_results(items):
    result = {}
    for key, value in items:
        if value == 'None' or value == '':
            value = 0
        else:
            try:
                value = float(value)
            except:
                pass
        result[key] = value
    return result


# Home page
class HomePage(TemplateView):
    template_name = 'revamp_tool/home.html'


class RevampDev(TemplateView):
    template_name = 'revamp_tool/revamp_tool.html'

    def get_context_data(self, *args, **kwargs):
        context = super(RevampDev, self).get_context_data(*args, **kwargs)
        context['wastequalityoptions'] = WasteQuality.objects.get(name='fs_default')
        context['treatmentprocesses'] = TreatmentProcesses.objects.get(name='fs_default')
        context['prices'] = Prices.objects.get(id=2)
        return context

    def prices(self):
        return Prices.objects.get(id=2)

#tool
class RevampTool(TemplateView):
    template_name = "revamp_tool/revamp_dev.html"
    
    def get_context_data(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            approved_projects = RevampProject.objects.filter(active=True)
            projects_db = RevampProject.objects.filter(user=self.request.user).exclude(deleted=True).order_by('-updated_at')
            projects = []
            for p in projects_db:
                proj = {}
                proj['id'] = p.id
                proj['created_at'] = p.created_at
                proj['updated_at'] = p.updated_at
                proj['prices'] = p.prices
                proj['name'] = p.name
                proj['fs_treatment_processes'] = p.fs_treatment_processes
                proj['ss_treatment_processes'] = p.ss_treatment_processes
                proj['sw_treatment_processes'] = p.sw_treatment_processes
                proj['fs_waste_quality'] = p.fs_waste_quality
                proj['ss_waste_quality'] = p.ss_waste_quality
                proj['sw_waste_quality'] = p.sw_waste_quality
                proj['wastestreams'] = p.waste_streams
                proj['location'] = p.location
                print("LOC: %s" % p.location.city)
                proj['link_url'] = '/revamp_tool/download_excel/'+str(p.id)
                
                projects.append(proj)
 
            context = super(RevampTool, self).get_context_data(*args, **kwargs)
            if projects_db:
                project = projects_db.latest('updated_at')
                print("PROJECT %s" % project.id)
            else:
                project = RevampProject.objects.get(id=2)
            context['project_id'] = project.id
            context['name'] = project.name
            print("NAME %s" % project.name)
            context['wastestreams'] = project.waste_streams
            context['wastequalityoptions_fs'] = project.fs_waste_quality
            context['treatmentprocesses_fs'] = project.fs_treatment_processes
            context['wastequalityoptions_ss'] = project.ss_waste_quality
            context['treatmentprocesses_ss'] = project.ss_treatment_processes
            context['wastequalityoptions_sw'] = project.sw_waste_quality
            context['treatmentprocesses_sw'] = project.sw_treatment_processes
            context['location'] = project.location
            print("LOC2: %s" % project.location.city)
            context['prices'] = project.prices
            context['projects'] = projects
            context['approved_projects'] = approved_projects
        else:
            context = super(RevampTool, self).get_context_data(*args, **kwargs)
            project = RevampProject.objects.get(id=2)
            context['project_id'] = project.id
            context['name'] = project.name
            print("NAME2 %s" % project.name)
            context['wastestreams'] = project.waste_streams
            context['wastequalityoptions_fs'] = project.fs_waste_quality
            context['treatmentprocesses_fs'] = project.fs_treatment_processes
            context['wastequalityoptions_ss'] = project.ss_waste_quality
            context['treatmentprocesses_ss'] = project.ss_treatment_processes
            context['wastequalityoptions_sw'] = project.sw_waste_quality
            context['treatmentprocesses_sw'] = project.sw_treatment_processes
            context['location'] = project.location
            print("LOC3: %s" % project.location.city)
            context['prices'] = Prices.objects.get(id=2)
        return context
    

class ProjectSaveView(View):
    def post(self,request):
        if request.is_ajax():
            print(request.POST)
            random_name = get_random_string()[0:7]
            
            wq_fs_dict = json.loads(request.POST.get('wastequality_fs'))
            wq_ss_dict = json.loads(request.POST.get('wastequality_ss'))
            wq_sw_dict = json.loads(request.POST.get('wastequality_sw'))
            tp_fs_dict = json.loads(request.POST.get('treatmentprocesses_fs'))
            tp_ss_dict = json.loads(request.POST.get('treatmentprocesses_ss'))
            tp_sw_dict = json.loads(request.POST.get('treatmentprocesses_sw'))
            prices_dict = json.loads(request.POST.get('prices'))
            location_dict = json.loads(request.POST.get('location'))
            wastestreams_dict = json.loads(request.POST.get('wastestreams'))
            project_id = json.loads(request.POST.get('project_id'))
            project_name = json.loads(request.POST.get('project_name'))
            save_new = json.loads(request.POST.get('save_new'))
                   
            print("LOC-DICT: %s" % location_dict)
            wq_fs_dict = convert_results(wq_fs_dict.items())
            print("LOC-DICT: %s" % location_dict)
            wq_fs_dict['name'] = 'wq_fs_'+request.user.username+random_name
            wq_fs_dict.pop('created_at', None)
            print("WQ-FS : %s" % wq_fs_dict)
            wq_ss_dict = convert_results(wq_ss_dict.items())
            wq_ss_dict['name'] = 'wq_ss_'+request.user.username+random_name
            wq_ss_dict.pop('created_at', None)
            wq_sw_dict = convert_results(wq_sw_dict.items())
            wq_sw_dict['name'] = 'wq_sw_'+request.user.username+random_name
            wq_sw_dict.pop('created_at', None)
            tp_fs_dict = convert_results(tp_fs_dict.items())
            tp_fs_dict['name'] = 'tp_fs_'+request.user.username+random_name
            tp_ss_dict = convert_results(tp_ss_dict.items())
            tp_ss_dict['name'] = 'tp_ss_'+request.user.username+random_name
            tp_sw_dict = convert_results(tp_sw_dict.items())
            tp_sw_dict['name'] = 'tp_sw_'+request.user.username+random_name
            prices_dict = convert_results(prices_dict.items())
            prices_dict['name'] = 'prices_'+request.user.username+random_name
            #location_dict = convert_results(location_dict.items())
            location_dict['date_prepared'] = datetime.now()
            location_dict['prepared_by'] = request.user
            if location_dict['population'] == 'None':
                location_dict['population'] = 0
            
            wastestreams_dict = convert_results(wastestreams_dict.items())
            
            wastestreams = {}
            wastestreams['faecal_sludge'] = wastestreams_dict['fs_amount']
            wastestreams['fs_anaeribic_digestion'] = wastestreams_dict['fs_ad_pc']
            wastestreams['fs_solid_fuel'] = wastestreams_dict['fs_sf_pc']
            wastestreams['fs_black_soldier_fly_process'] = wastestreams_dict['fs_bsfp_pc']
            wastestreams['fs_compost'] = wastestreams_dict['fs_c_pc']
            wastestreams['sewage_sludge'] = wastestreams_dict['ss_amount']
            wastestreams['ss_anaeribic_digestion'] = wastestreams_dict['ss_ad_pc']
            wastestreams['ss_solid_fuel'] = wastestreams_dict['ss_sf_pc']
            wastestreams['ss_black_soldier_fly_process'] = wastestreams_dict['ss_bsfp_pc']
            wastestreams['ss_compost'] = wastestreams_dict['ss_c_pc']
            wastestreams['solid_waste'] = wastestreams_dict['sw_amount']
            wastestreams['sw_anaeribic_digestion'] = wastestreams_dict['sw_ad_pc']
            wastestreams['sw_solid_fuel'] = wastestreams_dict['sw_sf_pc']
            wastestreams['sw_black_soldier_fly_process'] = wastestreams_dict['sw_bsfp_pc']
            wastestreams['sw_compost'] = wastestreams_dict['sw_c_pc']
            wastestreams['name'] = 'ws_'+request.user.username+random_name
            print("WQ-FS: %s" % wq_fs_dict)


            if save_new:
                wq_fs = WasteQuality.objects.create(**wq_fs_dict)
                wq_ss = WasteQuality.objects.create(**wq_ss_dict)
                wq_sw = WasteQuality.objects.create(**wq_sw_dict)
                tp_fs = TreatmentProcesses.objects.create(**tp_fs_dict)
                tp_ss = TreatmentProcesses.objects.create(**tp_ss_dict)
                tp_sw = TreatmentProcesses.objects.create(**tp_sw_dict)
                prices = Prices.objects.create(**prices_dict)
                location = Location.objects.create(**location_dict)
                waste_streams = WasteStreams.objects.create(**wastestreams)
                project = RevampProject() 
                
                project.user = request.user
                project.name = project_name
                project.location = location
                project.waste_streams = waste_streams
                project.prices = prices
                project.fs_treatment_processes = tp_fs
                project.ss_treatment_processes = tp_ss
                project.sw_treatment_processes = tp_sw
                project.fs_waste_quality = wq_fs
                project.ss_waste_quality = wq_ss
                project.sw_waste_quality = wq_sw

                project.save()
                data = {"project_id":project.id}
            else:
                try:
                    project = RevampProject.objects.filter(id=project_id).filter(user=request.user)[0]
                except:
                    project = None
            
                if project:
                    WasteQuality.objects.filter(pk=project.fs_waste_quality.id).update(**wq_fs_dict)
                    WasteQuality.objects.filter(pk=project.ss_waste_quality.id).update(**wq_ss_dict)
                    WasteQuality.objects.filter(pk=project.sw_waste_quality.id).update(**wq_sw_dict)

                    TreatmentProcesses.objects.filter(pk=project.fs_treatment_processes.id).update(**tp_fs_dict)
                    TreatmentProcesses.objects.filter(pk=project.ss_treatment_processes.id).update(**tp_ss_dict)
                    TreatmentProcesses.objects.filter(pk=project.sw_treatment_processes.id).update(**tp_sw_dict)
                    Prices.objects.filter(pk=project.prices.id).update(**prices_dict)
                    Location.objects.filter(pk=project.location.id).update(**location_dict)
                    WasteStreams.objects.filter(pk=project.waste_streams.id).update(**wastestreams)
                    project.name = project_name
                    project.save()
                    data = {"project_id":project.id, "updated": project.updated_at}
                    print(project.updated_at)
                else:
                    data = {"error": "You cannot save this project.  Please use Save as New."}
            
            return JsonResponse(data)

    
def download_excel(request, project_id):
    project = RevampProject.objects.get(id=project_id)
    
    wb = load_workbook('/app/revamp_tool/REVAMPv2.xlsm')
    
    wb['WasteQuality']['C2'] = project.fs_waste_quality.total_solids_pc
    wb['WasteQuality']['C3'] = project.fs_waste_quality.total_solids
    wb['WasteQuality']['C4'] = project.fs_waste_quality.volatile_solids
    wb['WasteQuality']['C5'] = project.fs_waste_quality.total_nitrogen
    wb['WasteQuality']['C6'] = project.fs_waste_quality.total_nitrogen_mg_n_kg_ts
    wb['WasteQuality']['C7'] = project.fs_waste_quality.total_phosphorus
    wb['WasteQuality']['C8'] = project.fs_waste_quality.total_phosphorus_mg_p_kg_ts
    wb['WasteQuality']['C9'] = project.fs_waste_quality.total_potassium
    wb['WasteQuality']['C10'] = project.fs_waste_quality.total_potassium_mg_k_kg_ts
    wb['WasteQuality']['C11'] = project.fs_waste_quality.calorific_value
    wb['WasteQuality']['C12'] = project.fs_waste_quality.biomethane_potential
    
    wb['WasteQuality']['E2'] = project.ss_waste_quality.total_solids_pc
    wb['WasteQuality']['E3'] = project.ss_waste_quality.total_solids
    wb['WasteQuality']['E4'] = project.ss_waste_quality.volatile_solids
    wb['WasteQuality']['E5'] = project.ss_waste_quality.total_nitrogen
    wb['WasteQuality']['E6'] = project.ss_waste_quality.total_nitrogen_mg_n_kg_ts
    wb['WasteQuality']['E7'] = project.ss_waste_quality.total_phosphorus
    wb['WasteQuality']['E8'] = project.ss_waste_quality.total_phosphorus_mg_p_kg_ts
    wb['WasteQuality']['E9'] = project.ss_waste_quality.total_potassium
    wb['WasteQuality']['E10'] = project.ss_waste_quality.total_potassium_mg_k_kg_ts
    wb['WasteQuality']['E11'] = project.ss_waste_quality.calorific_value
    wb['WasteQuality']['E12'] = project.ss_waste_quality.biomethane_potential
    
    wb['WasteQuality']['G2'] = project.sw_waste_quality.total_solids_pc
    wb['WasteQuality']['G3'] = project.sw_waste_quality.total_solids
    wb['WasteQuality']['G4'] = project.sw_waste_quality.volatile_solids
    wb['WasteQuality']['G5'] = project.sw_waste_quality.total_nitrogen
    wb['WasteQuality']['G6'] = project.sw_waste_quality.total_nitrogen_mg_n_kg_ts
    wb['WasteQuality']['G7'] = project.sw_waste_quality.total_phosphorus
    wb['WasteQuality']['G8'] = project.sw_waste_quality.total_phosphorus_mg_p_kg_ts
    wb['WasteQuality']['G9'] = project.sw_waste_quality.total_potassium
    wb['WasteQuality']['G10'] = project.sw_waste_quality.total_potassium_mg_k_kg_ts
    wb['WasteQuality']['G11'] = project.sw_waste_quality.calorific_value
    wb['WasteQuality']['G12'] = project.sw_waste_quality.biomethane_potential
    
    wb['TreatmentProcesses']['C2'] = project.fs_treatment_processes.volatile_solids_degradation_rate
    wb['TreatmentProcesses']['C3'] = project.fs_treatment_processes.dmr_rate_anaerobic_digestion
    wb['TreatmentProcesses']['C4'] = project.fs_treatment_processes.bcr_black_soldier_fly
    wb['TreatmentProcesses']['C5'] = project.fs_treatment_processes.dmr_rate_bsf_residue
    wb['TreatmentProcesses']['C6'] = project.fs_treatment_processes.tnr_bsf_residue
    wb['TreatmentProcesses']['C7'] = project.fs_treatment_processes.tpr_bsf_residue
    wb['TreatmentProcesses']['C8'] = project.fs_treatment_processes.tpotr_bsf_residue
    wb['TreatmentProcesses']['C9'] = project.fs_treatment_processes.dmr_compost
    wb['TreatmentProcesses']['C10'] = project.fs_treatment_processes.tnr_composting_reduction
    wb['TreatmentProcesses']['C11'] = project.fs_treatment_processes.tpr_composting_reduction
    wb['TreatmentProcesses']['C12'] = project.fs_treatment_processes.tpotr_composting_reduction
    
    wb['TreatmentProcesses']['E2'] = project.ss_treatment_processes.volatile_solids_degradation_rate
    wb['TreatmentProcesses']['E3'] = project.ss_treatment_processes.dmr_rate_anaerobic_digestion
    wb['TreatmentProcesses']['E4'] = project.ss_treatment_processes.bcr_black_soldier_fly
    wb['TreatmentProcesses']['E5'] = project.ss_treatment_processes.dmr_rate_bsf_residue
    wb['TreatmentProcesses']['E6'] = project.ss_treatment_processes.tnr_bsf_residue
    wb['TreatmentProcesses']['E7'] = project.ss_treatment_processes.tpr_bsf_residue
    wb['TreatmentProcesses']['E8'] = project.ss_treatment_processes.tpotr_bsf_residue
    wb['TreatmentProcesses']['E9'] = project.fs_treatment_processes.dmr_compost
    wb['TreatmentProcesses']['E10'] = project.ss_treatment_processes.tnr_composting_reduction
    wb['TreatmentProcesses']['E11'] = project.ss_treatment_processes.tpr_composting_reduction
    wb['TreatmentProcesses']['E12'] = project.ss_treatment_processes.tpotr_composting_reduction
    
    wb['TreatmentProcesses']['G2'] = project.sw_treatment_processes.volatile_solids_degradation_rate
    wb['TreatmentProcesses']['G3'] = project.sw_treatment_processes.dmr_rate_anaerobic_digestion
    wb['TreatmentProcesses']['G4'] = project.sw_treatment_processes.bcr_black_soldier_fly
    wb['TreatmentProcesses']['G5'] = project.sw_treatment_processes.dmr_rate_bsf_residue
    wb['TreatmentProcesses']['G6'] = project.sw_treatment_processes.tnr_bsf_residue
    wb['TreatmentProcesses']['G7'] = project.sw_treatment_processes.tpr_bsf_residue
    wb['TreatmentProcesses']['G8'] = project.sw_treatment_processes.tpotr_bsf_residue
    wb['TreatmentProcesses']['G9'] = project.fs_treatment_processes.dmr_compost
    wb['TreatmentProcesses']['G10'] = project.sw_treatment_processes.tnr_composting_reduction
    wb['TreatmentProcesses']['G11'] = project.sw_treatment_processes.tpr_composting_reduction
    wb['TreatmentProcesses']['G12'] = project.sw_treatment_processes.tpotr_composting_reduction
    
    wb['Prices']['B2'] = project.prices.biogas_price
    wb['Prices']['B3'] = project.prices.solid_combustion_price
    wb['Prices']['B3'] = project.prices.prepupae_price
    wb['Prices']['B4'] = project.prices.soil_conditioner_price
    
    wb['Results']['C2'] = project.waste_streams.faecal_sludge
    wb['Results']['C5'] = project.waste_streams.fs_anaeribic_digestion
    wb['Results']['C6'] = project.waste_streams.fs_solid_fuel
    wb['Results']['C7'] = project.waste_streams.fs_black_soldier_fly_process
    wb['Results']['C8'] = project.waste_streams.fs_compost 
    print(project.waste_streams.fs_compost)
    print(project.waste_streams.ss_compost)
    print(project.waste_streams.sw_compost)
    wb['Results']['E2'] = project.waste_streams.sewage_sludge
    wb['Results']['E5'] = project.waste_streams.ss_anaeribic_digestion
    wb['Results']['E6'] = project.waste_streams.ss_solid_fuel
    wb['Results']['E7'] = project.waste_streams.ss_black_soldier_fly_process
    wb['Results']['E8'] = project.waste_streams.ss_compost

    wb['Results']['G2'] = project.waste_streams.solid_waste
    wb['Results']['G5'] = project.waste_streams.sw_anaeribic_digestion
    wb['Results']['G6'] = project.waste_streams.sw_solid_fuel
    wb['Results']['G7'] = project.waste_streams.sw_black_soldier_fly_process
    wb['Results']['G8'] = project.waste_streams.sw_compost
    
    
    response = HttpResponse(content_type='application/vnd.ms-excel')
    response['Content-Disposition'] = 'attachment; filename="revamp.xlsx"'
    
    wb.save(response)
    return response


def delete_project(request):
    if request.user.is_authenticated:
        project = RevampProject.objects.filter(user=request.user).get(id=int(request.GET.get('proj_id')))
        project.deleted = True
        project.save()
    return HttpResponse("OK")

def load_approved_project(request):
    if request.user.is_authenticated:
        project = RevampProject.objects.filter(active=True).get(id=int(request.GET.get('proj_id')))
        
        proj = {}
        proj['id'] = project.id
        proj['created_at'] = project.created_at
        proj['updated_at'] = project.updated_at
        print(project.updated_at)
        proj['prices'] = model_to_dict(project.prices)
        proj['name'] = project.name
        proj['fs_treatment_processes'] = model_to_dict(project.fs_treatment_processes)
        print(proj['fs_treatment_processes'])
        print(project.fs_treatment_processes)
        proj['ss_treatment_processes'] = model_to_dict(project.ss_treatment_processes)
        proj['sw_treatment_processes'] = model_to_dict(project.sw_treatment_processes)
        proj['fs_waste_quality'] = model_to_dict(project.fs_waste_quality)
        proj['ss_waste_quality'] = model_to_dict(project.ss_waste_quality)
        proj['sw_waste_quality'] = model_to_dict(project.sw_waste_quality)
        proj['wastestreams'] = model_to_dict(project.waste_streams)
        proj['link_url'] = '/revamp_tool/download_excel/'+str(project.id)
        
        return HttpResponse(json.dumps(proj, indent=4, sort_keys=True, default=str))
