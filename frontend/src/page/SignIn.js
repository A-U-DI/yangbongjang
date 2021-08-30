import React, { useState } from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import Sidebar from '../component/Sidebar';
import "../index.css";
import axios from 'axios';
import {Link} from "react-router-dom";

const SignIn = () => {
    const [sidebarStatus, setSidebarStatus] = useState(false);
    const onClickSidebar = () => {
        sidebarStatus ? setSidebarStatus(false) : setSidebarStatus(true);
    }

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
            <button><img className="list" src={hamburger} onClick={onClickSidebar}/></button>
            <button className="logo">양봉장</button>
            </div>
            <div className="header-right">
            <button><img className="search" src={magglass}/></button>
            </div>
        </div>
        <br/><hr size="2"></hr>
        <div className="body">
        <div className="Sidebar">
            {sidebarStatus ? <Sidebar/> : <p/>}
        </div>
        <div className="user-manage">
            <div className="title">로그인</div>
            <div className="user-form">
                <input type="email" className="input" placeholder="이메일" value={email} onChange={onChangeEmail}/>
                <input type="password" className="input" placeholder="비밀번호" value={password} onChange={onChangePassword}/>
                <Link to="/" className="form-btn" onClick={onClick}>로그인</Link>
                <Link to="/signUp">아직 회원이 아니신가요? 회원가입하러 가기</Link>
            </div>
        </div>
        </div>
    </div>
)}

export default SignIn;