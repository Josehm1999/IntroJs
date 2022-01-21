/*
 * El usuario puede ingresar 5 departamentos de colombia
 * - validacion con los departamentos y dependiendo de cada
 *   uno va a mostrar un prompt diferente
 * - 5 ciudades o publos de cada uno de esos departamentos,
 *   ingresamos una de esas ciudades, y nos debe salir un alert
 *   con cualquier de esa ciudad o pueblo escrito
 * */

const departamento = prompt(
  "Escoja de uno de los siguientes departamentos:\n 1.-Antioquia \n 2.-Cordoba \n 3.-Caldas \n 4.-Bolivar \n 5.-Bogota"
).toLowerCase();

let informacion = "";

if (departamento === "antioquia") {
  const ciudad = prompt(
    "Escoja una de las siguientes ciudades:\n 1.- Medellin \n 2.- Abriaqui \n 3.- Giraldo \n 4.- Urrao \n 5.- Zaragoza"
  ).toLowerCase();
  if (ciudad === "medellin") {
    informacion = `Medellín es la capital de la provincia montañosa de Antioquia en Colombia. Es apodada la "Ciudad de la eterna primavera" por su clima templado y alberga la famosa Feria de las Flores anual.`;
  } else if (ciudad === "abriaqui") {
    informacion = `Abriaquí es un municipio de Colombia ubicado en la subregión Occidente del departamento de Antioquia. Limita por el norte con los municipios de Frontino y Cañasgordas, por el este con los municipios de Giraldo y Santa Fe de Antioquia, por el sur con los municipios de Caicedo y Urrao, y por el oeste con los municipios de Urrao y Frontino.`;
  } else if (ciudad === "giraldo") {
    informacion = `Giraldo es un municipio de Colombia, localizado en la subregión Occidente del departamento de Antioquia. Limita por el norte con los municipios de Cañasgordas y Buriticá, por el sur con el municipio de Santa Fe de Antioquia y por el oeste con los municipios de Abriaquí y Cañasgordas.`;
  } else if (ciudad === "urrao") {
    informacion = `Urrao es un municipio de Colombia, localizado en la subregión suroeste del departamento de Antioquia. Limita por el norte con los municipios de Frontino y Abriaquí, por el este con los municipios de Abriaquí, Caicedo, Anzá, Betulia y Salgar, y por el sur y el oeste con Vigía del Fuerte y el departamento del Chocó.`;
  } else if (ciudad === "zaragoza") {
    informacion = `Zaragoza es un municipio de Colombia, localizado en la subregión del Bajo Cauca en el departamento de Antioquia. Limita por el norte con el municipio de Caucasia, por el este con el municipio de El Bagre, por el sur con el municipio de Segovia y por el oeste con los municipios de Anorí y Cáceres`;
  }
  alert(
    `Escogiste el departamento de ${departamento} y la ciudad de ${ciudad}.\n\nAcerca de la ciudad:\n${informacion}`
  );
} else if (departamento === "cordoba") {
  const ciudad = prompt(
    "Escoja una de las siguientes ciudades:\n 1.- Monteria \n 2.- Canalete \n 3.- Valencia \n 4.- Purisima \n 5.- Pueblo Nuevo"
  );

  if (ciudad === "monteria") {
    informacion = `Montería es una ciudad del norte de Colombia. Es conocida por su cultura ganadera y los planchones (balsas techadas) que transportan a los pasajeros a través del río Sinú.`;
  } else if (ciudad === "canalete") {
    informacion = `Canalete es un municipio colombiano ubicado en el departamento de Córdoba, al norte del país. La población fue fundada en 1952 y fue elevada a la categoría de municipio el 2 de marzo de 1979.`;
  } else if (ciudad === "valencia") {
    informacion = `Giraldo es un municipio de Colombia, localizado en la subregión Occidente del departamento de Antioquia. Limita por el norte con los municipios de Cañasgordas y Buriticá, por el sur con el municipio de Santa Fe de Antioquia y por el oeste con los municipios de Abriaquí y Cañasgordas.`;
  } else if (ciudad === "purisima") {
    informacion = `Purísima de la Concepción es un municipio colombiano ubicado en el departamento de Córdoba. Limita al norte con San Antero y el departamento de Sucre al este con este departamento y el municipio de Momil, al sur con Santa Cruz de Lorica y al oeste con Santa Cruz de Lorica y San Antero.`;
  } else if (ciudad === "pueblo nuevo") {
    informacion = `Pueblo Nuevo es un municipio de Colombia, situado en el departamento de Córdoba. Es conocido como "Remanso de Paz y Hospitalidad", "La tierra del diabolín" y "Pueblo Nuevo"`;
  }

  alert(
    `Escogiste el departamento de ${departamento} y la ciudad de ${ciudad}.\n\nAcerca de la ciudad:\n${informacion}`
  );
} else if (departamento === "caldas") {
  const ciudad = prompt(
    "Escoja una de las siguientes ciudades:\n 1.- Manizales \n 2.- Aguadas \n 3.- Manzanares \n 4.- La Merced \n 5.- Aranzaru"
  );
  if (ciudad === "manizales") {
    informacion = `Manizales es una ciudad de la región cafetera montañosa del oeste de Colombia. Es conocida por sus eventos culturales, las calles empinadas y las vistas del volcán Nevado del Ruiz cercano.`;
  } else if (ciudad === "aguadas") {
    informacion = `Abriaquí es un municipio de Colombia ubicado en la subregión Occidente del departamento de Antioquia. Limita por el norte con los municipios de Frontino y Cañasgordas, por el este con los municipios de Giraldo y Santa Fe de Antioquia, por el sur con los municipios de Caicedo y Urrao, y por el oeste con los municipios de Urrao y Frontino.`;
  } else if (ciudad === "manzanares") {
    informacion = `Giraldo es un municipio de Colombia, localizado en la subregión Occidente del departamento de Antioquia. Limita por el norte con los municipios de Cañasgordas y Buriticá, por el sur con el municipio de Santa Fe de Antioquia y por el oeste con los municipios de Abriaquí y Cañasgordas.`;
  } else if (ciudad === "la merced") {
    informacion = ` Urrao es un municipio de Colombia, localizado en la subregión suroeste del departamento de Antioquia. Limita por el norte con los municipios de Frontino y Abriaquí, por el este con los municipios de Abriaquí, Caicedo, Anzá, Betulia y Salgar, y por el sur y el oeste con Vigía del Fuerte y el departamento del Chocó.`;
  } else if (ciudad === "aranzaru") {
    informacion = ` Zaragoza es un municipio de Colombia, localizado en la subregión del Bajo Cauca en el departamento de Antioquia. Limita por el norte con el municipio de Caucasia, por el este con el municipio de El Bagre, por el sur con el municipio de Segovia y por el oeste con los municipios de Anorí y Cáceres`;
  }
  alert(
    `Escogiste el departamento de ${departamento} y la ciudad de ${ciudad}.\n\nAcerca de la ciudad:\n${informacion}`
  );
} else if (departamento === "bolivar") {
  const ciudad = prompt(
    "Escoja una de las siguientes ciudades:\n 1.- Cartagena \n 2.- Magangue \n 3.- Arjona \n 4.- Rio Viejo \n 5.- Norosi"
  );
  if (ciudad === "cartagena") {
    informacion = `Medellín es la capital de la provincia montañosa de Antioquia en Colombia. Es apodada la "Ciudad de la eterna primavera" por su clima templado y alberga la famosa Feria de las Flores anual.`;
  } else if (ciudad === "magangue") {
    informacion = `Magangué es un municipio colombiano localizado a orillas del río Magdalena, en el departamento de Bolívar.`;
  } else if (ciudad === "arjona") {
    informacion = `Arjona es un municipio del departamento de Bolívar, Colombia, ubicado cerca de la capital departamental Cartagena de Indias, lo que lo hace importante para la economía de la región.`;
  } else if (ciudad === "rio viejo") {
    informacion = ` Río Viejo es un municipio de Colombia, situado en el norte del país, en el departamento de Bolívar, a orillas del río Magdalena. Dista de la capital departamental, Cartagena de Indias, a 450 km.`;
  } else if (ciudad === "norosi") {
    informacion = `Norosí es un municipio de Colombia, situado en el norte del país, en el departamento de Bolívar. Fue un corregimiento de Ríoviejo hasta 2007, cuando consiguió la categoría de municipio.`;
  }
  alert(
    `Escogiste el departamento de ${departamento} y la ciudad de ${ciudad}.\n\nAcerca de la ciudad:\n${informacion}`
  );
} else if (departamento === "bogota") {
  const ciudad = prompt(
    "Escoja una de las siguientes ciudades:\n 1.- Usme \n 2.- Usaquen \n 3.- Suba \n 4.- Santa fe \n 5.- Kennedy"
  );
  if (ciudad === "usme") {
    informacion = `Usme es la localidad número 5 del Distrito Capital de Bogotá, Colombia. Se encuentra ubicada en el suroriente de la ciudad de Bogotá. Fue un antiguo municipio del departamento de Cundinamarca hasta 1954, cuando se incorporó a la ciudad.`;
  } else if (ciudad === "usaquen") {
    informacion = `El moderno Usaquén es un sitio popular para los amantes de la comida. Los bistrós franceses modernos y las cafeterías acogedoras en jardines se agrupan alrededor del Parque de Usaquén, el punto central del distrito, mientras que las cervecerías artesanales y las coctelerías modernas suelen prestar servicios hasta tarde.`;
  } else if (ciudad === "suba") {
    informacion = `La extensa localidad de Suba tiene suburbios residenciales y áreas rurales con granjas de flores, canchas de golf y clubes de campo. Las reservas de los humedales de Tibabuyes, Córdoba y La Conejera albergan aves exóticas y flora, y tienen además senderos junto al lago.`;
  } else if (ciudad === "santa fe") {
    informacion = `Santa Fe es la localidad número tres del Distrito Capital de Bogotá. Forma el centro tradicional de la ciudad, compartiéndolo con La Candelaria, localidad que está enclavada en su territorio, separada en 1991.`;
  } else if (ciudad === "kennedy") {
    informacion = `Kennedy es la localidad número 8 del Distrito Capital de Bogotá, capital de Colombia. Se encuentra ubicada al suroccidente de la ciudad.`;
  }
  alert(
    `Escogiste el departamento de ${departamento} y la ciudad de ${ciudad}.\n\nAcerca de la ciudad:\n${informacion}`
  );
}
