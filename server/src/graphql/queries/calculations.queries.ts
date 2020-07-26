import {GraphQLID, GraphQLList} from 'graphql';

import CalculationType from "../types/calculation.type";
import Calculation from '../../models/calculation.model';
import CustomerType from "../types/customer.type";

export default {
    calculation: {
        type: CalculationType,
        args: {id: {type: GraphQLID}},
        resolve(parent: any, args: any) {
            return Calculation.findById(args.id);
        },
    },
    calculations: {
        type: new GraphQLList(CalculationType),
        resolve() {
            return Calculation.find({});
        },
    }
};