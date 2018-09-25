from django.db import models


WASTE_STREAMS_UNITS = (
    (1, 'cubic meters/day'),
    (2, 'tonnes/day'),
    )

PRICE_UNITS = (
    (1, 'US dollars/normal cubic meter'),
    (2, 'US dollars/ton'),
    )


# Create your models here.
class WasteStreams(models.Model):
    faecal_sludge = models.FloatField(blank=True, null=True)
    faecal_sludge_units = models.PositiveSmallIntegerField(
        choices=WASTE_STREAMS_UNITS,
        default=WASTE_STREAMS_UNITS[0][0]
    )
    sewage_sludge = models.FloatField(blank=True, null=True)
    sewage_sludge_units = models.PositiveSmallIntegerField(
        choices=WASTE_STREAMS_UNITS,
        default=WASTE_STREAMS_UNITS[1][0]
    )
    solid_waste = models.FloatField(blank=True, null=True)
    solid_waste_units = models.PositiveSmallIntegerField(
        choices=WASTE_STREAMS_UNITS,
        default=WASTE_STREAMS_UNITS[1][0]
    )


class Prices(models.Model):
    biogas = models.FloatField(blank=True, null=True)
    biogas_units = models.PositiveSmallIntegerField(
        choices=PRICE_UNITS,
        default=PRICE_UNITS[0][0]
    )
    solid_combustion = models.FloatField(blank=True, null=True)
    solid_combustion_units = models.PositiveSmallIntegerField(
        choices=PRICE_UNITS,
        default=PRICE_UNITS[1][0]
    )
    prepupae = models.FloatField(blank=True, null=True)
    prepupae_units = models.PositiveSmallIntegerField(
        choices=PRICE_UNITS,
        default=PRICE_UNITS[1][0]
    )
    soil_conditioner = models.FloatField(blank=True, null=True)
    soil_conditioner_units = models.PositiveSmallIntegerField(
        choices=PRICE_UNITS,
        default=PRICE_UNITS[1][0]
    )
