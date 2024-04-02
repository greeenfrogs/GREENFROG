import './Request.css';
import React from 'react';
import '../index.css';
import intro_req from './intro_req.svg';

export default function Request(){
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className='introduce_container'>
            <img className='introduce_image' src={intro_req} alt='introduce_req' />
            </span>
        </div>
    );
}