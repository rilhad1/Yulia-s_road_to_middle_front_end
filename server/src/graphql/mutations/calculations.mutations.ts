import CalculationType from "../types/calculation.type";
import {GraphQLID, GraphQLNonNull, GraphQLString} from "graphql";
import Calculation from "../../models/calculation.model";

export const addCalculation = {
    type: CalculationType,
    args: {
        name: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent: any, args: any) {
        const customer =  new Calculation({
            name: args.name,
        });
        return customer.save();
    }
};

export const deleteCalculation = {
    type: CalculationType,
    args: {
        id: {type: GraphQLID}
    },
    resolve(parent: any, args: any) {
        return Calculation.findByIdAndRemove(args.id);
    }
};
