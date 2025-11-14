function Producto({name, price, onOffer}) {
    return (
        <div className="product-container">
            <h2 className="product-title">{name}</h2>
            <p className="price">Precio: {price}</p>
            <label>
                En Oferta: 
                <input type="checkbox" defaultChecked={onOffer}/>
            </label>
        </div>
    );
}

export default Producto;