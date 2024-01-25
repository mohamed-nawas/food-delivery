import React from "react";
import * as apis from './api';

const useSignup = (): [SignupState, SignupHandlers] => {
    const isMounted = React.useRef<boolean>();
    const [state, setState] = React.useState<SignupState>({
        name: "",
        email: "",
        pwd: "",
        repeatPwd: "",
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

    const handleNameChange: SignupHandlers["handleNameChange"] = (e) => {
        setState((prevState) => ({ ...prevState, name: e.target.value }));
    }
    const handleEmailChange: SignupHandlers["handleEmailChange"] = (e) => {
        setState((prevState) => ({ ...prevState, email: e.target.value }));
    }
    const handlePwdChange: SignupHandlers["handlePwdChange"] = (e) => {
        setState((prevState) => ({ ...prevState, pwd: e.target.value }));
    }
    const handleRepeatPwdChange: SignupHandlers["handleRepeatPwdChange"] = (e) => {
        setState((prevState) => ({ ...prevState, repeatPwd: e.target.value }));
    }
    const handleSubmit: SignupHandlers["handleSubmit"] = (e) => {
        e.preventDefault();
        if (state.pwd !== state.repeatPwd) {
            setState((prevState) => ({ ...prevState, successMsg: "", errorMsg: "Passwords do not match" }));
        } else {
            apis.signup(state.name, state.email, state.pwd)
                .then((data) => {
                    setState((prevState) => ({ ...prevState, errorMsg: "", successMsg: data.data.message }));
                })
                .catch((e) => {
                    setState((prevState) => ({ ...prevState, successMsg: "", errorMsg: e.data.message }));
                })
        }
    }

    return [state, { handleNameChange, handleEmailChange, handlePwdChange, handleRepeatPwdChange, handleSubmit }]
}

interface SignupState {
    name: string;
    email: string;
    pwd: string;
    repeatPwd: string;
    errorMsg: string;
    successMsg: string;
}

interface SignupHandlers {
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePwdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRepeatPwdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default useSignup;