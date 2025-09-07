# Checkpoint 01 WEB

Entrega: Repositorio en GitHub
Setup: Crear el proyecto desde 0 -> npm create vite@latest checkpoint -template react
Duración: 20 min Teórico 1h:40min Práctico
Checkpoint teorico: https//forms.gle/DNEbfwr28QTHMX629

## Objetivo
Construir una aplicación en React llamada "BookTrack", que permite buscar libros y crear una lista de lectura personal.

### Instrucciones

1. Búsqueda de Libros
Crear un Input de búsqueda y un botón.Usar la API de Open Library.
https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10

Mostrar los resultados en tarjetas con:

- Título del libro
- Autor principal
- Año de publicación (si existe)
- Un botón "Agregar a Lista"

Manejar estados de cargando, error y sin resultados con renderizado condicional.

2. Lista de Lectura
- Debajo de los resultados, mostrar una lista de libros guardados.
- Cada libro debe tener además de los datos iniciales:
- - Estado de lectura (ej: "Pendiente", "Leyendo", "Terminado") -> seleccionado en un formulario controlado a partir de un select con options

### Requisitos:
Permitir editar y eliminar un libro de la lista
Mostrar un mensaje si la lista está vacía.