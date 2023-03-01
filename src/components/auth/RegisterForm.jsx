import React, { useEffect, useState } from "react";
import { img } from "../../assets";
import { InputHook } from "../../hooks/inputHook";
import Input from "../input/input";
import styled from "styled-components";
import "../../index.css";

export default function RegisterForm(props) {
  const [formIsValid, setFormIsValid] = useState(false);
  const [information, setInformation] = useState(null);
  const [focused, setFocused] = useState(false);
  const {
    inputValue: nameInput,
    nameClassname: className,
    changeHandlerFun: nameChangeHandler,
    focusHandler: lostFocusName,
  } = InputHook("name");

  const {
    inputValue: lastNameInput,
    nameClassname: classLastName,
    changeHandlerFun: lastNameChangeHandler,
    focusHandler: lostFocusLastName,
  } = InputHook("lastname");

  const {
    inputValue: genderInput,
    nameClassname: classGender,
    changeHandlerFun: genderChangeHandler,
  } = InputHook("gender");

  const {
    inputValue: emailInput,
    nameClassname: classEmail,
    changeHandlerFun: emailChangeHandler,
    focusHandler: lostFocusEmail,
  } = InputHook("email");

  const {
    inputValue: passwordInput,
    nameClassname: classPassword,
    changeHandlerFun: passwordChangeHandler,
    focusHandler: lostFocusPassword,
  } = InputHook("password");

  const {
    inputValue: confirmPasswordInput,
    nameClassname: classConfirmPassword,
    changeHandlerFun: confirmPasswordChangeHandler,
    focusHandler: lostFocusConfirmPassword,
  } = InputHook("confirmpassword");

  const checkFormValidation = () => {
    if (
      className === "input" &&
      classLastName === "input" &&
      classEmail === "input" &&
      classPassword === "input" &&
      classConfirmPassword === "input"
    ) {
      if (passwordInput === confirmPasswordInput)
        if ((nameInput.length !== 0) & (lastNameInput !== 0)) {
          if (genderInput === "female" || genderInput === "male")
            setFormIsValid(true);
          return;
        }
    }
    setFormIsValid(false);
  };
  const register = async () => {
    const valueInfo = {
      first_name: nameInput,
      last_name: lastNameInput,
      gender: genderInput,
      email: emailInput,
      password: passwordInput,
      confirm_password: confirmPasswordInput,
    };
    console.log(valueInfo);
  };

  useEffect(() => {
    checkFormValidation();
  }, [
    className,
    classLastName,
    genderInput,
    classEmail,
    classPassword,
    passwordInput,
    confirmPasswordInput,
    classPassword,
    classConfirmPassword,
  ]);

  let buttonClassname = formIsValid ? "green" : "error";

  return (
    <RegisterContainer>
      <Title>Register</Title>
      <Input
        onchange={nameChangeHandler}
        srcInputImg={img.firstName}
        placeholder="First Name"
        onblur={lostFocusName}
        classname={className}
        label="First Name"
        for="fname"
        id="fname"
        alt="logo"
      />
      <Input
        onchange={lastNameChangeHandler}
        onblur={lostFocusLastName}
        srcInputImg={img.lastName}
        classname={classLastName}
        placeholder="Last Name"
        label="Last Name"
        for="lname"
        id="lname"
        alt="logo"
      />
      <Gender>Gender</Gender>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "227px",
          gap: "30px",
        }}
      >
        <Input
          onchange={genderChangeHandler}
          classForGender="gender-width"
          inputFieldClassname="gender"
          name="gender"
          type="radio"
          value="male"
          label="Male"
          for="male"
          id="male"
        />
        <Input
          onchange={genderChangeHandler}
          classForGender="gender-width"
          inputFieldClassname="gender"
          name="gender"
          type="radio"
          value="female"
          label="Female"
          for="female"
          id="female"
        />
      </div>
      <Input
        onchange={emailChangeHandler}
        onblur={lostFocusEmail}
        srcInputImg={img.email}
        classname={classEmail}
        placeholder="Email"
        label="Email"
        type="email"
        for="email"
        id="email"
        alt="logo"
      />
      <Input
        onchange={passwordChangeHandler}
        onblur={lostFocusPassword}
        classname={classPassword}
        srcInputImg={img.pass}
        placeholder="Password"
        label="Password"
        type="password"
        for="pass"
        id="pass"
        alt="logo"
      />
      <Input
        onchange={confirmPasswordChangeHandler}
        onblur={lostFocusConfirmPassword}
        classname={classConfirmPassword}
        placeholder="Confirm Password"
        label="Confirm Password"
        srcInputImg={img.pass}
        type="password"
        for="confPass"
        id="confPass"
        alt="logo"
      />

      <button
        className={buttonClassname}
        disabled={!formIsValid}
        onClick={register}
      >
        Register
      </button>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  @media screen and (min-width: 600px) {
    width: 350px;
  }
  width: 275px;
  background-color: #201f2294;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  border: 1px solid wheat;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgb(255 255 255 / 39%) 0px 8px 24px;
`;

const Title = styled.h1`
  color: wheat;
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
  letter-spacing: 5px;
  font-weight: revert;
`;
const Gender = styled.div`
  width: 227px;
  color: wheat;
  font-size: 14px;
  font-weight: 600;
  margin: 8px 0;
`;
