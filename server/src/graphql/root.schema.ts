import {GraphQLSchema} from "graphql";

import Queries from './queries';
import Mutations from './mutations';

export default new GraphQLSchema({
    query: Queries,
    mutation: Mutations,
});