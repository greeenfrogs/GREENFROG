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
import Searchbar from './Request_func/Searchbar';
import Searchtype from './Request_func/Searchtype';

export default function Request() {
    const [menu, setMenu] = useState('');
    const [frogClicked, setFrogClicked] = useState(Array.from({ length: 11 }, () => false));
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const navigate = useNavigate(); // useNavigate 훅을 가져옵니다

    const handleMenuClick = (selectedMenu) => {
        setMenu(selectedMenu);
        if (selectedMenu === 'write') {
            navigate('/request/writemode'); // 페이지 이동
        }
    };

    const handleFrogClick = (row) => {
        const updatedFrogClicked = [...frogClicked];
        updatedFrogClicked[row] = !updatedFrogClicked[row];
        setFrogClicked(updatedFrogClicked);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pages = [];
        const visiblePages = 10;

        for (let page = 1; page <= totalPages; page++) {
            pages.push(
                <button key={page} onClick={() => handlePageClick(page)} className={page === currentPage ? 'active' : ''}>
                    {page}
                </button>
            );

            if (pages.length >= visiblePages) break;
        }

        return pages;
    };

    return (
        <div>
            <div className='introduce_container'>
                <img className='introduce_image' src={intro_req} alt='introduce_req' />
                <div className="menu" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                        <img className="Searchbar" src={searchbar_svg} alt="searchbar" style={{ marginTop: '12px' }} onClick={() => handleMenuClick('memberInfo')} />
                        <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
                            <img className="Searchtype" src={searchtype_svg} alt="searchtype" style={{ marginTop: '12px' }} onClick={() => handleMenuClick('searchtype')} />
                            <div className="dropdown-content" style={{ position: 'absolute', top: '100%', zIndex: 1 }}>
                                <a className="heading3" href="#">전체</a>
                                <a className="heading3" href="#">즐겨찾기</a>
                                <a className="heading3" href="#">진행중</a>
                                <a className="heading3" href="#">프론트</a>
                                <a className="heading3" href="#">백</a>
                                <a className="heading3" href="#">UI/UX</a>
                            </div>
                        </div>
                    </div>
                    <img className="WriteButton" src={write_button_svg} alt="write_button" style={{ marginBottom: '10px' }} onClick={() => handleMenuClick('write')} />
                </div>
            </div>
            <div className="wrapper">
                <div className="menu" style={{ display: 'flex', flexDirection: 'row' }}>
                    {menu === 'memberInfo' && <Searchbar />}
                    {menu === 'searchtype' && <Searchtype />}
                </div>
            </div>
            <div style={{ margin: '0 30px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '-120px' }}>
                    <tbody>
                        {Array.from(Array(11).keys()).map(row => (
                            <tr key={row} style={{ borderBottom: '1px solid var(--theme---primary---light)' }}>
                                {Array.from(Array(7).keys()).map(col => (
                                    <td
                                        key={col}
                                        className={(col === 0 && row !== 0 && row !== 10) ? 'heading3' : ''}
                                        style={{ border: 'none', padding: '10px' }}
                                    >
                                        {(col === 0 && row === 0) ? '' :
                                            (col === 6 && row === 0) ? '' :
                                            (col === 0) ?
                                                <img src={frogClicked[row] ? frog_click_svg : frog_empty_svg}
                                                    alt={`frog_${row}-${col}`}
                                                    style={{ marginTop: '10px' }}
                                                    onClick={() => handleFrogClick(row)} /> :
                                                (col === 6) ? <img src={correct_button_svg} alt={`correct_button_${row}-${col}`} style={{ marginTop: '10px' }} /> :
                                                (col === 1 && row === 0) ? <span className="heading3">가격</span> :
                                                    (col === 2 && row === 0) ? <span className="heading3">인원</span> :
                                                        (col === 3 && row === 0) ? <span className="heading3">의뢰처</span> :
                                                            (col === 4 && row === 0) ? <span className="heading3">의뢰제목</span> :
                                                                (col === 5 && row === 0) ? <span className="heading3">진행 중</span> :
                                                                    `${row}-${col}`}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pagination" style={{ margin: '50px 0' }}>
                <button onClick={handleFirstPage}>«</button>
                <button onClick={handlePrevPage}>‹</button>
                {renderPageNumbers()}
                <button onClick={handleNextPage}>›</button>
                <button onClick={handleLastPage}>»</button>
            </div>
        </div>
    );
}
