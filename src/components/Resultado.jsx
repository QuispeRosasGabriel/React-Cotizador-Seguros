import React from "react";
import { Mensaje } from "../styledcomponents/Mensaje";
import { TextoCotizacion } from "../styledcomponents/TextoCotizacion";
import { ResultadoCotizacion } from "../styledcomponents/ResultadoCotizacion";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup component="p" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextoCotizacion>El total es: S/ {cotizacion} </TextoCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );
};
export default Resultado;
