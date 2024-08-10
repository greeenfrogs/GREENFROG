import React from 'react';
import './Request_writemode.css';
import intro_req from './figfile/intro_req.svg';
import front from './buttonfile/front.svg';
import back from './buttonfile/back.svg';
import uiux from './buttonfile/uiux.svg';
import WriteButton from './buttonfile/write_button.svg';

export default function RequestWritemode() {
  const handleSubmit = () => {
    console.log('Submit button clicked');
    // 의뢰 제출 로직을 여기에 추가하세요.
  };

  return (
    <div className='introduce_container'>
      <img className='introduce_image' src={intro_req} alt='introduce_req' />
      <div className="title-container">
        <h1 className="heading2">의뢰 제목</h1>
        <div className="name-box">
          <input type='text' />
        </div>
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
        <option className="price-button" placeholder='1000'>원</option>
        <span className="price-text">제시</span>
      </div>
        <textarea className='write-container' placeholder='예시글자임: 수박게임 만들고 싶다 어쩌구저쩌구' />
      <div className="client-container">
        <h2 className="heading2">의뢰처</h2>
        <div className="email-box"></div>
      </div>
      <div className="submit-container">
        <img
          className='WriteButton'
          src={WriteButton}
          alt='WriteButton'
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
