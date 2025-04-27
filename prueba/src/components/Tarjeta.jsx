import "./tarjeta.css";

function Tarjeta({ titulo, descripcion, botonTexto, onClick }) {
  return (
    <div className="tarjeta">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <button onClick={onClick}>{botonTexto}</button>
    </div>
  );
}

export default Tarjeta;
