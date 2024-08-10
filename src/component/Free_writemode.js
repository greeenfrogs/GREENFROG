import React from 'react';
import './Free_writemode.css';
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
        <h1 className="heading2">제목</h1>
          <input className='name-box' type='text' placeholder='자유로운 제목을 작성해주세요.'/>
      </div>
      <div className="type-container">
        <h2 className="heading2">게시판 유형</h2>
        <div className="icon-container">
          <img className='type-icon' src={front} alt='front_icon' />
          <img className='type-icon' src={back} alt='back_icon' />
          <img className='type-icon' src={uiux} alt='uiux_icon' />
        </div>
      </div>
        <textarea className="write-container" type='text' placeholder='이것저것 해보고 싶은 이야기를 작성해주세요.' />
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
