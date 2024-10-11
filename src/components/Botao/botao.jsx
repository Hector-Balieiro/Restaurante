import './botao.css';

export default function Botao(props){
    return(
        <div>
            <button className='btn w-100 button' name={props.nome} onClick={(e)=>props.funcao(e.currentTarget.name)}><img src={props.imagem} width={25} className='me-2'/>{props.nome}</button>
        </div>
    )
}