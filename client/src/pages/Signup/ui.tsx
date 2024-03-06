import * as React from "react";
import GoogleAuthUI from "../Social Auth/Google Auth/ui";
import FacebookAuthUI from "../Social Auth/Facebook Auth/ui";

const SignupUI = (props: SignupUIProps) => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
                    inventore quaerat mollitia?
                </p>

                <form action="" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p className="text-center text-lg font-medium">Sign up for an account</p>

                    <GoogleAuthUI />
                    <FacebookAuthUI />
                    <div className="flex items-center">
                        <hr className="flex-grow border-t border-gray-800" />
                        <p className="mx-4 text-sm font-medium text-gray-800 dark:text-white"> Or continue with email </p>
                        <hr className="flex-grow border-t border-gray-800" />
                    </div>
                    
                    
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>

                        <div className="relative">
                            <input
                                id="name"
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter name"
                                value={props.name}
                                onChange={props.handleNameChange}
                            />

                            <span className="absolute inset-y-0 right-0 w-1/10 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zM12 12c3.309 0 6 2.691 6 6v2H6v-2c0-3.309 2.691-6 6-6z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                id="email"
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                value={props.email}
                                onChange={props.handleEmailChange}
                            />

                            <span className="absolute inset-y-0 right-0 w-1/10 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                id="password"
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                value={props.pwd}
                                onChange={props.handlePwdChange}
                            />

                            <span className="absolute inset-y-0 right-0 w-1/10 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>

                        <div className="relative">
                            <input
                                id="confirm-password"
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Confirm password"
                                value={props.repeatPwd}
                                onChange={props.handleRepeatPwdChange}
                            />

                            <span className="absolute inset-y-0 right-0 w-1/10 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {
                        props.errorMsg && props.errorMsg != "" ? (
                            <div
                                className="relative block w-full p-4 mb-4 text-base leading-5 text-white bg-red-500 rounded-lg opacity-100 font-regular">
                                {props.errorMsg}
                            </div>
                        ) : (null)
                    }
                    {
                        props.successMsg && props.successMsg != "" ? (
                            <div
                                className="relative block w-full p-4 mb-4 text-base leading-5 text-white bg-green-500 rounded-lg opacity-100 font-regular">
                                {props.successMsg}
                            </div>
                        ) : (null)
                    }

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        onClick={props.handleSubmit}
                        disabled={props.name == "" || props.email == "" || props.pwd == "" || props.repeatPwd == ""}
                    >
                        Sign up
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Have an account?
                        <a className="underline" href="/login"> Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

interface SignupUIProps {
    name: string;
    email: string;
    pwd: string;
    repeatPwd: string;
    errorMsg?: string;
    successMsg?: string;
    handleNameChange: React.ChangeEventHandler<HTMLInputElement>;
    handleEmailChange: React.ChangeEventHandler<HTMLInputElement>;
    handlePwdChange: React.ChangeEventHandler<HTMLInputElement>;
    handleRepeatPwdChange: React.ChangeEventHandler<HTMLInputElement>;
    handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

export default SignupUI;