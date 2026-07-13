// Perceptron aplicado a XOR con ingenieria de caracteristicas.
// Transformacion usada:
//   phi(x1, x2) = [x1, x2, x1 * x2]

const datosXor = [
  { entrada: [0, 0], salida: 0 },
  { entrada: [0, 1], salida: 1 },
  { entrada: [1, 0], salida: 1 },
  { entrada: [1, 1], salida: 0 },
];

function transformar([x1, x2]) {
  return [x1, x2, x1 * x2];
}

function etiquetaPerceptron(salidaXor) {
  return salidaXor === 1 ? 1 : -1;
}

function productoPunto(a, b) {
  return a.reduce((total, valor, i) => total + valor * b[i], 0);
}

function entrenarPerceptron(datos, tasaAprendizaje = 1, maxEpocas = 100) {
  let pesos = [0, 0, 0];
  let sesgo = 0;

  for (let epoca = 1; epoca <= maxEpocas; epoca += 1) {
    let errores = 0;

    for (const fila of datos) {
      const x = transformar(fila.entrada);
      const y = etiquetaPerceptron(fila.salida);
      const activacion = productoPunto(pesos, x) + sesgo;

      if (y * activacion <= 0) {
        pesos = pesos.map((peso, i) => peso + tasaAprendizaje * y * x[i]);
        sesgo += tasaAprendizaje * y;
        errores += 1;
      }
    }

    if (errores === 0) {
      return { pesos, sesgo, epocas: epoca };
    }
  }

  return { pesos, sesgo, epocas: maxEpocas };
}

function predecir(entrada, pesos, sesgo) {
  const x = transformar(entrada);
  const activacion = productoPunto(pesos, x) + sesgo;
  return {
    caracteristicas: x,
    activacion,
    clase: activacion > 0 ? 1 : 0,
  };
}

const modelo = entrenarPerceptron(datosXor);

console.log("Perceptron para XOR con ingenieria de caracteristicas");
console.log("Transformacion: phi(x1, x2) = [x1, x2, x1*x2]");
console.log(`Epocas necesarias: ${modelo.epocas}`);
console.log(`Pesos aprendidos: [${modelo.pesos.join(", ")}]`);
console.log(`Sesgo aprendido: ${modelo.sesgo}`);
console.log(
  `Plano de separacion: ${modelo.pesos[0]}x + ${modelo.pesos[1]}y + ${modelo.pesos[2]}z + (${modelo.sesgo}) = 0`
);
console.log("\nPredicciones:");

for (const fila of datosXor) {
  const prediccion = predecir(fila.entrada, modelo.pesos, modelo.sesgo);
  console.log(
    `entrada [${fila.entrada.join(", ")}] -> phi=[${prediccion.caracteristicas.join(
      ", "
    )}], activacion=${prediccion.activacion}, esperado=${fila.salida}, predicho=${prediccion.clase}`
  );
}


