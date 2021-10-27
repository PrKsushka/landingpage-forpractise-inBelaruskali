import './card.css';
const Card=({title,src,description})=>{
    return(

        <div className="card">
            <p className="title">{title}</p>
            <img src={src}/>
            <p className="cardDescription">
                {description}
            </p>
        </div>
    )
}
export default Card;


