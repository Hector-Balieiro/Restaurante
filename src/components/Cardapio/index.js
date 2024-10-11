import './cardapio.css';
import Botao from '../Botao/botao';
import Card from '../Card';
import entrada from '../../imagens/entrada.png'
import massa from '../../imagens/massa.png'
import carne from '../../imagens/carne.png'
import bebidas from '../../imagens/bebidas.png'
import saladas from '../../imagens/salada.png'
import sobremesa from '../../imagens/sobremesa.png'
import produtos from '../../dados/data-produtos'
import Lupa from '../../imagens/lupa.png';
import {useState} from 'react'

export default function Cardapio() {
    const [lista,setLista] = useState(produtos)
    const [categoria, setCategoria] = useState("Entradas")
    const [inputValue, setInputValue] = useState('')

    let counter = 0

    function filtrar(ctg){
        const listaFiltrada = produtos.filter((produto) => { return produto.categoria === ctg })
        setLista(listaFiltrada)
        setCategoria(ctg)
    }

    const verificar = inputValue.length <= 3 ? lista : lista.filter(item => item.nome.toLowerCase().includes(inputValue.toLowerCase()))

    return (
        <div className="container-lg mt-3 ">
            <div className="row justify-content-between">
                <div className="col-lg-2 col-md-3 col-6 mb-md-0 mb-3">
                    <Botao funcao={filtrar} nome="Entradas" imagem={entrada}/>
                </div>
                <div className="col-lg-2 col-md-3 col-6 mb-md-0 mb-3">
                    <Botao funcao={filtrar} nome="Massas" imagem={massa}/>
                </div>
                <div className="col-lg-2 col-md-3 col-6 ">
                    <Botao funcao={filtrar} nome="Carnes" imagem={carne}/>
                </div>
                <div className="col-lg-2 col-md-3 col-6 ">
                    <Botao funcao={filtrar} nome="Bebidas" imagem={bebidas}/>
                </div>
                <div className="col-lg-2 col-6 mt-lg-0 mt-3">
                    <Botao funcao={filtrar} nome="Saladas" imagem={saladas}/>
                </div>
                <div className="col-lg-2 col-6 mt-lg-0 mt-3">
                    <Botao funcao={filtrar} nome="Sobremesa" imagem= {sobremesa}/>
                </div>
            </div>

            <div className="input-group flex-nowrap mt-5">
                <span className="input-group-text" id="addon-wrapping"><img src={Lupa} height={20} width={30}/></span>
                <input className="rounded w-100" placeholder={`Pesquise aqui um dos pratos do nosso cardápio`} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>

            <div className='mt-4 text-center'>
                <h1>Cardápio</h1>
               
            </div>
            <div className='row row-cols-3 p-2 cor-fundo estilo mx-1 mx-lg-0 '>
            
            {verificar.map((produto,index) => {
                if(produto.categoria === categoria){
                    
                    console.log(index)
                    counter++

                    if (counter < 4){
                        return(
                            <div key={index} className={ verificar.length  === 1 ? 'col-12' : ' col-12 col-md-6 col-lg-4 my-3'}>
                        <Card
                            imagem={produto.imagem}
                            nome={produto.nome}
                            categoria={produto.categoria}
                            descricao={produto.descricao}
                            preco={`R$ ${produto.preco.toFixed(2)}`} />

                    </div>
                        )
                    }

                   else if(counter === 4){
                        return(
                            <div key={index} className={ verificar.length  === 1 ? 'col-12' : 'col-md-6 col-12 my-3'}>
                        <Card
                            imagem={produto.imagem}
                            nome={produto.nome}
                            categoria={produto.categoria}
                            descricao={produto.descricao}
                            preco={`R$ ${produto.preco.toFixed(2)}`} />

                    </div>
                    
                        )
                        
                    }

                  else if(counter === 5){
                        return(
                            <div key={index} className={ verificar.length  === 1 ? 'col-12' : 'col-lg-6 col-12 my-3'}>
                        <Card
                            imagem={produto.imagem}
                            nome={produto.nome}
                            categoria={produto.categoria}
                            descricao={produto.descricao}
                            preco={`R$ ${produto.preco.toFixed(2)}`} />

                    </div>
                        )
                    }
                    
                }
               
            })}
           </div>
        </div>
    )
}