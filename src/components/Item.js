import { useState } from "react";

export default function Item({ nombre, descripcion, stock, comprar }) {
  const [cantidad, setCantidad] = useState(stock);

  const añadirCarrito = () => {
    comprar();
    setCantidad((prevCantidad) => prevCantidad - 1);
  };

  return (
    <div className="producto">
      <section>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <h5>En Stock: {cantidad > 0 ? cantidad : <span>agotado</span>}</h5>
        {cantidad > 0 ? (
          <button onClick={añadirCarrito}>Comprar</button>
        ) : (
          <button disabled>Sin Stock</button>
        )}
      </section>
    </div>
  );
}
