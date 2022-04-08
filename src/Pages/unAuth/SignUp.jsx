import React from "react";
import LoginHeader from "../../Components/BeforeLoginComponents/LoginHeader/LoginHeader";
import SignupFooter from "../../Components/BeforeLoginComponents/SignupFooter/SignupFooter";
import SignupForm from '../../Components/BeforeLoginComponents/Signup Form/SignupForm';

export const SignUp = () => {
    return (
        <>
            <LoginHeader />
            <SignupForm />
            <SignupFooter />
        </>
    );
}