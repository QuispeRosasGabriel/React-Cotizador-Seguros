import React from "react";
import Header from "./components/Header";
import { Contenedor } from "./styledcomponents/Contenedor";
import { ContenedorFormulario } from "./styledcomponents/ContenedorFormulario";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
