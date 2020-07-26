import {GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLList} from "graphql";

export default new GraphQLObjectType({
    name: 'Calculation',
    fields: {
        id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString)},
        customerId: {type: GraphQLID},
        materialIds: {type: new GraphQLList(GraphQLID)}
    },
});
