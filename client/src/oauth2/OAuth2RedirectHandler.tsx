import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { authActions } from '../redux/auth/authSlice';

interface OAuth2RedirectHandlerProps extends RouteComponentProps {};

export default function OAuth2RedirectHandler(props: OAuth2RedirectHandlerProps) {
    const dipatch = useAppDispatch();

    function getUrlParameter(name: string): string {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(props.location.search);
        return results === null? '' : decodeURIComponent(results[1].replace(/\+/g,''));
    }

    if(getUrlParameter('token')) {
        dipatch(authActions.login(getUrlParameter('token')));
        return <Redirect to={'/'} />;
    } else {
        return <Redirect to={'/login'} />;
    }
}