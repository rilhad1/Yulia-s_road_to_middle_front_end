import CalculationType from "../types/calculation.type";
import {GraphQLID, GraphQLNonNull, GraphQLString, GraphQLFieldConfig} from "graphql";
import Calculation from "../../models/calculation.model";
import { DocumentQuery, Document } from "mongoose";

export const addCalculation: GraphQLFieldConfig<any, any> = {
    type: CalculationType,
    args: {
        name: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent: any, args: any): Promise<any> {
        const calculation =  new Calculation({
            name: args.name,
        });
        return calculation.save();
    }
};

export const deleteCalculation: GraphQLFieldConfig<any, any> = {
    type: CalculationType,
    args: {
        id: {type: GraphQLID}
    },
    resolve(parent: any, args: any): DocumentQuery<Document | null, Document>  {
        return Calculation.findByIdAndRemove(args.id);
    }
};
