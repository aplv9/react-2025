import Tarjeta from "./Tarjeta";

function Productos({productos}) {
    
    return (
        <div>
          {productos.map(producto => (
            <Tarjeta 
            titulo={producto.titulo} 
            descripcion={producto.descripcion} 
            botonTexto={`Comprar ${producto.precio.toFixed(2)}`} />
          ))}
        </div>
      );
}
export default Productos;