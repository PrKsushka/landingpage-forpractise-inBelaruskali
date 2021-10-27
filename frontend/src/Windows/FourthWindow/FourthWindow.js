import './FourthWindow.css';
const FourthWindow=()=>{
    return(
        <div className="fourthWindow" id="salt">
            <div className="right"  style={{background:`url("./images/cristal.png")`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}></div>
            <div className="left">
                <h3>Удивительный минерал</h3>
                <p>
                    Каменная соль по-другому назвается галит, формируется в виде кубических кристаллов, от бесцветного
                    до белого, светло- и тёмно-голубого, жёлтого и розового. Окраска связана с примесями, в том числе
                    красноватая окраска может быть вызвана присутствием некоторых мёртвых бактерий и примесей мёртвых
                    растений, а также любых неорганических веществ.
                </p>
            </div>
            <div className="saltCristals" style={{background:`url("./images/cristal_salt.png")`,backgroundRepeat:'no-repeat'}}></div>
        </div>
    )
}
export default FourthWindow;
