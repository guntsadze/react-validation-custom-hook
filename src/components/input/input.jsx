import React from "react";
import styled from "styled-components";

export default function Input(props) {
  return (
    <InputField className={props.inputFieldClassname}>
      <Label for={props.for}>{props.label}</Label>
      <InputContainer className={props.classForGender}>
        <input
          id={props.id}
          className={props.classname}
          onChange={props.onchange}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          name={props.name}
          onBlur={props.onblur}
          onFocus={props.focus}
        />
        <Img src={props.srcInputImg} alt={props.alt} />
      </InputContainer>
    </InputField>
  );
}

const InputField = styled.div`
  position: relative;
`;

const Label = styled.label`
  color: wheat;
  font-size: 14px;
  font-weight: 600;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Inpt = styled.input`
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 40px;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
  cursor: pointer;
`;

const Img = styled.img`
  position: absolute;
  width: 15px;
  right: 3%;
`;
