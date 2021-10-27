import './SixWindow.css';
const SixWindow=()=>{
    return(
        <div className="sixWindow">
            <div className="left">
                <h3>Купи поваренную соль </h3>
                <p>Купить поваренную соль вы можете во всех магазинах Республики Беларусь, а также в наших фирменных
                    магазинах. Кроме этого, вы можете оформить заказ прямо сейчас, нажав на кнопку.</p>
                <a href="#" className="button">Купить</a>
            </div>
            <div className="hand"  style={{background:`url("./images/hand.png")`,backgroundRepeat:'no-repeat'}}></div>
        </div>
    )
}
export default SixWindow;