import React from "react";
import useSignin from "./handler";
import SigninUI from "./ui";

const Signin = () => {
    const [state, handlers] = useSignin();

    return (
        <SigninUI {...state} {...handlers} />
    )
}

export default Signin;