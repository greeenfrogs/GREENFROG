import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Request.css';
import '../index.css';
import intro_req from './figfile/intro_req.svg';
import searchbar_svg from './buttonfile/searchbar.svg';
import searchtype_svg from './buttonfile/searchtype.svg';
import write_button_svg from './buttonfile/write_button.svg';
import frog_empty_svg from './buttonfile/frog_empty.svg';
import frog_click_svg from './buttonfile/frog_click.svg';
import correct_button_svg from './buttonfile/correct_button.svg';
import Pagination from './Pagination';

export default function Request() {
    const navigate = useNavigate();
    const [frogClicked, setFrogClicked] = useState(Array.from({ length: 11 }, () => false));
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMenu, setSelectedMenu] = useState('전체'); // '전체'를 초기값으로 선택
    const totalPages = 10;

    const handleMenuClick = (option) => {
        if (option === 'write') {
            navigate('/request/writemode'); // 페이지 이동
        } else {
            setSelectedMenu(option); // 클릭된 옵션을 상태로 설정
        }
    };

    const handleFrogClick = (row) => {
        const updatedFrogClicked = [...frogClicked];
        updatedFrogClicked[row] = !updatedFrogClicked[row];
        setFrogClicked(updatedFrogClicked);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <img className='introduce_image' src={intro_req} alt='introduce_req' />
            <div className="header_req">
                <div className="menu-left">
                    <img 
                        className="Searchbar" 
                        src={searchbar_svg} 
                        alt="searchbar" 
                    />
                    <div className="dropdown">
                        <img 
                            className="Searchtype" 
                            src={searchtype_svg} 
                            alt="searchtype"
                        />
                        <div className="dropdown-content">
                            <a 
                                className={`heading3 ${selectedMenu === '전체' ? 'selected' : ''}`} // 선택된 메뉴인 경우에만 'selected' 클래스 추가
                                href="/all" 
                                onClick={() => handleMenuClick('전체')} // 클릭 이벤트 핸들러 추가
                            >
                                전체
                            </a>
                            <a 
                                className={`heading3 ${selectedMenu === '의뢰처' ? 'selected' : ''}`} 
                                href="/favorites" 
                                onClick={() => handleMenuClick('의뢰처')}
                            >
                                의뢰처
                            </a>
                            <a 
                                className={`heading3 ${selectedMenu === '의뢰 제목' ? 'selected' : ''}`} 
                                href="/inProgress" 
                                onClick={() => handleMenuClick('의뢰 제목')}
                            >
                                의뢰 제목
                            </a>
                        </div>
                    </div>
                </div>
                <img 
                    className="WriteButton" 
                    src={write_button_svg} 
                    alt="write_button"
                    onClick={() => handleMenuClick('write')}
                />
            </div>
            <div>
                <table className="request-table">
                    <tbody>
                        {Array.from(Array(11).keys()).map(row => (
                            <tr key={row} className="table-row">
                                {Array.from(Array(7).keys()).map(col => (
                                    <td key={col} className={(col === 0 && row !== 0 && row !== 10) ? 'heading3' : ''}>
                                        {(col === 0 && row === 0) ? '' :
                                            (col === 6 && row === 0) ? '' :
                                            (col === 0) ?
                                                <img src={frogClicked[row] ? frog_click_svg : frog_empty_svg}
                                                    alt={`frog_${row}-${col}`}
                                                    className="frog-icon"
                                                    onClick={() => handleFrogClick(row)} /> :
                                                (col === 6) ? <img src={correct_button_svg} alt={`correct_button_${row}-${col}`} className="correct-icon" /> :
                                                (col === 1 && row === 0) ? <span className="heading3">가격</span> :
                                                    (col === 2 && row === 0) ? <span className="heading3">유형</span> :
                                                        (col === 3 && row === 0) ? <span className="heading3">의뢰처</span> :
                                                            (col === 4 && row === 0) ? <span className="heading3">의뢰 제목</span> :
                                                                (col === 5 && row === 0) ? <span className="heading3">진행 상태</span> :
                                                                    `${row}-${col}`}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageClick={handlePageClick}
            />
        </div>
    );
}