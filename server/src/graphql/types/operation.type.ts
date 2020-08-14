import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from "graphql";

const OperationType = new GraphQLObjectType({
    name: 'Operation',
    fields: {
        _id: { type: GraphQLID! }, //I guess should be removed
        args: { type: new GraphQLList(GraphQLString)! }
    }
});

export default OperationType;