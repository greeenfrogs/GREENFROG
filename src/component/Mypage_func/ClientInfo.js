import React, { useState } from "react";
import '../Mypage.css';

export default function ClientInfo (){
    const [clientInfo, setClientInfo] = useState({
        clientname: "",
        clientinfo: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClientInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <ul>
                <li>의뢰처 이름</li><br></br>
                <li>
                    <input 
                        className="block" 
                        type="clientname" 
                        name="clientname"
                        value={clientInfo.clientname} 
                        onChange={handleChange}
                        required
                    />
                </li>
            </ul>
            <ul>
                <li>의뢰처 정보</li><br></br>
                <li>
                    <textarea 
                        className="block-long" 
                        type="text" 
                        name="clientinfo"
                        value={clientInfo.clientinfo} 
                        onChange={handleChange}
                        required
                    />
                </li>
            </ul>
        </div>
    );
}

