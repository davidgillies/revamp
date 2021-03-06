# Generated by Django 2.1.1 on 2018-09-27 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('revamp_tool', '0003_auto_20180927_1249'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='prices',
            options={'verbose_name_plural': 'Prices'},
        ),
        migrations.AlterModelOptions(
            name='revampproject',
            options={'verbose_name_plural': 'Revamp Projects'},
        ),
        migrations.AlterModelOptions(
            name='treatmentprocesses',
            options={'verbose_name_plural': 'Treatment Processes'},
        ),
        migrations.AlterModelOptions(
            name='wastequality',
            options={'verbose_name_plural': 'Waste Quality Options'},
        ),
        migrations.AlterModelOptions(
            name='wastestreams',
            options={'verbose_name_plural': 'Waste Streams Options'},
        ),
        migrations.AddField(
            model_name='treatmentprocesses',
            name='approved',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='wastequality',
            name='approved',
            field=models.BooleanField(default=False),
        ),
    ]
