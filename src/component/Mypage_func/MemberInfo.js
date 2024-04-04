import React, { useState } from "react";
import '../Mypage.css';

export default function MemberInfo() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        useremail: "",
        userpw: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <ul>
                <li>
                    <input 
                        className="block" 
                        type="username" 
                        name="username"
                        value={userInfo.username} 
                        onChange={handleChange}
                        required
                    />
                </li>
                <li><button type="submit">닉네임 수정</button></li>
            </ul>
            <ul>
                <li>
                    <input 
                        className="block" 
                        type="useremail" 
                        name="useremail"
                        value={userInfo.useremail} 
                        onChange={handleChange}
                        required
                    />
                </li>
                <li><button type="submit">이메일 수정</button></li>
            </ul>
            <ul>
                <li>
                    <input 
                        className="block" 
                        type="userpw" 
                        name="userpw"
                        placeholder="비밀번호를 입력해 주세요"
                        required
                    />
                </li>
                <li><button type="submit">비밀번호 수정</button></li>
            </ul>
        </div>
    );
}
