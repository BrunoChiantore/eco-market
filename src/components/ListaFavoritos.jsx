import Producto from "./Producto";

function ListaFavoritos({ productosFavoritos, toggleFavorito }) {
    return (
        <div className="favoritos-container">
            <h2>Mis Favoritos</h2>

            {productosFavoritos.length === 0 ? (
                <p className="sin-favoritos">No tenés productos favoritos aún.</p>
            ) : (
                <div className="products-container">
                    {productosFavoritos.map((p) => (
                        <Producto
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            price={p.price}
                            onOffer={p.onOffer}
                            estaEnFavoritos={true}
                            toggleFavorito={toggleFavorito}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ListaFavoritos;
