import './FifthWindow.css';
import React from "react";
const FifthWindow=({src})=>{
    return(
        <div className="fifthWindow" id="proizvodstvo">

            <div className="right"  style={{background:`url( "./images/pict_circle_2.png")`,backgroundRepeat:'no-repeat'}}></div>
            <div className="left">
                <h3>Где мы добываем каменную соль</h3>
                <p>
                    РУ-1 – единственное рудоуправление
                    ОАО «Беларуськалий», которое производит добычу соли – технической и пищевой, так как именно на
                    шахтном поле первого рудника залегает продуктивный соляной пласт.
                    За 2018 год было добыто 1 599 954 тонны каменной соли. Из них 92 416 тонн составляет пищевая соль.
                </p>
            </div>
            <div style={{
                background: `url(${src})`,
                width: '468px',
                height: '469px',
                position: 'absolute',
                backgroundSize: 'cover',
                left: '-106px',
                bottom: '-245px',
                zIndex: '5',
                filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
                transform: `rotate(
                90.45deg
                )`
            }} className="crystalsSalt" />
        </div>

    )
}
export default FifthWindow;