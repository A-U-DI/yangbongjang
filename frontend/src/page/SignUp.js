import React, { useState } from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import Sidebar from '../component/Sidebar';
import "../index.css";
import axios from 'axios';
import {Link} from "react-router-dom";

const SignUp = () => {
    const [sidebarStatus, setSidebarStatus] = useState(true);
    const onClickSidebar = () => {
        sidebarStatus ? setSidebarStatus(false) : setSidebarStatus(true);
    }

    const [email,setEmail] = useState('');
    const [nickname,setNickname] = useState('');
    const [password,setPassword] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onClick = () =>{
        let JoinForm = new FormData();
        JoinForm.append('email', email);
        JoinForm.append('nickname',nickname); 
        JoinForm.append('password', password); 

        axios.post("http://localhost:5000/api/signUp",JoinForm).then(response => { 
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
        <div className="Sidebar">{sidebarStatus ? <Sidebar/> : <p/>}</div>
        <div className="user-manage">

            <div className="title">회원가입</div>
            <div className="user-form">
                <input type="email" className="input" placeholder="이메일 주소" value={email} onChange={onChangeEmail}/>
                <input type="text" className="input" placeholder="닉네임/별명" value={nickname} onChange={onChangeNickname}/>
                <input type="password" className="input" placeholder="비밀번호" value={password} onChange={onChangePassword}/>
                <Link Link to="/" className="form-btn" onClick={onClick}>회원가입</Link>
                <Link to="/signIn">이미 회원이신가요? 로그인하러 가기</Link>
            </div>
        </div>
    </div>
)}

export default SignUp;