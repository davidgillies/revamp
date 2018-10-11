import graphene

import revamp_tool.schema


class Query(revamp_tool.schema.Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
