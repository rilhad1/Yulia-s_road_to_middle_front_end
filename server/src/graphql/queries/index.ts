import {GraphQLObjectType} from "graphql";

import customers from './customers.queries';
import calculations from './calculations.queries';

export default new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        ...customers,
        ...calculations
    }
});