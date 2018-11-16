# Generated by Django 2.1.2 on 2018-11-12 11:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('revamp_tool', '0011_auto_20181109_0903'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='revampproject',
            name='waste_streams',
        ),
        migrations.AddField(
            model_name='revampproject',
            name='fs_waste_streams',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.PROTECT, related_name='fs_ws', to='revamp_tool.WasteStreams'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='revampproject',
            name='ss_waste_streams',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.PROTECT, related_name='ss_ws', to='revamp_tool.WasteStreams'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='revampproject',
            name='sw_waste_streams',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.PROTECT, related_name='sw_ws', to='revamp_tool.WasteStreams'),
            preserve_default=False,
        ),
    ]