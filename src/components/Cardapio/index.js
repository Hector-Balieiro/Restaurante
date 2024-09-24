import './cardapio.css';
import Button from '../Buttons';
import Card from '../Card';
import entrada from '../../imagens/entrada.png'
import massa from '../../imagens/massa.png'
import carne from '../../imagens/carne.png'
import bebidas from '../../imagens/bebidas.png'
import saladas from '../../imagens/salada.png'
import sobremesa from '../../imagens/sobremesa.png'
import produtos from '../../dados/data-produtos'
import {useState} from 'react'

export default function Cardapio() {
    const [lista,setLista] = useState(produtos)
    const [categoria, setCategoria] = useState("Entradas")
    const [inputValue, setInputValue] = useState('')

    let counter = 0

    function filtrar(ctg){
        console.log(ctg)
        const listaFiltrada = produtos.filter((produto) => { return produto.categoria === ctg })
        console.log(listaFiltrada)
        setLista(listaFiltrada)
        setCategoria(ctg)
    }

    const verificar = inputValue.length <= 3 ? lista : lista.filter(item => item.nome.toLowerCase().includes(inputValue.toLowerCase()))

    return (
        <div className="container mt-3">
            <div className="row justify-content-between">
                <div className="col-2">
                    <Button funcao={filtrar} nome="Entradas" imagem={entrada} />
                </div>
                <div className="col-2">
                    <Button funcao={filtrar} nome="Massas" imagem={massa} />
                </div>
                <div className="col-2">
                    <Button funcao={filtrar} nome="Carnes" imagem={carne} />
                </div>
                <div className="col-2">
                    <Button funcao={filtrar} nome="Bebidas" imagem={bebidas} />
                </div>
                <div className="col-2">
                    <Button funcao={filtrar} nome="Saladas" imagem={saladas} />
                </div>
                <div className="col-2">
                    <Button funcao={filtrar} nome="Sobremesas" imagem={sobremesa} />
                </div>
            </div>
            <div className="row col-12 m-auto mt-5">
                <input className="rounded" placeholder='Pesquise aqui um dos pratos do nosso cardápio' type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
            </div>
            <div className='mt-4 text-center'>
                <h1>Cardápio</h1>
            </div>
            <div className='row row-cols-3 p-2 cor-fundo'>
            
            {verificar.map((produto,index) => {
                if(produto.categoria === categoria){
                    
                    console.log(index)
                    counter++
                    return(
                        
                    <div key={index} className={ verificar.length  === 1 ? 'col-12' : counter < 4 ? 'col my-3' : 'col-6 my-3'}>
                        <Card
                            imagem={produto.imagem}
                            nome={produto.nome}
                            categoria={produto.categoria}
                            descricao={produto.descricao}
                            preco={`R$ ${produto.preco.toFixed(2)}`} />

                    </div>
                    
 
                )
                }
               
            })}
           </div>
        </div>
    )
}