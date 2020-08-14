import { GraphQLString, GraphQLList } from "graphql";
import OperationType from '../types/operation.type';

const insert = {
    type: OperationType,
    resolve(parent: any, args: any) {
        console.log('args', args)
    }
};

export { insert }