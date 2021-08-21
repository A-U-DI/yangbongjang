import React from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";
import axios from 'axios';

const SignUp = () => {
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
            <div className="title">
                <h1>로그인</h1>
            </div>
            <div className="form-group">
                <div className="input">
                    <input type="text" className="form-control" id="userEmail" placeholder="이메일 주소" name="userEmail"/>
                    
                    <input type="password" className="form-control" id="password" placeholder="비밀번호" name="password"/>
                    </div>
                    <div id="btn_group">
                        
                            <div id="btn1">아이디/비밀번호 찾기
                                </div>
                        

                            <div id="btn2">회원가입
                            </div>
                        
                    </div>
                    <div className="login">
                <button type="submit">로그인</button>
                </div>
                </div>
        </div>
        </div>
)
}

export default SignUp;