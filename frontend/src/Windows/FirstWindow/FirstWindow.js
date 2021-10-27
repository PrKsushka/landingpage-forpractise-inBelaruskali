import React from "react";
import './FirstWindow.css';
import Menu from "../../Components/menu/menu";
const FirstWindow=()=>{
    return(
        <div className="firstWindow">
            <div className="menu">
                <div className="elements">
                    <a href="#" className="logo"><img src="./images/belkalij_logo.png" alt="logo"/></a>
                    <div className="description">
                        <p className="belkali">беларуськалий</p>
                        <p style={{fontSize:'14px'}}>открытое акционерное общество</p>
                    </div>
                    <Menu/>
                </div>

            </div>
            <div className="firstContent">
                <div className="salt" style={{background:`url("./images/pachkaSoli.png")`,backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div>
                <div className="saltDescription">
                    <h2>вот в чем соль</h2>
                    <p>Поваренная пищевая соль с любовью от ведущего предприятия страны</p>
                </div>
            </div>
        </div>
    )
}
export default FirstWindow;