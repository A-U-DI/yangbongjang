import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";
import CommonTable from '../component/CommonTable';
import CommonTableColumn from '../component/CommonTableColumn';
import CommonTableRow from '../component/CommonTableRow';
import {Link} from "react-router-dom";

const Board = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const onClickSidebar = () => {
      sidebarStatus ? setSidebarStatus(false) : setSidebarStatus(true);
  }
  return(
    <div>
    <div className="header">
    <div className="header-left">
    <button><img className="list" src={hamburger} onClick={onClickSidebar}/></button>
    <button className="logo">양봉장</button>
    </div>
    <div className="header-right">
      <Link to="/signIn" className="signUser">로그인</Link>
      <Link to="/signUp" className="signUser">회원가입</Link>
    </div>
    </div>
    <br/><hr size="2"></hr>
    <div className="body">
      <div className="Sidebar">
        {sidebarStatus ? <Sidebar/> : <p/>}
      </div>
      <div className="boardTable">
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        <CommonTableRow>
          <CommonTableColumn>1</CommonTableColumn>
          <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>6</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>2</CommonTableColumn>
          <CommonTableColumn>두번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>5</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>3</CommonTableColumn>
          <CommonTableColumn>세번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>1</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </div>
    </div>
    <div className="footer">
      <p>문의는 포도가 먹고시푼뎅~</p>
    </div>      
    </div>
    )}

export default Board;