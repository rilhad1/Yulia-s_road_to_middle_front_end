import {Error, MongooseDocument} from "mongoose";

type ErrorResult = {
    error: {
        errorType: string,
        errorMessage: string
    },
    success: boolean
}

type SuccessResultWithoutPayload = {
    success: boolean
}

type SuccessResult = {
    success: boolean,
    data: MongooseDocument
}

type TAbstractAction = ErrorResult | SuccessResultWithoutPayload | SuccessResult;
type TVoidAbstractAction = ErrorResult | SuccessResultWithoutPayload;

export const abstractActionResult = (payload: MongooseDocument, error: Error): TAbstractAction => {
    if (error) {
      return {
        error: { errorType: error.name, errorMessage: error.message },
        success: false
      };
    }
    if (!payload) {
      return {success: false}
    }
    return {
      success: true,
      data: payload
    };
};

export const voidAbstractActionResult = (error: Error): TVoidAbstractAction => {
    if (error) {
      return {
        error: { errorType: error.name, errorMessage: error.message },
        success: false
      };
    }
    return {
      success: true
    };
};
