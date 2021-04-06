import axios, {AxiosInstance} from 'axios';
import {BaseResponse} from "@/store/BaseModel";
import {JWT} from "@/libs/JWT";

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

const BASE_URL = 'http://localhost:8080';

function responseInterceptors(customAxios: AxiosInstance) {
    customAxios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            const baseRes: BaseResponse = new BaseResponse();

            if (error.response.status === 401) {
                baseRes.setAuthError();
            } else {
                baseRes.setBasicError();
            }

            return Promise.reject(baseRes);
        }
    );

    return customAxios;
}

export function axiosDefault() {
    return responseInterceptors(axios.create({
        baseURL: BASE_URL,
        headers: DEFAULT_HEADERS
    }))
}

export function axiosAuth() {
    const token: String | null = JWT.getToken();

    return responseInterceptors(axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
            'Access-Control-Allow-Origin': '*'
        }
    }));
}

export function axiosFormData() {
    const token: String | null = JWT.getToken();

    return responseInterceptors(axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': token,
            'Access-Control-Allow-Origin': '*',
        }
    }));
}
