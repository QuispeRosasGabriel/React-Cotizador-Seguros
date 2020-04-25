import React, { useState } from "react";
import Header from "./components/Header";
import { Contenedor } from "./styledcomponents/Contenedor";
import { ContenedorFormulario } from "./styledcomponents/ContenedorFormulario";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [cargando, guardarCargando] = useState(false);
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando && <Spinner />}
        <Resumen datos={datos} />
        {!cargando && <Resultado cotizacion={cotizacion} />}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
