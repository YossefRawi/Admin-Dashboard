

export default function Card(props){
    return(
        
        <a className={props.cardClass}   target="_blank">
                
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </a> 
    )
}