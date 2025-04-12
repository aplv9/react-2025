import "./tarjeta.css";
import Button from "./Button";

function Tarjeta({ titulo, descripcion, botonTexto }) {
  return (
    <div className="tarjeta">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <Button 
      texto={botonTexto} 
      color= "blue"
      mensaje= {`Haz comprado ${titulo}`}
      />
    </div>
  );
}

export default Tarjeta;
