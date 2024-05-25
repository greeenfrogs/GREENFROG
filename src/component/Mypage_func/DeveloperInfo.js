import React, { useState } from "react";
import '../Mypage.css';

export default function DeveloperInfo (){
    const [DeveloperInfo, setDeveloperInfo] = useState({
        developerintro: "",
        developerportfolio: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeveloperInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <ul>
                <li>개발자 한 줄 소개</li>
                <br></br>
                <li>
                    <input 
                        className="block" 
                        type="developerintro" 
                        name="developerintro"
                        value={DeveloperInfo.developerintro} 
                        onChange={handleChange}
                        required
                    />
                </li>
            </ul>
            <ul>
                <li>자기소개서(포토폴리오)</li><br></br>
                <li>
                    <input 
                        className="block-long" 
                        type="developerportfolio" 
                        name="developerportfolio"
                        value={DeveloperInfo.developerportfolio} 
                        onChange={handleChange}
                        required
                    />
                </li>
            </ul>
        </div>
    );

}