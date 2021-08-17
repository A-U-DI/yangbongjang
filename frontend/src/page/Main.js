import React from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";

const Main = () => {
    return(
        // <Router>
        <div>
        <div className="header">
            <div className="header-left">
            <button><img className="list" src={hamburger}/></button>
            
            {/* <Link to='/Main.js'>  */}
            <button className="logo">양봉장</button>
            {/* </Link> */}
            </div>
            <div className="header-right">
            <button><img className="search" src={magglass}/></button>
            {/* <Link to='/signIn2.js'>  */}
            <button className="signIn">로그인</button>
            {/* </Link> */}
            {/* <Link to='/signUp.js'> */}
            <button className="signUp">회원가입</button>
            {/* </Link> */}
            </div>
        </div>
        <br/><hr size="2"></hr>

        <div className="body">
            <div className="main">
                <div className="notice">공지</div>
                <div className="sub">
                    <div className="gallery">갤러리</div>
                    <div className="hot">실시간 인기글</div>
                </div>
            </div>
            <div className="advertise">광고</div>
        </div>

        <div className="footer">
            <p>문의는 포도가 먹고시푼뎅~</p>
        </div>
        </div>
        // </Router>
    )
}

export default Main;