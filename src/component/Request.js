import React, { useState } from 'react';
import './Request.css';
import '../index.css';
import intro_req from './figfile/intro_req.svg';
import searchbar_svg from './buttonfile/searchbar.svg';
import searchtype_svg from './buttonfile/searchtype.svg';
import frog_empty_svg from './buttonfile/frog_empty.svg';
import correct_button_svg from './buttonfile/correct_button.svg';
import Searchbar from './Request_func/Searchbar';
import Searchtype from './Request_func/Searchtype';

export default function Mypage() {
    const [menu, setMenu] = useState('');

    const handleMenuClick = (selectedMenu) => {
        setMenu(selectedMenu);
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
                            <a href="#">전체</a>
                            <a href="#">즐겨찾기</a>
                            <a href="#">진행중</a>
                            <a href="#">프론트</a>
                            <a href="#">백</a>
                            <a href="#">UI/UX</a>
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
                        {Array.from(Array(10).keys()).map(row => (
                            <tr key={row} style={{ borderBottom: '1px solid var(--theme---primary---light)' }}>
                                {Array.from(Array(7).keys()).map(col => (
                                    <td key={col} style={{ border: 'none', padding: '10px' }}>
                                        {(col === 0 && row === 0) ? '' : (col === 0 && row === 7) ? '' : (col === 0) ? <img src={frog_empty_svg} alt={`frog_${row + 1}-${col + 1}`} /> : (col === 6) ? <img src={correct_button_svg} alt={`correct_button_${row + 1}-${col + 1}`} /> : (col === 1 && row === 0) ? '가격' : (col === 2 && row === 0) ? '인원' : (col === 3 && row === 0) ? '의뢰처' : (col === 4 && row === 0) ? '의뢰제목' : (col === 5 && row === 0) ? '진행 중' : `${row + 1}-${col + 1}`}
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
