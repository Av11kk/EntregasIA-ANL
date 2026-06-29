# Video de la exposición

**YouTube:** https://youtu.be/yKgF4JcyCCY




# Guion para exposición: Sistemas Expertos

**Materia:** Programación Avanzada
**Alumno:** Avik Nuñez Laffon
**Matrícula:** 191100

---

## Diapositiva 1. Sistemas expertos

Buenos días. En esta exposición voy a explicar qué son los sistemas expertos, cómo representan conocimiento y por qué fueron una parte importante de la inteligencia artificial.

La idea principal es que un sistema experto no intenta resolver cualquier problema, sino problemas de un dominio específico usando conocimiento especializado, reglas y un motor de inferencia.

---

## Diapositiva 2. ¿Qué es un sistema experto?

Un sistema experto es un programa diseñado para comportarse como un especialista en un área concreta. Puede apoyar diagnósticos, clasificaciones, recomendaciones o decisiones.

Su característica más importante es que separa el conocimiento del dominio del mecanismo que razona con ese conocimiento. Por eso puede explicar, al menos parcialmente, cómo llegó a una conclusión.

---

## Diapositiva 3. Conocimiento

En inteligencia artificial, conocimiento no es solo información guardada. Es una estructura que permite actuar: hechos, conceptos, reglas, relaciones, procedimientos y experiencia.

* **Conocimiento declarativo:** dice qué es cierto.
* **Conocimiento procedural:** explica cómo resolver un problema.
* **Metaconocimiento:** ayuda a decidir cómo utilizar el propio conocimiento.

---

## Diapositiva 4. Ingeniería del conocimiento

Para construir un sistema experto se necesita transformar la experiencia humana en conocimiento formal.

Ahí aparece el **ingeniero del conocimiento**, quien entrevista al experto, identifica conceptos, organiza reglas y valida que el sistema responda como lo haría un especialista.

Si esta etapa se hace mal, el sistema puede fallar aunque el programa funcione correctamente.

---

## Diapositiva 5. Base de conocimiento

La base de conocimiento es el depósito estable de todo lo que el sistema sabe.

Puede contener:

* Reglas
* Hechos generales
* Relaciones
* Restricciones
* Criterios de decisión

En sistemas basados en reglas se utilizan estructuras del tipo:

> **SI** condición **ENTONCES** conclusión.

Por ejemplo:

> **SI** una nota es mayor que 9 **ENTONCES** la calificación es sobresaliente.

---

## Diapositiva 6. Motor de inferencia

El motor de inferencia es el componente que aplica el conocimiento.

Su funcionamiento puede resumirse en tres pasos:

1. Compara las reglas con los hechos disponibles.
2. Decide qué regla aplicar cuando existen varias posibilidades.
3. Ejecuta la regla y agrega nuevas conclusiones a la memoria de trabajo.

En otras palabras, es el mecanismo de razonamiento del sistema.

---

## Diapositiva 7. Estrategias de inferencia

Existen diferentes formas de razonar.

* **Encadenamiento hacia adelante:** parte de hechos conocidos y obtiene nuevas conclusiones.
* **Encadenamiento hacia atrás:** parte de una hipótesis y busca los hechos que la sustentan.

También se emplean reglas lógicas como:

* Modus Ponens
* Modus Tollens
* Resolución

Estas permiten derivar conclusiones tanto simples como compuestas.

---

## Diapositiva 8. Arquitectura general

La arquitectura básica conecta los siguientes componentes:

* Usuario
* Interfaz
* Motor de inferencia
* Base de conocimiento
* Memoria de trabajo

El usuario proporciona los datos, la interfaz los recibe, el motor consulta reglas y hechos, la memoria de trabajo almacena la información temporal durante la consulta y la base de conocimiento conserva el conocimiento permanente del dominio.

---

## Diapositiva 9. Línea de tiempo

Los sistemas expertos tienen una historia importante.

* **1956:** nacimiento formal de la Inteligencia Artificial.
* **Década de 1960:** aparece **DENDRAL**, orientado a la química.
* **Década de 1970:** surge **MYCIN**, especializado en diagnóstico médico.
* **Década de 1980:** auge empresarial con sistemas como **XCON**.
* Posteriormente ocurrió una crisis debido a los altos costos y expectativas exageradas.

Sin embargo, sus principios siguen presentes en motores de reglas, software empresarial y sistemas híbridos modernos.

---

## Diapositiva 10. Tipos de sistemas expertos

Existen diversos tipos de sistemas expertos.

* Basados en reglas.
* Basados en casos.
* Probabilísticos.
* Difusos.
* Basados en marcos.
* Híbridos.

Cada uno representa y procesa el conocimiento de manera distinta, dependiendo del problema que busca resolver.

---

## Diapositiva 11. Ventajas y limitaciones

### Ventajas

* Conservan conocimiento especializado.
* Explican cómo llegaron a una conclusión.
* Funcionan muy bien cuando el dominio está claramente definido.
* Sus reglas pueden verificarse y mantenerse.

### Limitaciones

* El conocimiento puede ser ambiguo o cambiar rápidamente.
* Es difícil extraer toda la experiencia de un experto humano.
* Construir y mantener la base de conocimiento puede ser costoso.

---

## Diapositiva 12. Conclusión

Como conclusión, los sistemas expertos muestran una idea central de la Inteligencia Artificial:

> Razonar no consiste únicamente en calcular, sino también en representar conocimiento y justificar las conclusiones obtenidas.

Aunque actualmente conviven con el aprendizaje automático y otros modelos modernos, siguen siendo muy útiles cuando se necesita explicación, control y reglas claras para la toma de decisiones.

---

# Cierre para el video

Para finalizar, podemos decir que un sistema experto es una forma clásica pero todavía relevante de Inteligencia Artificial.

Su objetivo es capturar el conocimiento de especialistas, organizarlo dentro de una base de conocimiento y aplicarlo mediante un motor de inferencia para resolver problemas de un dominio específico.

Su mayor fortaleza es la capacidad de explicar cómo llega a una conclusión, mientras que su principal desafío continúa siendo obtener y mantener conocimiento de calidad.

---


