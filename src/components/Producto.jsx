function Producto({name, price, onOffer}) {
    return (
        <div className={`product ${onOffer ? "product-offer" : ""}`}>
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

export default Producto;