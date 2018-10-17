import graphene

from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField
from graphene import relay
from revamp_tool.models import Prices, WasteQuality, RevampProject, TreatmentProcesses


class PricesType(DjangoObjectType):
    class Meta:
        model = Prices


class WasteQualityType(DjangoObjectType):
    class Meta:
        model = WasteQuality


class RevampProjectType(DjangoObjectType):
    class Meta:
        model = RevampProject


class TreatmentProcessesType(DjangoObjectType):
    class Meta:
        model = TreatmentProcesses


class Query(object):
    all_prices = graphene.List(PricesType)
    all_wastequality = graphene.List(WasteQualityType)
    all_projects = graphene.List(RevampProjectType)
    project = graphene.Field(RevampProjectType,
                             id=graphene.Int())

    def resolve_all_prices(self, info, **kwargs):
        return Prices.objects.all()

    def resolve_all_wastequality(self, info, **kwargs):
        return WasteQuality.objects.all()

    def resolve_all_projects(self, info, **kwargs):
        return RevampProject.objects.all()

    def resolve_project(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return RevampProject.objects.get(pk=id)
