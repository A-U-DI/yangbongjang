import React, { useState } from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";
import axios from 'axios';
import {Link} from "react-router-dom";

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onClick = () =>{
        let LoginForm = new FormData();
        LoginForm.append('email', email); 
        LoginForm.append('password', password); 

        axios.post("http://localhost:5000/api/signIn",LoginForm).then(response => { 
            console.log(response.data);
        })};
    return(
    <div>
        <div className="header">
            <div className="header-left">
            <button><img className="list" src={hamburger}/></button> 
            <button className="logo">양봉장</button>
            </div>
            <div className="header-right">
            <button><img className="search" src={magglass}/></button>
            </div>
        </div>
        <br/><hr size="2"></hr>

        <div className="user-manage">
            <div className="title">로그인</div>
            <div className="user-form">
                <input type="email" className="input" placeholder="이메일" value={email} onChange={onChangeEmail}/>
                <input type="password" className="input" placeholder="비밀번호" value={password} onChange={onChangePassword}/>
                {/* <button>아이디/비밀번호 찾기</button> */}
                <Link to="/signUp"><button className="login-btn">회원가입</button></Link> 
                <Link to="/signIn"><button className="login-btn" onClick={onClick}>로그인</button></Link>
            </div>
        </div>
    </div>
)}

export default SignIn;