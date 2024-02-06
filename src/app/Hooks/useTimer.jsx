import React from "react";
import { useState } from "react";

const useTimer = (data) => {
  const [dia, setDia] = useState();
  const [hora, setHora] = useState();
  const [minuto, setMinuto] = useState();
  const [segundos, setSegundos] = useState();

  const timer = () => {
    const dataFinal = new Date(data).getTime();
    const dataHoje = new Date().getTime();

    const periodoContador = dataFinal - dataHoje;

    const segundos = 1000;
    const minuto = segundos * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const numeroDia = Math.floor(periodoContador / dia);
    const numeroHora = Math.floor((periodoContador % dia) / hora);
    const numeroMinuto = Math.floor((periodoContador % hora) / minuto);
    const numeroSegundos = Math.floor((periodoContador % minuto) / segundos);

    setDia(numeroDia);
    setHora(numeroHora);
    setMinuto(numeroMinuto);
    setSegundos(numeroSegundos);
  };
  setInterval(timer,1000);

  return [dia, hora, minuto, segundos]
};

export default useTimer;
