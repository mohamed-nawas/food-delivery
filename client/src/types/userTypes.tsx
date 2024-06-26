// this doc contains type definitions for user related data

export interface UserApiErrorResponse {
    status: number;
    data: UserErrorResponse;
}

export interface UserErrorResponse {
    status: string;
    message: string;
    displayMessage: string;
    errorCode: number;
}

export interface UserApiSuccessResponse {
    status: number;
    data: UserSuccessResponse;
}

export interface UserSuccessResponse {
    status: string;
    message: string;
    data: UserSuccessResponseData;
    displayMessage: string;
    statusCode: number;
}

export interface UserSuccessResponseData {
    name: string;
    email: string;
}