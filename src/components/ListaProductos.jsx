import Producto from "./Producto";

function ListaProductos({ productos }) {
    return (
        <div className="products-container">
            {productos.map((p, index)=> (<Producto key={index} name={p.name} price={p.price} onOffer={p.onOffer}/>))}
        </div>
    );
}

export default ListaProductos;