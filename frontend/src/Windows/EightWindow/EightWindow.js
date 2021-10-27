import './EightWindow.css';
import {useState} from "react";
import axios from "axios";
const EightWindow=()=>{
    const [nameSurnameDirty, setNameSurnameDirty]=useState(false);
    const [telephoneDirty, setTelephoneDirty]=useState(false);
    const [emailDirty, setEmailDirty]=useState(false);
    const [textDirty, setTextDirty]=useState(false);
    const [nameSurnameError, setNameSurnameError]=useState('Заполните поле!');
    const [telephoneError, setTelephoneError]=useState('Заполните поле!');
    const [emailError, setEmailError]=useState('Заполните поле!');
    const [textError, setTextError]=useState('Заполните поле!');
    const blurHandler=(e)=>{
        switch (e.target.name){
            case 'nameSurname':setNameSurnameDirty(true)
                break
            case 'telephone':setTelephoneDirty(true)
                break
            case 'email':setEmailDirty(true)
                break
            case 'text':setTextDirty(true)
        }
    }
    const [input, setInput]=useState({
        nameSurname:'',
        telephone:'',
        email:'',
        text:''

    });
    let email=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    let nameSurname=/^(\S+)[,\s]\s*(\S+)\s*$/;
    let tel= /^(?:\+375|80)\(\d{2}\)\d{3}\d{2}\d{2}$/;
    function handleChange(e){
        console.log(e.target.value);
        (e.target.name==="email")?((!email.test(String(e.target.value).toLowerCase()))?setEmailError('Некорректный email'):setEmailError('')):console.log('errr');
        (e.target.name==="nameSurname")?((!nameSurname.test(String(e.target.value).toLowerCase()))?setNameSurnameError('Некорректный ввод данных! Поле должно содержать Фамилию Имя'):setNameSurnameError('')):console.log('err');
        (e.target.name==="telephone")?((!tel.test(String(e.target.value).toLowerCase()))?setTelephoneError('Некорректный ввод данных! Введите в формате +375(**)***-**-** или 80(**)***-**-**'):setTelephoneError('')):console.log('err');
        (e.target.name==="text")?((e.target.value!=="")?setTextError(""):setTextError("Заполните поле!")):console.log('errr');
        const {name,value}=e.target;
        setInput(prevInput=>{
            console.log(prevInput);
            return{
                ...prevInput,
                [name]:value
            }
        })
    }
    function handleClick(e){
        e.preventDefault();
        const formData={
            nameSurname:input.nameSurname,
            telephone:input.telephone,
            email:input.email,
            text:input.text
        }
        axios.post('/api/form',formData)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
        ;

    }
    return(
        <div className="eightWindow" style={{background:`url("./images/gori.png")`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <h3>Свяжись с нами</h3>
            <div className="form">
                <form>
                    {(emailDirty && emailError) && <div style={{color:'red'
                        ,width: '73%',
                        background: '#ffffff78',
                        borderRadius: '8px'
                    }}>{emailError}</div>}
                    <div className="wrapper">
                        <input type="email"
                               value={input.email}
                               name="email"
                               placeholder="Введите email"
                               data-rule="text"
                               onChange={handleChange}
                               onBlur={e=>blurHandler(e)}
                        />
                    </div>
                    <br/>
                    {(telephoneDirty && telephoneError) && <div style={{color:'red',width: '73%',
                        background: '#ffffff78',
                        borderRadius: '8px'
                    }}>{telephoneError}</div>}
                    <div className="wrapper">
                        <input type="tel"
                               value={input.telephone}
                               name="telephone"
                               data-rule="tel"
                               placeholder="Введите номер телефона"
                               onChange={handleChange}
                               onBlur={e=>blurHandler(e)}
                        />
                    </div>
                    <br/>
                    {(nameSurnameDirty && nameSurnameError) && <div style={{color:'red',width: '73%',
                        background: '#ffffff78',
                        borderRadius: '8px'}}>
                        {nameSurnameError}</div>}
                    <div className="wrapper">
                        <input type="name"
                               name="nameSurname"
                               data-rule="name"
                               placeholder="Введите ваше имя и фамилию"
                               value={input.nameSurname}
                               onChange={handleChange}
                               onBlur={e=>blurHandler(e)}
                        />
                    </div>
                    <br/>
                    <textarea className='area' placeholder="Оставьте комментарий"
                              style={{fontFamily: 'Roboto'}}
                              name="text"
                              rows="3"
                              cols="40"
                              value={input.text}
                              onChange={handleChange}
                              onBlur={e=>blurHandler(e)}
                    >
                                </textarea>

                    <br/>
                    <button onClick={handleClick}  className="k">Отправить</button>
                </form>
            </div>
        </div>
    )
}
export default EightWindow;