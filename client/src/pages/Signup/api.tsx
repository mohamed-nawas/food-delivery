import axios, { AxiosError } from "axios";
import { AuthApiErrorResponse, AuthApiSuccessResponse } from '../../types/authTypes';

const url = (name: string, email: string, pwd: string) => `http://localhost:8080/food-delivery/api/v1/auth/signup?name=${name}&email=${email}&pwd=${pwd}`;

export const signup = (name: string, email: string, pwd: string) => {
    return new Promise<AuthApiSuccessResponse>(async (res, rej) => {
        try {
            const response = await axios.post(url(name, email, pwd), { headers: { "Content-Type": "application/json" } });
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