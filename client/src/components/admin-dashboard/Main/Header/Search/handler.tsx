import * as React from 'react';
import * as apis from './api';
import { useAppSelector } from '../../../../../redux/hooks';

const useAdminDashboardMainHeaderProfile = (): [AdminDashboardMainHeaderProfileState, AdminDashboardMainHeaderProfileHandlers] => {
    const isMounted = React.useRef<boolean>();
    const token = useAppSelector((state) => state.auth.token);
    const [state, setState] = React.useState<AdminDashboardMainHeaderProfileState>({
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

interface AdminDashboardMainHeaderProfileState {
    profileName: string;
    profileImgUrl: string;
}

interface AdminDashboardMainHeaderProfileHandlers {}

export default useAdminDashboardMainHeaderProfile;