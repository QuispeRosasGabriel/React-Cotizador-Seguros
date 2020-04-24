import React, { useState } from "react";
import Header from "./components/Header";
import { Contenedor } from "./styledcomponents/Contenedor";
import { ContenedorFormulario } from "./styledcomponents/ContenedorFormulario";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const { datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} />
        <Resumen datos={datos} />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
