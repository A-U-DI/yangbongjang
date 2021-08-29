import React, { useState } from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";

const Post = (props) => {
    const [sidebarStatus, setSidebarStatus] = useState('');
    const onClickSidebar = () => {
        sidebarStatus ? setSidebarStatus(false) : setSidebarStatus(true);
    }
    
    const [title,setTitle] = useState('');

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
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

        <div className="body">
            <div className="main">
                <div className="post-location">
                    <h2>데이식스 /</h2> <h3>연예</h3>  
                </div>   
                <div className="post-title">
                    <select>
                    <option value="default">분류</option>
                    <option value="issue">이슈</option>
                    <option value="talk">잡담</option>
                    <option value="review">후기</option>
                    </select>
                    <input name="title" value={title} placeholder="제목" size="100" style={{margin: "1%"}}
                    onChange={onChangeTitle}/>
                </div>
                <div className="post-write">Rich Editor 들어갈 자리</div>
                <button className="post-uploadBtn">(임시)이미지 올리기</button> 
                <button className="post-uploadBtn">게시글 올리기</button>
            </div>
            
            <div className="advertise">광고</div>
        </div>
        
        <div className="footer">
            <p>문의는 포도가 먹고시푼뎅~</p>
        </div>        
        </div>
    )
}

export default Post;