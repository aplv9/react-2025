import Tarjeta from "./Tarjeta";

function Productos({ productos, addToCart }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      {productos.map((producto) => (
        <Tarjeta
          key={producto.id}
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          botonTexto={`Comprar ${producto.precio.toFixed(2)}`}
          onClick={() => addToCart(producto)} 
        />
      ))}
    </div>
  );
}

export default Productos;