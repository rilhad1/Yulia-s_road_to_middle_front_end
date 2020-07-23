import { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";

export default new GraphQLObjectType({
    name: 'Calculation',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
    }),
});
