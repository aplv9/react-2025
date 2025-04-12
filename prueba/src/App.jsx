import './App.css'
import Productos from './components/Productos';

const productos = [
  {titulo: 'Manzanas', descripcion:'Manzanas Verdes', precio: 2.50},
  {titulo: 'Uvas', descripcion:'Uvas Verdes', precio: 1.60},
  {titulo: 'Bananas', descripcion:'Traidas desde Nicaragua', precio: 3.00}];

function App() {


  return (
    <div>
      <Productos productos={productos}/>
    </div>
  )
}

export default App
