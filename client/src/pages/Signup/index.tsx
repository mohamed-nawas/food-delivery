import React from "react";
import useSignup from "./handler";
import SignupUI from "./ui";

const Signup = () => {
    const [state, handlers] = useSignup();

    return (
        <SignupUI {...state} {...handlers} />
    )
}

export default Signup;