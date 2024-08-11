import React ,{ useState } from 'react';
import './Request_writemode.css';
import intro_req from '../figfile/intro_req.svg';
import WriteButton from '../buttonfile/write_button.svg';

import { useNavigate } from 'react-router-dom';

export default function RequestWritemode() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const userId = 1; // Example user ID, replace with actual user ID
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const requestData = {
        title,
        content,
        userId,
    };

    try {
        const response = await fetch('/api/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        if (response.ok) {
            console.log('Request submitted successfully');
            navigate('/request'); // Navigate to request page after successful submission
        } else {
            const errorData = await response.json();
            console.error('Error submitting request:', errorData);
        }
    } catch (error) {
        console.error('Error submitting request:', error);
    }
  };


  return (
    <div className='introduce_container'>
      <img className='introduce_image' src={intro_req} alt='introduce_req' />
      <div className="title-container">
        <h1 className="heading2">의뢰 제목</h1>
          <input 
              className='name-box' 
              type='text' 
              placeholder='의뢰할 내용을 최대한 간단하게 적어주세요'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
      </div>
        <textarea 
          className='write-container' 
          placeholder='반드시 필요한 내용 : 기획, 와이어프레임(간단한 디자인), 고객층 대상 등등'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          />
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
