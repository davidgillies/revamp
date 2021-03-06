# Generated by Django 2.1.1 on 2018-09-27 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Prices',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('biogas_price', models.DecimalField(blank=True, decimal_places=2, default=0.33, max_digits=10, null=True)),
                ('biogas_units', models.PositiveSmallIntegerField(choices=[(1, 'US dollars/normal cubic meter'), (2, 'US dollars/ton')], default=1)),
                ('biogas_reference', models.TextField(blank=True, null=True)),
                ('solid_combustion_price', models.DecimalField(blank=True, decimal_places=2, default=300.0, max_digits=10, null=True)),
                ('solid_combustion_units', models.PositiveSmallIntegerField(choices=[(1, 'US dollars/normal cubic meter'), (2, 'US dollars/ton')], default=2)),
                ('solid_combustion_reference', models.TextField(blank=True, null=True)),
                ('prepupae_price', models.DecimalField(blank=True, decimal_places=2, default=200.0, max_digits=10, null=True)),
                ('prepupae_units', models.PositiveSmallIntegerField(choices=[(1, 'US dollars/normal cubic meter'), (2, 'US dollars/ton')], default=2)),
                ('prepupae_reference', models.TextField(blank=True, null=True)),
                ('soil_conditioner_price', models.DecimalField(blank=True, decimal_places=2, default=5.0, max_digits=10, null=True)),
                ('soil_conditioner_units', models.PositiveSmallIntegerField(choices=[(1, 'US dollars/normal cubic meter'), (2, 'US dollars/ton')], default=2)),
                ('soil_conditioner_reference', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TreatmentProcesses',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('volatile_solids_degradation_rate', models.FloatField(blank=True, default=100.0, null=True)),
                ('volatile_solids_degradation_rate_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=1)),
                ('volatile_solids_degradation_rate_reference', models.TextField(blank=True, null=True)),
                ('dmr_rate_anaerobic_digestion', models.FloatField(blank=True, default=67.5, null=True)),
                ('dmr_rate_anaerobic_digestion_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=2)),
                ('dmr_rate_anaerobic_digestion_reference', models.TextField(blank=True, null=True)),
                ('bcr_black_soldier_fly', models.FloatField(blank=True, default=10.0, null=True)),
                ('bcr_black_soldier_fly_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=1)),
                ('bcr_black_soldier_fly_reference', models.TextField(blank=True, null=True)),
                ('dmr_rate_bsf_residue', models.FloatField(blank=True, default=51.85, null=True)),
                ('dmr_rate_bsf_residue_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=2)),
                ('dmr_rate_bsf_residue_reference', models.TextField(blank=True, null=True)),
                ('tnr_bsf_residue', models.FloatField(blank=True, default=40.0, null=True)),
                ('tnr_bsf_residue_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=3)),
                ('tnr_bsf_residue_reference', models.TextField(blank=True, null=True)),
                ('tpr_bsf_residue', models.FloatField(blank=True, default=65.5, null=True)),
                ('tpr_bsf_residue_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=4)),
                ('tpr_bsf_residue_reference', models.TextField(blank=True, null=True)),
                ('tpotr_bsf_residue', models.FloatField(blank=True, default=55.0, null=True)),
                ('tpotr_bsf_residue_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=5)),
                ('tpotr_bsf_residue_reference', models.TextField(blank=True, null=True)),
                ('dmr_compost', models.FloatField(blank=True, default=19.4, null=True)),
                ('dmr_compost_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=6)),
                ('dmr_compost_reference', models.TextField(blank=True, null=True)),
                ('tnr_composting_reduction', models.FloatField(blank=True, default=34.3, null=True)),
                ('tnr_composting_reduction_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=3)),
                ('tnr_composting_reduction_reference', models.TextField(blank=True, null=True)),
                ('tpr_composting_reduction', models.FloatField(blank=True, default=1.77, null=True)),
                ('tpr_composting_reduction_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=4)),
                ('tpr_composting_reduction_reference', models.TextField(blank=True, null=True)),
                ('tpotr_composting_reduction', models.FloatField(blank=True, default=12.63, null=True)),
                ('tpotr_composting_reduction_units', models.PositiveSmallIntegerField(choices=[(1, '%'), (2, '% of initial TS'), (3, '% of initial TN'), (4, '% of initial TP'), (5, '% of initial TK'), (6, '% of initial mass')], default=5)),
                ('tpotr_composting_reduction_reference', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='WasteQuality',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_solids_pc', models.FloatField(blank=True, default=3.0, null=True)),
                ('total_solids_pc_reference', models.TextField(blank=True, null=True)),
                ('total_solids', models.FloatField(blank=True, default=30000.0, null=True)),
                ('total_solids_reference', models.TextField(blank=True, null=True)),
                ('volatile_solids', models.FloatField(blank=True, default=57.0, null=True)),
                ('volatile_solids_reference', models.TextField(blank=True, null=True)),
                ('total_nitrogen', models.FloatField(blank=True, default=3310.0, null=True)),
                ('total_nitrogen_reference', models.TextField(blank=True, null=True)),
                ('total_nitrogen_mg_n_kg_ts', models.FloatField(blank=True, null=True)),
                ('total_nitrogen_mg_n_kg_ts_reference', models.TextField(blank=True, null=True)),
                ('total_phosphorus', models.FloatField(blank=True, default=390.0, null=True)),
                ('total_phosphorus_reference', models.TextField(blank=True, null=True)),
                ('total_phosphorus_mg_p_kg_ts', models.FloatField(blank=True, null=True)),
                ('total_phosphorus_mg_p_kg_ts_reference', models.TextField(blank=True, null=True)),
                ('total_potassium', models.FloatField(blank=True, default=120.0, null=True)),
                ('total_potassium_reference', models.TextField(blank=True, null=True)),
                ('total_potassium_mg_k_kg_ts', models.FloatField(blank=True, null=True)),
                ('total_potassium_mg_k_kg_ts_reference', models.TextField(blank=True, null=True)),
                ('calorific_value', models.FloatField(blank=True, default=16.2, null=True)),
                ('calorific_value_reference', models.TextField(blank=True, null=True)),
                ('biomethane_potential', models.FloatField(blank=True, default=304.0, null=True)),
                ('biomethane_potential_reference', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='WasteStreams',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('faecal_sludge', models.FloatField(blank=True, null=True)),
                ('faecal_sludge_units', models.PositiveSmallIntegerField(choices=[(1, 'cubic meters/day'), (2, 'tonnes/day')], default=1)),
                ('fs_anaeribic_digestion', models.FloatField(blank=True, null=True)),
                ('fs_solid_fuel', models.FloatField(blank=True, null=True)),
                ('fs_black_soldier_fly_process', models.FloatField(blank=True, null=True)),
                ('fs_compost', models.FloatField(blank=True, null=True)),
                ('sewage_sludge', models.FloatField(blank=True, null=True)),
                ('sewage_sludge_units', models.PositiveSmallIntegerField(choices=[(1, 'cubic meters/day'), (2, 'tonnes/day')], default=2)),
                ('ss_anaeribic_digestion', models.FloatField(blank=True, null=True)),
                ('ss_solid_fuel', models.FloatField(blank=True, null=True)),
                ('ss_black_soldier_fly_process', models.FloatField(blank=True, null=True)),
                ('ss_compost', models.FloatField(blank=True, null=True)),
                ('solid_waste', models.FloatField(blank=True, null=True)),
                ('solid_waste_units', models.PositiveSmallIntegerField(choices=[(1, 'cubic meters/day'), (2, 'tonnes/day')], default=2)),
                ('sw_anaeribic_digestion', models.FloatField(blank=True, null=True)),
                ('sw_solid_fuel', models.FloatField(blank=True, null=True)),
                ('sw_black_soldier_fly_process', models.FloatField(blank=True, null=True)),
                ('sw_compost', models.FloatField(blank=True, null=True)),
            ],
        ),
    ]
