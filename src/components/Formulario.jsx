import React, { useState } from "react";
import { Campo } from "../styledcomponents/Campo";
import { Label } from "../styledcomponents/Label";
import { Select } from "../styledcomponents/Select";
import { InputRadio } from "../styledcomponents/InputRadio";
import { Button } from "../styledcomponents/Button";
import { Error } from "../styledcomponents/Error";

const Formulario = () => {
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "basico",
  });
  const [error, guardarError] = useState(false);

  const { marca, year, plan } = datos;

  //leer datos del formulario y colocarlos en el state
  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario envia
  const handleSubmit = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    //obtener la diferencia de años

    //por cada año restar el 10% del valor

    //Americano 15%
    //Asiatico 5%
    //Europeo 30%

    //Plan basico 20%
    //Plan completo 50%

    //total
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <Campo>
        <Label htmlFor="">Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion} id="">
          <option value="">-- Seleccione --</option>
          <option value="americano"> Americano </option>
          <option value="europeo"> Europeo </option>
          <option value="asiatico"> Asiático </option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="">Año</Label>
        <Select name="year" value={year} onChange={obtenerInformacion} id="">
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label htmlFor="">Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />
        Completo
      </Campo>
      <Button type="submit">Cotizar</Button>
    </form>
  );
};

export default Formulario;
