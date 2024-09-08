import React from "react";
import './App.css'
import intro_req from './component/figfile/intro_req.svg';
import intro_free from './component/figfile/intro_free.svg';
import intro_act from './component/figfile/intro_act.svg';
import intro_my from './component/figfile/intro_my.svg';
import intro_faq from './component/figfile/intro_faq.svg';
export default function Home(){
    return(
        <div className="first">
            <img className="intro" src={intro_req} alt="intro" />
            <img className="intro" src={intro_free} alt="intro" />
            <img className="intro" src={intro_act} alt="intro" />
            <img className="intro" src={intro_my} alt="intro" />
            <img className="intro" src={intro_faq} alt="intro" />
        </div>
    )
}