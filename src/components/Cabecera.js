import React from "react";

export default function Cabecera({ carrito }) {
  return (
    <header>
      <h1>Carrito de compras</h1>
      <p>
        Cantidad de productos: <span>{carrito}</span>
      </p>
      {/* maquetar Cabecera aquí */}
    </header>
  );
}
