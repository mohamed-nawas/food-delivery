import * as React from "react";
import GoogleAuthUI from "../../components/Social Auth/Google Auth/ui";
import FacebookAuthUI from "../../components/Social Auth/Facebook Auth/ui";
import GithubAuthUI from "../../components/Social Auth/Github Auth/ui";

const SigninUI = (props: SigninUIProps) => {
    return (
        <div className="feed-me__signin__container">
            <div className="feed-me__signin__container__content">
                <h1 className="feed-me__signin__container__content__title">Get started today</h1>

                <p className="feed-me__signin__container__content__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
                    inventore quaerat mollitia?
                </p>

                <form action="" className="feed-me__signin__container__content__form">
                    <p className="feed-me__signin__container__content__form__title">Sign in to the account</p>

                    <GoogleAuthUI />
                    <FacebookAuthUI />
                    <GithubAuthUI />
                    <div className="feed-me__signin__container__content__form__line-break">
                        <hr/>
                        <p> Or continue with email </p>
                        <hr/>
                    </div>
                    
                    <div className="feed-me__signin__container__content__form__input">
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value={props.email}
                                onChange={props.handleEmailChange}
                            />

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="feed-me__signin__container__content__form__input">
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                value={props.pwd}
                                onChange={props.handlePwdChange}
                            />

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {
                        props.errorMsg && props.errorMsg != "" ? (
                            <div className="feed-me__signin__container__content__form__input-msg error">{props.errorMsg}</div>
                        ) : (null)
                    }
                    {
                        props.successMsg && props.successMsg != "" ? (
                            <div className="feed-me__signin__container__content__form__input-msg success">{props.successMsg}</div>
                        ) : (null)
                    }

                    <button
                        type="submit"
                        className="feed-me__signin__container__content__form__submit-btn"
                        onClick={props.handleSubmit}
                        disabled={props.email == "" || props.pwd == ""}
                    >
                        Sign In
                    </button>

                    <p className="feed-me__signin__container__content__form__redirection-link">
                        Don't have an account?
                        <a className="underline" href="/register"> Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

interface SigninUIProps {
    email: string;
    pwd: string;
    errorMsg?: string;
    successMsg: string;
    handleEmailChange: React.ChangeEventHandler<HTMLInputElement>;
    handlePwdChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

export default SigninUI;