import './button.css';

export default function Button(props){
    return(
        <button className="btn w-100 button" onClick={props.funcao}><img className="me-2" width={30} src={props.imagem}/>{props.nome}</button>
    )
}