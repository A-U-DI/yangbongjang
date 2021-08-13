import React from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";

const Board = () => {
    return(
        <div>
            <div className="header">
                <div className="header-left">
                <button><img className="list" src={hamburger}/></button>
                <button className="logo">양봉장</button>
                </div>
                <div className="header-right">
                <button><img className="search" src={magglass}/></button>
                <button className="signIn">로그인</button>
                <button className="signUp">회원가입</button>
                </div>
            </div>
            <br/><hr size="2"></hr>

            <div className="footer">
                <p>문의는 포도가 먹고시푼뎅~</p>
            </div>
        </div>
    )
}



export default Board;