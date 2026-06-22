function Card(){
    return (
    <div>
        <img  src={props.image} style={{borderRadius:"50%"}}  alt="" />
        <h3>Name: {props.name} </h3>
        <h2>Id: {props.id}</h2>
        <p>Hobby: {props.hobby[0]}</p>
        <button>{props.text}</button>
    </div>
    );
}

export default Card;