import { useState } from "react";
import { nameValidator } from "../function/nameValidator";
import { lastNameValidator } from "../function/lastNameValidator";
import { genderValidator } from "../function/genderValidator";
import { emailValidator } from "../function/emailValidator";
import { passwordValidator } from "../function/passwordValidator";
import { confirmPasswordValidator } from "../function/confirmPasswordValid";

export const InputHook = (type) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false); // ?
  const [nameClassname, setNameClassname] = useState("");
  let isValid = false;
  let inputIsvalid = isValid && isTouched;

  const changeHandler = (event) => {
    const eValue = event.target.value;
    setIsTouched(true);
    setInputValue(event.target.value);

    if (type === "name") isValid = nameValidator(eValue);
    if (type === "lastname") isValid = lastNameValidator(eValue);
    if (type === "gender") isValid = genderValidator(eValue);
    if (type === "email") isValid = emailValidator(eValue);
    if (type === "password") isValid = passwordValidator(eValue);
    if (type === "confirmpassword") isValid = confirmPasswordValidator(eValue);

    inputIsvalid = isValid && isTouched;
    setNameClassname(inputIsvalid ? "input" : "error");
  };

  const lostFocus = (event) => {
    const eValue = event.target.value;
    setIsTouched(true);
    setInputValue(event.target.value);

    if (type === "name") isValid = nameValidator(eValue);
    if (type === "lastname") isValid = lastNameValidator(eValue);
    if (type === "gender") isValid = genderValidator(eValue);
    if (type === "email") isValid = emailValidator(eValue);
    if (type === "password") isValid = passwordValidator(eValue);
    if (type === "confirmpassword") isValid = confirmPasswordValidator(eValue);

    inputIsvalid = isValid && isTouched;
    setNameClassname(inputIsvalid ? "input" : "error");
  };

  return {
    inputValue: inputValue,
    changeHandlerFun: changeHandler,
    nameClassname: nameClassname,
    focusHandler: lostFocus,
  };
};
