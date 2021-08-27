import React, { useState } from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";
import axios from 'axios';
import {Link} from "react-router-dom";

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [nickname,setNickname] = useState('');
    const [password,setPassword] = useState('');

    const onClick = () =>{
        let JoinForm = new FormData();
        JoinForm.append('email', email); 
        JoinForm.append('password', password); 

        axios.post("http://localhost:5000/api/signUp",JoinForm).then(response => { 
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
            <div className="title">회원가입</div>
            <div className="user-form">
                <input type="email" className="input" placeholder="이메일 주소"/>
                <input type="text" className="input" placeholder="닉네임/별명"/>
                <input type="password" className="input" placeholder="비밀번호"/>
                <Link to="/"><button class="login-btn" onClick={onClick}>제출</button></Link>
            </div>
        </div>
    </div>
)}

export default SignUp;