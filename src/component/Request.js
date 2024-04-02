import React from 'react';
import './Request.css';
import '../index.css';
import intro_req from './figfile/intro_req.svg';
//import search_button from './buttonfile/search_button.svg';

export default function Request(){
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className='introduce_container'>
            <img className='introduce_image' src={intro_req} alt='introduce_req' />
            </span>
            {/* <br></br>
            <ul>
                <li className='searchbutton_container'>
                    <img className='searchimg' src={search_button} alt='search_button' />
                </li>
            </ul> */}
        </div>
    );
}