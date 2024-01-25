import axios from "axios";

const url = "http://localhost:8080/food-delivery/api/v1/auth/signup";

export const signup = (name: string, email: string, pwd: string) => {
    return new Promise<SuccessApiResponse>(async (res, rej) => {
        try {
            const response = await axios.post(url, { name, email, pwd }, { headers: { "Content-Type": "application/json" } });
            res(response as SuccessApiResponse);
        } catch (e) {
            if (e.response) {
                rej(e.response as ErrorApiResponse)
            } else {
                rej({data: {message: "Something went wrong, please try again"}})
            }
        }
    })
}

interface SuccessResponseData {
}

interface SuccessResponse {
  status: string;
  message: string;
  data: SuccessResponseData;
  displayMessage: string;
  statusCode: number;
}

interface SuccessApiResponse {
  data: SuccessResponse;
  status: number;
}

interface ErrorResponse {
    status: string;
    message: string;
    displayMessage: string;
    errorCode: number;
}

interface ErrorApiResponse {
    data: ErrorResponse;
    status: number;
}