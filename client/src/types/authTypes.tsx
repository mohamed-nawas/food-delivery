// this doc contains type definitions for auth related data

export interface AuthApiErrorResponse {
    status: number;
    data: AuthErrorResponse;
}

export interface AuthErrorResponse {
    status: string;
    message: string;
    displayMessage: string;
    errorCode: number;
}

export interface AuthApiSuccessResponse {
    status: number;
    data: AuthSuccessResponse;
}

export interface AuthSuccessResponse {
    status: string;
    message: string;
    data: AuthSuccessResponseData;
    displayMessage: string;
    statusCode: number;
}

export interface AuthSuccessResponseData {
    email: string;
    token: string;
}