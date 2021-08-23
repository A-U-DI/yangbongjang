import React from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";

const SignUp = () => {
return(
    <div className="header">
        <div className="header">
            <div className="header-left">
            <button><img className="list" src={hamburger}/></button>
            <button className="logo">양봉장</button>
            </div>
            <div className="header-right">
            <button><img className="search" src={magglass}/></button>
            </div>
        </div>
        <div>
            <div className="title">
                <h1>회원가입</h1>
            </div>
            <div className="form-group">
                <label for="userEmail">이메일 주소
                    <input type="text" className="form-control" id="userEmail" placeholder="이메일 주소" name="userEmail"/>
                    </label>
                    <label for="nickname">닉네임/별명
                    <input type="text" className="form-control" id="nickname" placeholder="닉네임/별명" name="nickname"/>
                    </label>
                    <label for="password">비밀번호
                    <input type="password" className="form-control" id="password" placeholder="비밀번호" name="password"/>
                    </label>
                <button type="submit" class="btn btn-warning">제출</button>
                </div>
        </div>
        </div>
)
}

export default SignUp;