import React, { useState } from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";
import Sidebar from '../component/Sidebar';

const Main = () => {
    const [sidebarStatus, setSidebarStatus] = useState(false);
    const onClickSidebar = () => {
        sidebarStatus ? setSidebarStatus(false) : setSidebarStatus(true);
        
    }
    return(
        <div>
        <div className="header">
            <div className="header-left">
            <button onClick={onClickSidebar}><img className="list" src={hamburger}/></button>
            <button className="logo">양봉장</button>
            </div>
            <div className="header-right">
            <button><img className="search" src={magglass}/></button>
            <button className="signIn">로그인</button>
            <button className="signUp">회원가입</button>
            </div>
        </div>
        <br/><hr size="2"></hr>
        <div className="body">        
        {sidebarStatus ? <div className="Sidebar-active>"><Sidebar/></div> 
        : <div className="Sidebar-inactive>"></div>}
            <div className="main">
                <div className="notice">{sidebarStatus}</div>
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
    )
}

export default Main;