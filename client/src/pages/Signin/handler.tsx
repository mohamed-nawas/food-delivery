import * as React from "react";
import * as apis from './api';
import { useAppDispatch } from '../../redux/hooks';
import { authActions} from '../../redux/auth/authSlice';
import { useHistory, useLocation } from 'react-router-dom';

const useSignin = (): [SigninState, SigninHandlers] => {
    const history = useHistory();
    const location = useLocation<LocationState>();
    const dispatch = useAppDispatch();
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
        }, 5000);

        return () => { isMounted.current = false };
    }, [state.errorMsg, state.successMsg]);

    React.useEffect(() => {
        isMounted.current = true;

        const error = location.state && location.state.error;
        if (error) {
            setState((prevState) => ({...prevState, errorMsg: error}));
        }

        return () => { isMounted.current = false };
    }, [location.state]);

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
                dispatch(authActions.login(data.data.data.token))
                history.replace("/")
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

interface LocationState {
    error?: string;
}

export default useSignin;