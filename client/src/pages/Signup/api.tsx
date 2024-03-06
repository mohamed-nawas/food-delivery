import axios, { AxiosError } from "axios";
import { AuthApiErrorResponse, AuthApiSuccessResponse } from '../../types/authTypes';
import { API } from "../../services/api";

export const signup = (name: string, email: string, pwd: string) => {
    return new Promise<AuthApiSuccessResponse>(async (res, rej) => {
        try {
            const response = await API.post(`/api/v1/auth/signup?name=${name}&email=${email}&pwd=${pwd}`);
            res(response as AuthApiSuccessResponse);
        } catch (e) {
            if ((e as AxiosError).response) {
                rej((e as AxiosError).response as AuthApiErrorResponse)
            } else {
                rej({data: {message: "Something went wrong, please try again"}})
            }
        }
    })
}