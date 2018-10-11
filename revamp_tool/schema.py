import graphene

from graphene_django.types import DjangoObjectType
from revamp_tool.models import Prices, WasteQuality


class PricesType(DjangoObjectType):
    class Meta:
        model = Prices


class WasteQualityType(DjangoObjectType):
    class Meta:
        model = WasteQuality


class Query(object):
    all_prices = graphene.List(PricesType)
    all_wastequality = graphene.List(WasteQualityType)

    def resolve_all_prices(self, info, **kwargs):
        return Prices.objects.all()

    def resolve_all_wastequality(self, info, **kwargs):
        return WasteQuality.objects.all()
