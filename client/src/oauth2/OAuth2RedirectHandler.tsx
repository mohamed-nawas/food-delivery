import React from "react";
import { Redirect, RouteComponentProps } from 'react-router-dom';

export default class OAuth2RedirectHandler extends React.Component<OAuth2RedirectHandlerProps> {
    constructor(props: OAuth2RedirectHandlerProps) { 
        super(props);
    }

    static readonly ACCESS_TOKEN: string = "accessToken";

    getUrlParameter(name: string): string {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render(): React.ReactNode {
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        if(token) {
            return <Redirect to={'/'} />;
        } else {
            return <Redirect to={'/login'} />;
        }
    }
}

interface OAuth2RedirectHandlerProps extends RouteComponentProps {}