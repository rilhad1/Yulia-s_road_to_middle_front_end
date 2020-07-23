import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";

export default new GraphQLObjectType({
    name: 'Customer',
    fields: {
        _id: { type: GraphQLID },
        name: { type: GraphQLString},
    },
});
