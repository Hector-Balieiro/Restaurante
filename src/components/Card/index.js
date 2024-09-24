import './card.css';


export default function Card(props){
    return(
        <div className='card h-100 card-border'>
            
            <img className='altura card-img-top object-fit-cover' src={props.imagem}/>
        
            <div className='card-body'>
                <h3 className='card-title'>{props.nome}</h3>
                <h5 className='card-text'>{props.categoria}</h5>
                <p className='card-text'>{props.descricao}</p>
            </div>
            <div>
                <p className='text-end pe-2'>{props.preco}</p>
            </div>
        </div>
    )
}