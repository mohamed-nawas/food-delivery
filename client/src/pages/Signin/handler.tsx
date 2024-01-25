import React from "react";
import * as apis from './api';

const useSignin = (): [SigninState, SigninHandlers] => {
    const isMounted = React.useRef<boolean>();
    const [state, setState] = React.useState<SigninState>({
        email: "",
        pwd: "",
        errorMsg: "",
        successMsg: ""
    });

    React.useEffect(() => {
        isMounted.current = true;

        setTimeout(() => {
            if (isMounted.current) {
                setState((prevState) => ({ ...prevState, successMsg: "", errorMsg: "" }))
            }
        }, 2000);

        return () => { isMounted.current = false };
    }, [state.errorMsg, state.successMsg]);

    const handleEmailChange: SigninHandlers["handleEmailChange"] = (e) => {
        setState((prevState) => ({ ...prevState, email: e.target.value }));
    }
    const handlePwdChange: SigninHandlers["handlePwdChange"] = (e) => {
        setState((prevState) => ({ ...prevState, pwd: e.target.value }));
    }
    const handleSubmit: SigninHandlers["handleSubmit"] = (e) => {
        e.preventDefault();
        apis.signin(state.email, state.pwd)
            .then((data) => {
                setState((prevState) => ({ ...prevState, errorMsg: "", successMsg: data.data.message }));
            })
            .catch((e) => {
                setState((prevState) => ({ ...prevState, successMsg: "", errorMsg: e.data.message }));
            })
    }

    return [state, { handleEmailChange, handlePwdChange, handleSubmit }]
}

interface SigninState {
    email: string;
    pwd: string;
    errorMsg: string;
    successMsg: string;
}

interface SigninHandlers {
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePwdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default useSignin;