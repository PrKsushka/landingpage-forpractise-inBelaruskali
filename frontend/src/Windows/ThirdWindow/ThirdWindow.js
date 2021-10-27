import './ThirdWindow.css';
import Card from "../../Components/card/card";
import React from "react";
const ThirdWindow=({src})=>{
    const arr=[
        {
            title:'Качественно',
            src:"./images/cardLogo/first.png",
            description:' Залог нашего престижа - качественный продукт, проверка которого осуществляется за счет соблюдения государственных и международных стандартов.'
        },
        {
            title: 'Экологично',
            src:"./images/cardLogo/second.png",
            description:'Рационально и эффективно используем уникальную минирально-сырьевую базу, другие виды ресурсов и обеспечиваем снижение производственных затрат.'
        },
        {
            title: 'Безопасно',
            src:"./images/cardLogo/third.png",
            description:'Добыча поваренной соли осуществляется с использованием современного оборудования.'
        }
    ]

    return(
        <div className="thirdWindow">
            <div className="saltShaker" style={{background:`url( "../images/solonka.png")`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></div>
            <h3>почему именно мы</h3>
            <div className="cardWrapper">
                {
                    arr.map((item,i) => (
                        <Card key={i} title={item.title} src={item.src} description={item.description}/>
                    ))
                }

            </div>
            <div style={{
                background: `url(${src})`,
                width: '468px',
                height: '469px',
                position: 'absolute',
                backgroundSize: 'cover',
                left: '-174px',
                bottom: '-306px',
                zIndex: '-100',
                filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
                transform: `rotate(
                90.45deg
                )`
            }} className="crystalsSalt" />
        </div>
    )
}
export default ThirdWindow;



