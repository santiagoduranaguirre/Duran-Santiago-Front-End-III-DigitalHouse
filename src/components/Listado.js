import React from "react";
import { useState } from "react";
import Item from "./Item";
import lista from "./data.json";

export default function Listado({ comprar }) {
  return (
    <div className="container">
      {lista.map((producto) => (
        <Item
          comprar={comprar}
          key={producto.id}
          nombre={producto.producto.nombre}
          descripcion={producto.producto.descripcion}
          stock={producto.stock}
        />
      ))}
    </div>
  );
}
