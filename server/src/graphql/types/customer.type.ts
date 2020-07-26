import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from "graphql";
import CalculationType from './calculation.type';
import Calculation from '../../models/calculation.model';
export default new GraphQLObjectType({
    name: 'Customer',
    fields: {
        _id: { type: GraphQLID },
        lastName: { type: GraphQLString},
        firstName: { type: GraphQLString},
        email: { type: GraphQLString},
        gender: { type: GraphQLString},
        city: { type: GraphQLString},
        streetAddress: { type: GraphQLString},
        phoneNumber: { type: GraphQLString},
        calculations: {
            type: new GraphQLList(CalculationType),
            resolve(parent) {
                return Calculation.find({_id: {$in: parent.calculationIds}});
            },
        },
        calculationIds: {type: new GraphQLList(GraphQLID)}
    }
});
