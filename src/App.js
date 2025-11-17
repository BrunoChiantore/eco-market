import { useState } from 'react';
import './App.css';
import ListaProductos from './components/ListaProductos';
import ListaFavoritos from './components/ListaFavoritos';

function App() {

  const productos = [
    { id: "prod-001", name: "Camisa de Algodón", price: 2999, onOffer: true },
    { id: "prod-002", name: "Pantalón", price: 4999, onOffer: false },
    { id: "prod-003", name: "Zapatillas Deportivas", price: 6999, onOffer: true }
  ];

  const [favoritos, setFavoritos] = useState([]);

  // ENTENDER BIEN COMO FUNCIONA **************************
  function toggleFavorito(id) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(favId => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  }

  const productosFavoritos = productos.filter(p => favoritos.includes(p.id));

  return (
    <div className="App">
      <ListaFavoritos productosFavoritos={productosFavoritos} toggleFavorito={toggleFavorito}/>
      <h1 className='title'>Lista de Productos</h1>
      <ListaProductos productos={productos} favoritos={favoritos} toggleFavorito={toggleFavorito}/>
    </div>
  );
}

export default App;