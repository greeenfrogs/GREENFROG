import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Request.css';
import '../index.css';
import intro_free from './figfile/intro_free.svg';
import searchbar_svg from './buttonfile/searchbar.svg';
import searchtype_svg from './buttonfile/searchtype.svg';
import write_button_svg from './buttonfile/write_button.svg';
import frog_empty_svg from './buttonfile/frog_empty.svg';
import frog_click_svg from './buttonfile/frog_click.svg';
import correct_button_svg from './buttonfile/correct_button.svg';
import Pagination from './Pagination';

export default function Free() {
    const navigate = useNavigate();
    const [frogClicked, setFrogClicked] = useState(Array.from({ length: 11 }, () => false));
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMenu, setSelectedMenu] = useState('전체');
    const totalPages = 10;

    const handleMenuClick = (option) => {
        if (option === 'write') {
            navigate('/free/writemode');
        } else {
            setSelectedMenu(option);
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
            <img className='introduce_image' src={intro_free} alt='introduce_free' />
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
                                className={`heading3 ${selectedMenu === '전체' ? 'selected' : ''}`}
                                href="/all"
                                onClick={() => handleMenuClick('전체')}
                            >
                                전체
                            </a>
                            <a 
                                className={`heading3 ${selectedMenu === '모임' ? 'selected' : ''}`} 
                                href="/meeting"
                                onClick={() => handleMenuClick('모임')}
                            >
                                모임
                            </a>
                            <a 
                                className={`heading3 ${selectedMenu === '자유' ? 'selected' : ''}`} 
                                href="/talking"
                                onClick={() => handleMenuClick('자유')}
                            >
                                자유
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
                <table className="table">
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
                                                (col === 1 && row === 0) ? <span className="heading3">날짜</span> :
                                                    (col === 2 && row === 0) ? <span className="heading3">닉네임</span> :
                                                        (col === 3 && row === 0) ? <span className="heading3">제목</span> :
                                                            (col === 4 && row === 0) ? <span className="heading3">유형</span> :
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
