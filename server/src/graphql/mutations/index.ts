import {GraphQLObjectType} from "graphql";
import * as customers from "./customers.mutations";
import * as calculations from "./calculations.mutations";
import * as operations from "./operations";

export default new GraphQLObjectType({
    name: 'RootMutations',
    fields: {
        ...customers,
        ...calculations,
        ...operations
    }
});