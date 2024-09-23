import './cardapio.css';
import Button from '../Buttons'

export default function Cardapio() {
    return (
        <div className="container mt-3">
            <div className="row justify-content-between">
                <div className="col-2">
                <Button nome="Entradas" imagem="entrada.png" />
                </div>
                <div className="col-2">
                <Button nome="Massas" imagem="massa.png" />
                </div>
                <div className="col-2">
                <Button nome="Carnes" imagem="carne.png" />
                </div>
                <div className="col-2">
                <Button nome="Bebidas" imagem="bebidas.png" />
                </div>
                <div className="col-2">
                <Button nome="Saladas" imagem="salada.png" />
                </div>
                <div className="col-2">
                <Button nome="Sobremesa" imagem="sobremesa.png" />
                </div>
            </div>
            <div className="row col-12 m-auto mt-5">
                <label>Buscar</label>
                <input className="rounded" type="text"/>
            </div>
        </div>
    )
}