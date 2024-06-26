import axios, { AxiosError } from "axios";
import { UserApiErrorResponse, UserApiSuccessResponse } from '../../../types/userTypes';
import { API } from '../../../services/api';

export const getUserDetails = (token: string) => {
    return new Promise<UserApiSuccessResponse>(async (res, rej) => {
        try {
            const response = await API.get(`/api/v1/user/get`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            res(response as UserApiSuccessResponse);
        } catch (e) {
            if ((e as AxiosError).response) {
                rej((e as AxiosError).response as UserApiErrorResponse)
            } else {
                rej({data: {message: "Something went wrong, please try again"}});
            }
        }
    })
}