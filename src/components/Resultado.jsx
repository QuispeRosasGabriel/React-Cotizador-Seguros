import React from "react";
import { Mensaje } from "../styledcomponents/Mensaje";
import { TextoCotizacion } from "../styledcomponents/TextoCotizacion";
import { ResultadoCotizacion } from "../styledcomponents/ResultadoCotizacion";

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TextoCotizacion>El total es: S/ {cotizacion} </TextoCotizacion>
    </ResultadoCotizacion>
  );
};
export default Resultado;
