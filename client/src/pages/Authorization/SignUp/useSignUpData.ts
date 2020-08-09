import React, {SetStateAction, useContext, useState} from "react";
import {ISignUpData} from "./ISignUp";
import AuthContext from "../../../context/AuthContext";
import {IHttp, useHttp} from "../../../hooks/http.hook";

const useSignUpData = (): [
    ISignUpData,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    () => Promise<void>,
    IHttp
] => {
    const auth = useContext(AuthContext);
    const useHttpRequest = useHttp();

    const [registrationData, setRegistrationData] = useState<ISignUpData>({
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: ''
    });

    const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
            event.persist();
            const {name, value} = event.target;
            const newAuthData: SetStateAction<ISignUpData> = Object.assign({}, registrationData, {[name]: value});
            setRegistrationData(newAuthData);
    };

    const registerHandler = async (): Promise<void> => {
        useHttpRequest.clearError();
        try {
            const data = await useHttpRequest.request('/api/auth/register', 'POST', {...registrationData});
            auth.login(data.token, data.userId);
        } catch (e) {
            console.error("Some error: ", e);
        }
    };

    return [registrationData, handleDataChange, registerHandler, useHttpRequest];
};

export default useSignUpData;