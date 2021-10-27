import React from "react";
import './SecondWindow.css';
const SecondWindow=({src})=>{
    return(
        <div className="secondWindow" id="predpriyatie">
        <div className="left">
            <h3>О предприятии</h3>
            <p>Открытое акционерное общество «Беларуськалий» является одним из крупнейших производителей и экспортеров
                калийных удобрений в мире. По данным Международной ассоциации удобрений, на его долю приходится пятая
                часть мирового объема производства калийных удобрений.
                Свою историю Беларуськалий ведет с 1958 года, когда было начато строительство Первого Солигорского
                калийного комбината. В 2018 году предприятие отпраздновало 60-летний юбилей.
            </p>
        </div>
        <div className="right secondPicture" style={{background:`url("./images/pict_circle.png")`,backgroundRepeat:'no-repeat'}}></div>
        <div style={{
    background: `url(${src})`,
    width: '468px',
    height: '469px',
    position: 'absolute',
    backgroundSize: 'cover',
    right: '-196px',
    bottom: '-203px',
    zIndex: '5'
}} className="crystalsSalt" />
    </div>)
}
export default SecondWindow;
