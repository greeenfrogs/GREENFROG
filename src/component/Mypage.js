import React, { useState } from "react";
import './Mypage.css';
import '../index.css';
import intro_mypage from './figfile/intro_my.svg';


//+can link only if it's signin

const MemberInfo = () => (
    <div>
        <ul>
            <li><input className="block" type="text" value="전청조"></input></li>
            <li><button type="submit">닉네임 수정</button></li>
        </ul>
        <ul>
            <li><input className="block" type="text" value="greenfrog@hufs.ac.kr"></input></li>
            <li><button type="submit">이메일 수정</button></li>
        </ul>
        <ul>
            <li><input className="block" type="text" value="******"></input></li>
            <li><button type="submit">비밀번호 수정</button></li>
        </ul>
    </div>
)

const ClientInfo = () => (
    <div>
        <h2>의뢰인 정보</h2>
        
    </div>
)

const DeveloperInfo = () => (
    <div>
        <h2>개발자 정보</h2>
    </div>
)


export default function Mypage() {
    const [menu, setMenu] = useState('');

    const handleMenuClick = (selectedMenu) => {
        setMenu(selectedMenu);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <span className="introduce_container">
                    <img className="introduce_image" src={intro_mypage} alt="intro_mypage" />
                </span>
                <br></br>
                <div className="wrapper">
                    <div className="menu">
                        <button className="info-button" onClick={() => handleMenuClick('memberInfo')}>
                            회원 정보
                        </button>
                        <button className="info-button" onClick={() => handleMenuClick('clientInfo')}>
                            의뢰인 정보
                        </button>
                        <button className="info-button" onClick={() => handleMenuClick('developerInfo')}>
                            개발자 정보
                        </button>
                    </div>
                    <div className="info">
                        {menu === 'memberInfo' && <MemberInfo/>}
                        {menu === 'clientInfo' && <ClientInfo/>}
                        {menu === 'developerInfo' && <DeveloperInfo/>}
                    </div>
                </div>
            </div>
        </div>
    )
}