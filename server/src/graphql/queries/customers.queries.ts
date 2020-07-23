import {GraphQLID, GraphQLList} from 'graphql';

import CustomerType from "../types/customer.type";
import Customer from '../../models/customers.model';

export const customer = {
    type: CustomerType,
    args: {id: {type: GraphQLID}},
    resolve(parent: any, args: any) {
        return Customer.findById(args.id);
    },
};

export const customers = {
    type: new GraphQLList(CustomerType),
    resolve() {
        return Customer.find({});
    },
};