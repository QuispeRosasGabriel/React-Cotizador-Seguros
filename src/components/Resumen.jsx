import React from "react";
import { ContenedorResumen } from "../styledcomponents/ContenedorResumen";
import { primeraMayuscula } from "../helpers/helper";

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <ContenedorResumen>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año del auto: {primeraMayuscula(year)}</li>
      </ul>
    </ContenedorResumen>
  );
};
export default Resumen;
