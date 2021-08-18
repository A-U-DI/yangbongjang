import React from "react";
import hamburger from "../css/hamburger.png";
import magglass from "../css/magglass.png";
import "../index.css";
import CommonTable from '../component/CommonTable';
import CommonTableColumn from '../component/CommonTableColumn';
import CommonTableRow from '../component/CommonTableRow';

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
            </div>
        </div>
        <br/><hr size="2"></hr>

        <div>
            <div className="section">
                <h2>공지</h2>
            </div>
            <div className="search">
                <div className="tag">
                    <button className="tag1">이슈</button>
                    <button className="tag2">잡담</button>
                    <button className="tag3">후기</button>
                </div>
                <select name="searchSelect">
                <option value="제목+내용">제목+내용</option>
                <option value="제목">제목</option>
                <option value="내용">내용</option>
                </select>
                <input type="text" id="search" name="search" placeholder="검색"/>
                    <button className="searchIcon">검색</button>
            </div>
        </div>

        <div>
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
        <CommonTableRow>
          <CommonTableColumn>4</CommonTableColumn>
          <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>2</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>5</CommonTableColumn>
          <CommonTableColumn>다섯번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>4</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
        </div>

        <div className="footer">
            <p>문의는 포도가 먹고시푼뎅~</p>
        </div>
        </div>
    );

}



export default Board;