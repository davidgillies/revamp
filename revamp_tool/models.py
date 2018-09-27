from django.db import models
from django.contrib.auth.models import User


WASTE_STREAMS_UNITS = (
    (1, 'cubic meters/day'),
    (2, 'tonnes/day'),
    )

PRICE_UNITS = (
    (1, 'US dollars/normal cubic meter'),
    (2, 'US dollars/ton'),
    )

TREATMENT_PROCESS_UNITS = (
    (1, '%'),
    (2, '% of initial TS'),
    (3, '% of initial TN'),
    (4, '% of initial TP'),
    (5, '% of initial TK'),
    (6, '% of initial mass'),
    )


# Create your models here.
class WasteStreams(models.Model):
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    faecal_sludge = models.FloatField(blank=True, null=True)
    faecal_sludge_units = models.PositiveSmallIntegerField(
        choices=WASTE_STREAMS_UNITS,
        default=WASTE_STREAMS_UNITS[0][0]
    )
    # percentages of faecal sludge to each option
    fs_anaeribic_digestion = models.FloatField(blank=True, null=True)
    fs_solid_fuel = models.FloatField(blank=True, null=True)
    fs_black_soldier_fly_process = models.FloatField(blank=True, null=True)
    fs_compost = models.FloatField(blank=True, null=True)

    sewage_sludge = models.FloatField(blank=True, null=True)
    sewage_sludge_units = models.PositiveSmallIntegerField(
        choices=WASTE_STREAMS_UNITS,
        default=WASTE_STREAMS_UNITS[1][0]
    )
    # percentages of sewage sludge to each option
    ss_anaeribic_digestion = models.FloatField(blank=True, null=True)
    ss_solid_fuel = models.FloatField(blank=True, null=True)
    ss_black_soldier_fly_process = models.FloatField(blank=True, null=True)
    ss_compost = models.FloatField(blank=True, null=True)

    solid_waste = models.FloatField(blank=True, null=True)
    solid_waste_units = models.PositiveSmallIntegerField(
        choices=WASTE_STREAMS_UNITS,
        default=WASTE_STREAMS_UNITS[1][0]
    )
    # percentages of solid waste to each option
    sw_anaeribic_digestion = models.FloatField(blank=True, null=True)
    sw_solid_fuel = models.FloatField(blank=True, null=True)
    sw_black_soldier_fly_process = models.FloatField(blank=True, null=True)
    sw_compost = models.FloatField(blank=True, null=True)


class Prices(models.Model):
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    biogas_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True, default=0.33)
    biogas_units = models.PositiveSmallIntegerField(
        choices=PRICE_UNITS,
        default=PRICE_UNITS[0][0]
    )
    biogas_reference = models.TextField(blank=True, null=True)

    solid_combustion_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True, default=300.00)
    solid_combustion_units = models.PositiveSmallIntegerField(
        choices=PRICE_UNITS,
        default=PRICE_UNITS[1][0]
    )
    solid_combustion_reference = models.TextField(blank=True, null=True)

    prepupae_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True, default=200.00)
    prepupae_units = models.PositiveSmallIntegerField(
        choices=PRICE_UNITS,
        default=PRICE_UNITS[1][0]
    )
    prepupae_reference = models.TextField(blank=True, null=True)

    soil_conditioner_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True, default=5.00)
    soil_conditioner_units = models.PositiveSmallIntegerField(
        choices=PRICE_UNITS,
        default=PRICE_UNITS[1][0]
    )
    soil_conditioner_reference = models.TextField(blank=True, null=True)


