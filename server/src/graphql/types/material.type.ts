import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const MaterialType = new GraphQLObjectType({
    name: 'Material',
    fields: {
        _id: { type: GraphQLID! },
        name: { type: GraphQLString! }
    }
});

export default MaterialType;

