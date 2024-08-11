import React, { useState } from "react";
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
    const answers = [
        `<p>이 사이트는 기발한 기획은 있지만 개발할 수 있는 인재가 필요한 의뢰자와 개발을 하고 싶지만 기획이 없어 어떤 개발을 해야하는 지 헤매는 개발자를 연결해주는 사이트입니다.</p>
         <p>청개고리란, 청년 개발자 연결고리라는 뜻으로, 더 좋은 미래를 향해 나아가기 시작하는 청년들을 대상으로 만들고자 이러한 이름을 붙였습니다. 
         요즘 많이 화재가 되고 있는 개발은 인터넷에 수많은 공모전과 아이디어 해커톤을 통해 경험을 쌓을 수 있지만, 막상 우리가 원하는  개발 경험은 잘 못하고 있는 추세입니다. 
         또한, sns나 웹/앱 플랫폼이 중요한 지금 이 시대에 여러 아이디어가 있지만, 막상 직접 만들려니 원하는 퀄리티도 안나오고 외주를 맡기기엔 큰 돈이 들 것 같아 고민이 되는 경우도 많이 있습니다.</p>
         <p>청개고리는 이러한 문제점을 인식하고 이 둘을 서로 만나게 하면 얼마나 큰 시너지를 낼까 생각이 가장 먼저 들었습니다.</p> 
         <p>항상 많은 사랑과 격려로 응원해주시는 여러분들을 위해 더 좋은 서비스를 제공하도록 노력하겠습니다.</p>`,
        `<p>자유게시판에서 열심히 모읍니다.</p>`,
        `<p>포토폴리오를 올립니다.</p>`
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <span className="introduce_container">
                <img className="introduce_image" src={intro_FAQ} alt="intro_FAQ" />
            </span>
            <br></br>
            <div className="header_faq">
                <div className="menu_faq">
                    <p className="faq">자주 묻는 질문</p>
                </div>
            </div>
            <table className="faq-table">
                <tbody>
                    {faqs.map((faq, index) => (
                        <React.Fragment key={index}>
                            <tr 
                                className="table-row" 
                                onClick={() => toggleAnswer(index)}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className={`faq-question ${openIndex === index ? 'active' : ''}`}>{faq}</td>
                            </tr>
                            {openIndex === index && (
                                <tr className="table-row answer-row">
                                    <td className={`faq-answer-container ${openIndex === index ? 'open' : ''}`}>
                                        <div className="faq-answer" dangerouslySetInnerHTML={{ __html: answers[index] }}></div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <div className="extra-q">
                <p>청개고리에 대해 궁금한게 있으시면 메일(hufs@hufs.ac.kr)에 보내주세요!</p>
            </div>
        </div>
    );
}