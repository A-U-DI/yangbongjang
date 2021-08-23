import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import hamburger from '../css/hamburger.png';
import magglass from '../css/magglass.png';
import '../index.css';

const Main = () => {
    const [sidebarStatus, setSidebarStatus] = useState('');
    const onClickSidebar = () => {
        sidebarStatus ? setSidebarStatus(false) : setSidebarStatus(true);
    }
    const [searchbarStatus, setSearchbarStatus] = useState('');
    const onClickSearchbar = () => {
        searchbarStatus ? setSearchbarStatus(false) : setSearchbarStatus(true);
    }

    return(
        <div>
        <div className="header">
            <div className="header-left">
            <button><img className="list" src={hamburger} onClick={onClickSidebar}/></button>
            <button className="logo">양봉장</button>
            </div>
            <div className="header-right">
            <button><img className="search" src={magglass} onClick={onClickSearchbar}/></button>
            <button className="signIn">로그인</button>
            <button className="signUp">회원가입</button>
            </div>
        </div>
        <br/><hr size="2"></hr>
        <div className="body">
            <div className="Sidebar">      
                {sidebarStatus ? <Sidebar/> : <p/>}
            </div>
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
    )
}

export default Main;