import React, { useState } from 'react';
import './Request.css';
import '../index.css';
import intro_req from './figfile/intro_req.svg';
import searchbar_svg from './buttonfile/searchbar.svg';
import searchtype_svg from './buttonfile/searchtype.svg';
import frog_empty_svg from './buttonfile/frog_empty.svg';
import frog_click_svg from './buttonfile/frog_click.svg';
import correct_button_svg from './buttonfile/correct_button.svg';
import Searchbar from './Request_func/Searchbar';
import Searchtype from './Request_func/Searchtype';

export default function Mypage() {
    const [menu, setMenu] = useState('');
    const [frogClicked, setFrogClicked] = useState(Array.from({length: 11}, () => false));

    const handleMenuClick = (selectedMenu) => {
        setMenu(selectedMenu);
    };

    const handleFrogClick = (row) => {
        const updatedFrogClicked = [...frogClicked];
        updatedFrogClicked[row] = !updatedFrogClicked[row];
        setFrogClicked(updatedFrogClicked);
    };

    return (
        <div>
            <div className='introduce_container'>
                <img className='introduce_image' src={intro_req} alt='introduce_req' />
                <div className="menu">
                    {/* Searchbar 버튼 */}
                    <img className="Searchbar" src={searchbar_svg} alt="searchbar" onClick={() => handleMenuClick('memberInfo')} />
                    {/* Searchtype 버튼 */}
                    <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
                        <img className="Searchtype" src={searchtype_svg} alt="searchtype" onClick={() => handleMenuClick('searchtype')} />
                        <div className="dropdown-content" style={{ position: 'absolute', top: '100%', zIndex: 1 }}>
                            <a className="bold-text" href="#">전체</a>
                            <a className="bold-text" href="#">즐겨찾기</a>
                            <a className="bold-text" href="#">진행중</a>
                            <a className="bold-text" href="#">프론트</a>
                            <a className="bold-text" href="#">백</a>
                            <a className="bold-text" href="#">UI/UX</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="menu" style={{ display: 'flex', flexDirection: 'row' }}>
                    {/* 선택된 메뉴에 따라 해당 컴포넌트를 표시 */}
                    {menu === 'memberInfo' && <Searchbar/>}
                    {menu === 'searchtype' && <Searchtype/>}
                </div>
            </div>
            {/* 테이블을 감싸는 div에 좌우 여백을 추가 */}
            <div style={{ margin: '0 30px' }}> 
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '-120px' }}>
                    <tbody>
                        {Array.from(Array(11).keys()).map(row => (
                            <tr key={row} style={{ borderBottom: '1px solid var(--theme---primary---light)' }}>
                                {Array.from(Array(7).keys()).map(col => (
                                    <td
                                        key={col}
                                        className={(col === 0 && row !== 0 && row !== 10) ? 'bold-text' : ''}
                                        style={{ border: 'none', padding: '10px' }}
                                    >
                                        {(col === 0 && row === 0) ? '' :
                                            (col === 6 && row === 0) ? '' :
                                            (col === 0) ? 
                                                <img src={frogClicked[row] ? frog_click_svg : frog_empty_svg} 
                                                     alt={`frog_${row}-${col}`} 
                                                     onClick={() => handleFrogClick(row)} /> :
                                            (col === 6) ? <img src={correct_button_svg} alt={`correct_button_${row}-${col}`} /> :
                                            (col === 1 && row === 0) ? <span className="bold-text">가격</span> :
                                            (col === 2 && row === 0) ? <span className="bold-text">인원</span> :
                                            (col === 3 && row === 0) ? <span className="bold-text">의뢰처</span> :
                                            (col === 4 && row === 0) ? <span className="bold-text">의뢰제목</span> :
                                            (col === 5 && row === 0) ? <span className="bold-text">진행 중</span> :
                                            `${row}-${col}`}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
