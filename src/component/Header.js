import React from 'react';
import '../index.css';
import './Header.css';
import logo from './logo1.svg';

//Problem!!!! 여기 전체가 화면 비율 바뀔 때 같이 글자 포지션 고정이 안됨
//맨 위에 ul il, nav로 로그인/회원가입 만들기
export default function Header() {
  return (
    <div className='HeaderDiv'style={{ display: 'flex', alignItems: 'center' }}>
        <span className='logo_container'>
        <img className='logo_image' src={logo} alt='greenfrog' />
        </span>
        <h1>
          <span className='greenfrogTitle'>청개고리</span><br></br>
          <span className='greenfrogExplain'>청</span>년 <span className='greenfrogExplain'>개</span>발자들의 연결 <span className='greenfrogExplain'>고리</span></h1>
      <button className='request-button'>의뢰 게시판</button>
      <button className='free-button'>자유 게시판</button>
      <button className='activity-button'>활동 내역</button>
      <button className='MYPAGE-button'>MY PAGE</button>
      <button className='FAG-button'>FAQ</button>
    </div>
  );
}