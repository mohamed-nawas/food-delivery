import * as React from 'react';
import * as apis from './api';
import { useAppSelector } from '../../../redux/hooks';

const useAdminDashboardMain = (): [AdminDashboardMainState, AdminDashboardMainHandlers] => {
    const isMounted = React.useRef<boolean>();
    const token = useAppSelector((state) => state.auth.token);
    const [state, setState] = React.useState<AdminDashboardMainState>({
        profileName: "",
        profileImgUrl: ""
    });

    React.useEffect(() => {
        isMounted.current = true;

        apis.getUserDetails(token)
        .then((res) => {
            if (isMounted.current) setState((prevState) => ({ ...prevState, profileName: res.data.data?.name }));    //todo: complete the api modification to get profileImgUrl
        })
        .catch(e => console.error(e));

        return () => { isMounted.current = false };
    }, []);

    return [state, {}];
}

export interface AdminDashboardMainState {
    profileName: string;
    profileImgUrl: string;
}

interface AdminDashboardMainHandlers {}

export default useAdminDashboardMain;