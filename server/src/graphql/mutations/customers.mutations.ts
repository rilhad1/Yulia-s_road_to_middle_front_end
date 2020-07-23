import { GraphQLNonNull, GraphQLString, GraphQLID } from "graphql";

import CustomerType from '../types/customer.type';
import Customer from '../../models/customers.model';

export const addCustomer = {
    type: CustomerType,
    args: {
        name: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent: any, args: any) {
        console.log('args', args)
        const customer =  new Customer({
            name: args.name,
        });
        console.log('customer', customer)
        return customer.save();
    }
};

export const deleteCustomer = {
    type: CustomerType,
    args: {
        id: {type: GraphQLID}
    },
    resolve(parent: any, args: any) {
        return Customer.findByIdAndRemove(args.id);
    }
};
