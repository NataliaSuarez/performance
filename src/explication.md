# Como funciona react?

## Qué es es el DOM?

Document Object Model => es la representación grafica de nuestra app, osea UI

> Cada vez que cambia el estado de la UI el DOM debe ser actualizado para poder representar el cambio de estado.

El problema empieza a ocurrir cuando realizamos MULTIPLES actualizaciones al DOM de nuestra app ==> ya que ACTUALIZAR el DOM ya esta optimizado, pero MOSTRAR los cambios en la interfaz es más pesado.

##### conclusiones/motivación

1. Actualizar el estado esta relaltivamente optimizado
2. Mostrar los cambios a traves de la interfaz grafica no esta tan optimizado y es una tarea mas pesada

## VIRTUAL DOM

Representación del DOM que esta cargada en memoria.

Se va a utilizar para actualizar el DOM.

0. Actualizamos el Virtual DOM
1. React compara la diferencia entre la nueva instancia del Virtual DOM y su instancia anterior. ---> por ej, un nuevo nodo.
2. Luego react va a calcular la diferencia entre el DOM y va a renderizar el nuevo NODO.

---

# Porque en ocasiones tenemos que optimizar nuestra app?

_CASO:_
En una app vamos a tener arbol de nodos grande. Si bien no todos los nodos van a ser actualizados, algunos de los componentes van a tener metodos de render mas pesados. Es decir, algunos metodos de render van a llevar una mayor capacidad de computo hasta lograr renderizar el componente que queremos mostrar.

Si no prevenimos el metodo de render podemos estar gatillando el metodo de render de todos los nodos hijos.

**Para optimizar vamos a evitar ejecutar el metodo de render si no es necesario.**

De esta manera podemos evitar que se ejecute una logica computacional pesada.
