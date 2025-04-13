import Tarjeta from "./Tarjeta";

function Productos({productos}) {
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          {productos.map((producto, index) => (
            <Tarjeta 
            key={index}
            titulo={producto.titulo} 
            descripcion={producto.descripcion} 
            botonTexto={`Comprar ${producto.precio.toFixed(2)}`} />
          ))}
        </div>
      );
}
export default Productos;