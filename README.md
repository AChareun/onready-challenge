# Onready NodeJS Challenge

[`challenge-guidelines.md`](https://raw.githubusercontent.com/AChareun/onready-challenge/master/challenge-guidelines.md) para encontrar la consigna del ejercicio.

## Instalación y uso

Descargar el repositorio y ejecutar `npm install`

`npm start` ejecuta la aplicación

Otros scripts:

- `npm run test`: corre unit tests con Jest y genera informe de code-coverage

- `npm run test:dev`: corre unit tests con Jest en modo _watch_

## Acerca de mi implementación

_Imaginando una concesionaria de autos y motos_ tomé el log requerido como si fuera una suerte de registro de inventario.

El modulo `service` contiene la lógica de negocio

El modulo `logger` se encarga de hacer log de objetos, no necesariamente vehículos

En una implementación completa, podría incorporarse un modulo encargado de interactuar con la base de datos, en caso de existir una, y otro que se ocupe de la interacción con el usuario.
