import PropTypes from "prop-types";
import { FaHeart, FaRegHeart } from "react-icons/fa";


function Producto({id, name, price, onOffer, estaEnFavoritos, toggleFavorito}) {
    return (
        <div className={`product ${onOffer ? "product-offer" : ""}`}>
            <button className={`fav-btn ${estaEnFavoritos ? "active" : ""}`} onClick={() => toggleFavorito(id)}>
                {estaEnFavoritos ? <FaHeart /> : <FaRegHeart />}
            </button>
            {onOffer && <span className="offer-badge">OFERTA!</span>}
            <h2 className="product-title">{name}</h2>
            <p className="price">Precio: {price}</p>
            <label >
                En Oferta: 
                <input type="checkbox" defaultChecked={onOffer}/>
            </label>
        </div>
    );
}

Producto.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onOffer: PropTypes.bool,
    estaEnFavoritos: PropTypes.bool,
    toggleFavorito: PropTypes.func.isRequired
};

export default Producto;