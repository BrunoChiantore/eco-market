import Producto from "./Producto";
import PropTypes from "prop-types";

function ListaProductos({ productos, favoritos, toggleFavorito }) {
    return (
        <div className="products-container">
            {productos.map((p, index)=> (<Producto 
            key={index} 
            id={p.id} 
            name={p.name} 
            price={p.price} 
            onOffer={p.onOffer} 
            estaEnFavoritos={favoritos.includes(p.id)} 
            toggleFavorito={toggleFavorito}/>))}
        </div>
    );
}

ListaProductos.propTypes = {
    productos: PropTypes.array.isRequired
};

export default ListaProductos;