const esFinDeSemana = (dia) => {
  const entreSemana = {
    lunes: true,
    martes: true,
    miercoles: true,
    jueves: true,
    viernes: true,
  };

  entreSemana[dia.toLowerCase()]
    ? alert("Entre semana")
    : alert("Fin de semana");
};

esFinDeSemana("Domingo");
