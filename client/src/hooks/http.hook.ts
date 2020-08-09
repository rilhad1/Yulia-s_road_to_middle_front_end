import {useCallback, useState} from 'react'

export interface IHttp {
    loading: boolean,
    request: (url: string, method: string, body: object, headers?: object) => {
        [props: string]: any
    },
    error: Error | null,
    clearError: () => void,
}

export const useHttp = (): IHttp => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, {method, body, headers});
            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
            }
            setLoading(false);


            return data
        } catch (e) {

            setLoading(false);
            setError(e.message);
            throw e
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return { loading, request, error, clearError }
};