import './button.css';

export default function Button(props){
    return(
        <div>
            <button className="btn w-100 button" onClick={(e) => props.funcao(e.target.name)} name={props.nome}><img className="me-2" width={25} src={props.imagem} />{props.nome}</button>
        </div>
    )
}