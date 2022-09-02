import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import { useState } from "react";

function App() {
  const [carrito, setCarrito] = useState(0);

  const comprar = () => {
    setCarrito(carrito + 1);
  };

  return (
    <div className="App">
      <Cabecera carrito={carrito} />
      <Listado comprar={comprar} />
    </div>
  );
}

export default App;