class TreatmentProcesses(models.Model):
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    volatile_solids_degradation_rate = models.FloatField(blank=True, null=True, default=100.0)
    volatile_solids_degradation_rate_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[0][0]
    )
    volatile_solids_degradation_rate_reference = models.TextField(blank=True, null=True)

    # dmr = Dry mass reduction rate
    dmr_rate_anaerobic_digestion = models.FloatField(blank=True, null=True, default=67.50)
    dmr_rate_anaerobic_digestion_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[1][0]
    )
    dmr_rate_anaerobic_digestion_reference = models.TextField(blank=True, null=True)

    # bcr = biomass conversion rate
    bcr_black_soldier_fly = models.FloatField(blank=True, null=True, default=10.00)
    bcr_black_soldier_fly_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[0][0]
    )
    bcr_black_soldier_fly_reference = models.TextField(blank=True, null=True)

    # 
    dmr_rate_bsf_residue = models.FloatField(blank=True, null=True, default=51.85)
    dmr_rate_bsf_residue_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[1][0]
    )
    dmr_rate_bsf_residue_reference = models.TextField(blank=True, null=True)

    # thr = Total nitrogen reduction
    tnr_bsf_residue = models.FloatField(blank=True, null=True, default=40.00)
    tnr_bsf_residue_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[2][0]
    )
    tnr_bsf_residue_reference = models.TextField(blank=True, null=True)

    # tpr = Total phosphorus reduction
    tpr_bsf_residue = models.FloatField(blank=True, null=True, default=65.50)
    tpr_bsf_residue_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[3][0]
    )
    tpr_bsf_residue_reference = models.TextField(blank=True, null=True)

    # tpotr = Total Potassium reduction
    tpotr_bsf_residue = models.FloatField(blank=True, null=True, default=55.00)
    tpotr_bsf_residue_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[4][0]
    )
    tpotr_bsf_residue_reference = models.TextField(blank=True, null=True)

    dmr_compost = models.FloatField(blank=True, null=True, default=19.40)
    dmr_compost_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[5][0]
    )
    dmr_compost_reference = models.TextField(blank=True, null=True)

    tnr_composting_reduction = models.FloatField(blank=True, null=True, default=34.30)
    tnr_composting_reduction_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[2][0]
    )
    tnr_composting_reduction_reference = models.TextField(blank=True, null=True)

    tpr_composting_reduction = models.FloatField(blank=True, null=True, default=1.77)
    tpr_composting_reduction_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[3][0]
    )
    tpr_composting_reduction_reference = models.TextField(blank=True, null=True)

    tpotr_composting_reduction = models.FloatField(blank=True, null=True, default=12.63)
    tpotr_composting_reduction_units = models.PositiveSmallIntegerField(
        choices=TREATMENT_PROCESS_UNITS,
        default=TREATMENT_PROCESS_UNITS[4][0]
    )
    tpotr_composting_reduction_reference = models.TextField(blank=True, null=True)


class WasteQuality(models.Model):
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # total solids percentage
    total_solids_pc = models.FloatField(blank=True, null=True, default=3.00)
    total_solids_pc_reference = models.TextField(blank=True, null=True)
    # 
    total_solids = models.FloatField(blank=True, null=True, default=30000.00)
    total_solids_reference = models.TextField(blank=True, null=True)

    volatile_solids = models.FloatField(blank=True, null=True, default=57.00)
    volatile_solids_reference = models.TextField(blank=True, null=True)

    # total nitrogen mg N/L
    total_nitrogen = models.FloatField(blank=True, null=True, default=3310.00)
    total_nitrogen_reference = models.TextField(blank=True, null=True)

    # total nitrogen mg N/Kg TS
    total_nitrogen_mg_n_kg_ts = models.FloatField(blank=True, null=True)
    total_nitrogen_mg_n_kg_ts_reference = models.TextField(blank=True, null=True)

    # total phosphorus mg P/L
    total_phosphorus = models.FloatField(blank=True, null=True, default=390.00)
    total_phosphorus_reference = models.TextField(blank=True, null=True)

    # total phosphorus mg P/Kg TS
    total_phosphorus_mg_p_kg_ts = models.FloatField(blank=True, null=True)
    total_phosphorus_mg_p_kg_ts_reference = models.TextField(blank=True, null=True)

    # total potassium mg K/L
    total_potassium = models.FloatField(blank=True, null=True, default=120.00)
    total_potassium_reference = models.TextField(blank=True, null=True)

    # total potassium mg K/Kg TS
    total_potassium_mg_k_kg_ts = models.FloatField(blank=True, null=True)
    total_potassium_mg_k_kg_ts_reference = models.TextField(blank=True, null=True)

    calorific_value = models.FloatField(blank=True, null=True, default=16.20)
    calorific_value_reference = models.TextField(blank=True, null=True)

    biomethane_potential = models.FloatField(blank=True, null=True, default=304.00)
    biomethane_potential_reference = models.TextField(blank=True, null=True)


class RevampProject(models.Model):
    name = models.CharField(max_length=30)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    waste_streams = models.ForeignKey(WasteStreams, on_delete=models.PROTECT)
    prices = models.ForeignKey(Prices, on_delete=models.PROTECT)
    treatment_processes = models.ForeignKey(TreatmentProcesses, on_delete=models.PROTECT)
    waste_quality = models.ForeignKey(WasteQuality, on_delete=models.PROTECT)
