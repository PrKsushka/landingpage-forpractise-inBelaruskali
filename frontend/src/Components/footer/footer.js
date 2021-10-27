import './footer.css';
import Menu from "../menu/menu";
const Footer=()=>{
    return(
        <footer>
            <div className="social" style={{background:`url("./images/social.png")`}}></div>
            <div className="menu">
               <Menu/>
            </div>
            <div className="who"><b>by Ksenia Protasenya</b></div>
        </footer>
    )
}
export default Footer;