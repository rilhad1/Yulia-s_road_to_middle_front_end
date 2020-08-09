import React, {ChangeEventHandler, SetStateAction, useContext, useState} from "react";
import {ISignInData} from "./ISignIn";
import AuthContext from "../../../context/AuthContext";
import {IHttp, useHttp} from "../../../hooks/http.hook";

const useSignInData = (): [
    ISignInData,
    (name: string, type?: string) => React.ChangeEventHandler,
    () => Promise<void>,
    IHttp
] => {
    const auth = useContext(AuthContext);
    const useHttpRequest = useHttp();

    const [authData, setAuthData] = useState<ISignInData>({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleDataChange = (name: string, type: string = 'text'): ChangeEventHandler => {
        return (event: React.ChangeEvent<HTMLInputElement>): void => {
            event.persist();
            const value: boolean | string = event.target[type === 'checkbox' ? 'checked' : 'value'];
            const newAuthData: SetStateAction<ISignInData> = Object.assign({}, authData, {[name]: value});
            setAuthData(newAuthData);
        }
    };

    const loginHandler = async (): Promise<void> => {
        useHttpRequest.clearError();
        try {
            const data = await useHttpRequest.request('/api/auth/login', 'POST', {...authData});
            auth.login(data.token, data.userId);
            console.log('auth', auth)
        } catch (e) {
            console.error("Some error: ", e);
        }
    };

    return [authData, handleDataChange, loginHandler, useHttpRequest];
};

export default useSignInData;