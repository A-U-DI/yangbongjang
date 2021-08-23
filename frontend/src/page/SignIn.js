import React from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";

const SignIn = () => {
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
        <div>
            <div className="input">
            <div className="title">
                <h1>회원가입</h1>
            </div>
                <div className="foam-group">
                <label for="userEmail">이메일 주소</label>
                    <input type="text" className="form-control" id="userEmail" placeholder="이메일 주소" name="userEmail"/>
                    
                    <label for="nickname">닉네임/별명</label>
                    <input type="text" className="form-control" id="nickname" placeholder="닉네임/별명" name="nickname"/>
                    
                    <label for="password">비밀번호</label>
                    <input type="password" className="form-control" id="password" placeholder="비밀번호" name="password"/>
                    
                    
                    <div className="login">
                <button type="submit">회원가입</button></div>
                </div>
                </div>
                </div>
        </div>
)
}

export default SignIn;