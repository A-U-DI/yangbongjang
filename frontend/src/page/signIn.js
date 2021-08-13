import React from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const minorButton = styled.div`
  font-size: 10px;
  font-weight: 200;
  line-height: 20px;
  display: inline-block;
  width: 50%;
  height: 20px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;
//아디 비번 값 받기
//값없으면 disabled
function signUp() {
  return (
    <Container>
      <Input id="id" name="id" placeholder="아이디를 입력해주세요" />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      <Button>로그인</Button>
    </Container>
  );
}

export default signUp;