import {GraphQLObjectType} from "graphql";

import * as customers from './customers.queries';
import * as calculations from './calculations.queries';

export default new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        ...customers,
        ...calculations
    }
});