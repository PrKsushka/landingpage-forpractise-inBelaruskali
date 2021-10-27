import './SeventhWindow.css';
const SeventhWindow=()=>{
    return(
        <div className="seventhWindow" id="contacts">
            <h3 className="sevenDescr">Контакты</h3>
            <div className="saltCristals" style={{background:`url("./images/cristal_salt.png")`,backgroundRepeat:'no-repeat'}}></div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19305.831859213875!2d27.522543668746934!3d52.782178972497555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78e23994a418d296!2z0JHQtdC70LDRgNGD0YHRjNC60LDQu9C40Lk!5e0!3m2!1sru!2sby!4v1626018487946!5m2!1sru!2sby"
                style={{border:'0', borderRadius: '8px', width:'527px', height:'474px' }}
                allowFullScreen=""
                loading="lazy"></iframe>
            <div className="contactCard">
                <h3>Свяжись с нами</h3>
                <p>
                    факс: +375 (174) 26 37 65
                    (канцелярия)
                    тел.: +375 (174) 29 86 08
                    (справочная номеров телефонов)
                    <br></br> <b>e-mail: belaruskali.office@kali.by</b><br></br>
                        Вы можете обратиться к нам по телефону или по электронной почте. Будем рады помочь вам.
                </p>
            </div>
        </div>
    )
}
export default SeventhWindow;