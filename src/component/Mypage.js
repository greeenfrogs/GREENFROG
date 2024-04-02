import React from "react";
import './Free.css';
import '../index.css';
import intro_mypage from './figfile/intro_my.svg';

export default function Mypage() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="introduce_container">
                <img className="introduce_image" src={intro_mypage} alt="intro_mypage" />
                
            </span>
        </div>
    )
}