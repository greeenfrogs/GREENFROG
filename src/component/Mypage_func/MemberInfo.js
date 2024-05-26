import React, { useState } from "react";
import { updateNickname, updateEmail, updatePassword } from "../../mypageApi";
import '../Mypage.css';

export default function MemberInfo() {
    const [userInfo, setUserInfo] = useState({
        userId: 0,
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

    const handleUpdateNickname = async () => {
        const result = await updateNickname(userInfo.userId, userInfo.username);
        if (result) {
            alert('닉네임이 성공적으로 수정되었습니다.');
        }
    };

    const handleUpdateEmail = async () => {
        const result = await updateEmail(userInfo.userId, userInfo.useremail);
        if (result) {
            alert('이메일이 성공적으로 수정되었습니다.');
        }
    };

    const handleUpdatePassword = async () => {
        const result = await updatePassword(userInfo.userId, userInfo.userpw);
        if (result) {
            alert('비밀번호가 성공적으로 수정되었습니다.');
        }
    };


    return (
        <div>
            <ul>
                <li>
                    <input 
                        className="block-short" 
                        type="username" 
                        name="username"
                        value={userInfo.username} 
                        onChange={handleChange}
                        required
                    />
                </li>
                <li><button type="submit" onClick={handleUpdateNickname}>닉네임 수정</button></li>
            </ul>
            <ul>
                <li>
                    <input 
                        className="block-short" 
                        type="useremail" 
                        name="useremail"
                        value={userInfo.useremail} 
                        onChange={handleChange}
                        required
                    />
                </li>
                <li><button type="submit" onClick={handleUpdateEmail}>이메일 수정</button></li>
            </ul>
            <ul>
                <li>
                    <input 
                        className="block-short" 
                        type="userpw" 
                        name="userpw"
                        placeholder="비밀번호를 입력해 주세요"
                        required
                    />
                </li>
                <li><button type="submit" onClick={handleUpdatePassword}>비밀번호 수정</button></li>
            </ul>
        </div>
    );
}
