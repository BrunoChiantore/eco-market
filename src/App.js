import './App.css';
import ListaProductos from './components/ListaProductos';

function App() {

  const productos = [
    { name: "Camisa de Algodón", price: 2999, onOffer: true },
    { name: "Pantalón", price: 4999, onOffer: false },
    { name: "Zapatillas Deportivas", price: 6999, onOffer: true }
  ];

  return (
    <div className="App">
      <h1 className='title'>Lista de Productos</h1>
      <ListaProductos productos={productos}/>
    </div>
  );
}

export default App;