import React from "react";
import './FAQ.css';
import '../index.css';
import intro_FAQ from './figfile/intro_faq.svg';
import searchbar_svg from './buttonfile/searchbar.svg';

export default function FAQ() {
    const faqs = [
        "이 사이트는 어떤 사이트인가요?",
        "개발자 팀은 어떻게 모으는 건가요?",
        "의뢰 게시판 글에는 어떤 파일을 올려야 하나요?",
    ];

    return (
        <div>
            <span className="introduce_container">
                <img className="introduce_image" src={intro_FAQ} alt="intro_FAQ" />
            </span>
            <br></br>
            <div className="header_faq">
                <div className="menu_faq">
                    <p className="faq">자주 묻는 질문</p>
                    <img 
                        className="Searchbar" 
                        src={searchbar_svg} 
                        alt="searchbar" 
                    />
                </div>
            </div>
            <table className="faq-table">
                <tbody>
                    {faqs.map((faq, index) => (
                        <tr key={index} className="table-row">
                            <td className="faq-text">{faq}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <p className="extra-q">청개고리에 대해 궁금한게 있으시면 메일(hufs@hufs.ac.kr)에 보내주세요!</p>
            </div>
        </div>
    )
}