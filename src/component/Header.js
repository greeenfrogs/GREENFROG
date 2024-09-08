import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import './Header.css';
import logo from './figfile/logo1.svg';

//Problem!!!! 여기 전체가 화면 비율 바뀔 때 같이 글자 포지션 고정이 안됨
//맨 위에 ul il, nav로 로그인/회원가입 만들기
export default function Header() {
  return (
    <div className='navbar'>
        <Link to="/" className='logo' >
          <span className='logo_container'>
            <img className='logo_image' src={logo} alt='greenfrog' />
          </span>

          <h1>
            <span className='greenfrogTitle'>청개고리</span><br></br>
            <div className='greenfrogLetter'><span className='greenfrogExplain'>청</span>년 <span className='greenfrogExplain'>개</span>발자들의 연결 <span className='greenfrogExplain'>고리</span></div>
          </h1>
        </Link>

        <nav className='navbar-menu'>
          <ul>
            <li><Link to="/request" className='li'>의뢰 게시판</Link></li>
            <li><Link to="/free" className='li'>자유 게시판</Link></li>
            <li><Link to="/activity" className='li'>활동 내역</Link></li>
            <li><Link to="/mypage" className='li'>MY PAGE</Link></li>
            <li><Link to="/faq" className='li'>FAQ</Link></li>
          </ul>
        </nav>
    </div>
  );
}