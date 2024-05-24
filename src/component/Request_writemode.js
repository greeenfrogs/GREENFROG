import React from 'react';
import './Request_writemode.css';
import intro_req from './figfile/intro_req.svg';
import front from './buttonfile/front.svg';
import back from './buttonfile/back.svg';
import uiux from './buttonfile/uiux.svg';

export default function RequestWritemode() {
  return (
    <div className='introduce_container'>
      <img className='introduce_image' src={intro_req} alt='introduce_req' />
      <div className="title-container">
        <h1 className="heading2">의뢰 제목</h1>
        <div className="name-box"></div>
      </div>
      <div className="type-container">
        <h2 className="heading2">의뢰 유형</h2>
        <div className="icon-container">
          <img className='type-icon' src={front} alt='front_icon' />
          <img className='type-icon' src={back} alt='back_icon' />
          <img className='type-icon' src={uiux} alt='uiux_icon' />
        </div>
      </div>
      <div className="price-container">
        <h2 className="heading2">가격 제시</h2>
        <button className="price-button">원</button>
        <span className="price-text">제시</span>
      </div>
      <div className="write-container">
        예시글자임: 수박게임 만들고 싶다 어쩌구저쩌구
      </div>
    </div>
  );
}
