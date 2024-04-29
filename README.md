# Github users

## ¿De qué se trata?

Es una aplicación que se conecta a la API de Github para traer la información de un determinado usuario, esta nos presenta un buscador, donde podemos detallar al usuario y al dar en el botón “**buscar**”, nos presenta una imagen del usuario con su información básica y sus últimos 4 repositorios en los que ha trabajado.

## ¿Cómo fue mi experiencia programando la App?

Honestamente, no había trabajado antes con Tanstack Query, pero quisé ir más allá y al usarlo e investigar sobre esta tecnología, me encantó y le veo bastante futuro, sobretodo en mis proyectos de ahora en adelante, el manejo del caché y el ahorrar líneas de código en lo personal creo que fue lo que más me gustó.

Aunque era una App con pocas implementaciones, le dediqué todo mi esfuerzo para que quedara y se viera lo mejor posible y a cada repositorio del usuario le dejé un enlace para que si contiene la información de lo que tiene en producción, se pueda ver con un click.

Por último, traté de hacerlo lo más dinámico y divertido, así que le agregué varios detalles tanto en el “Loading”, como en la búsqueda del usuario para que el encontrar los datos del usuario sea toda una celebración.

Dejé una versión del proyecto en producción, lo pueden ver en el siguiente link: [https://jorgearancibia1.github.io/examen-github-user/](https://jorgearancibia1.github.io/examen-github-user/)

Pd: También agregué un sonido para la carga de la búsqueda, pero… para no rayar en lo informal… creo que solo lo subiré en una rama llamada “**happy-sound**”, eso si lo quieren ver como queda, la pueden unir 😄.

## ¿Cómo correr el proyecto?

Para correr el proyecto pueden clonarlo desde el repositorio y luego correr los comandos:

```jsx
npm install
npm run dev
```

Con esto ya podrás correr la App de forma local. 🎊 🎉

## Detalles del proyecto

- Se realizó este proyecto, pensando en que tenga una estructura lo más escalable posible, al final pensé en muchas cosas, las interfaces por ejemplo, a medida que el proyecto crezca podrían detallarse solo interfaces generales en la carpeta del “src” y dejar una carpeta para cada componente o vista (aunque consideré que una carpeta no se justificaba en este caso).
- Está estructurado de la forma más modular o aislada que encontré, dejando así una carpeta para la base de la api, pensando en que a futuro, se le pueden añadir más características solo añadiendo a la URL por cada request.
- El proyecto lo trabajé con "Authorization" al la llamar a la API, sin embargo, a pesar de que uno fija una fecha de expiración para los tokens, por alguna razón que desconozco, Github los expira antes de lo debido, por lo que finalmente opté por comentar esa línea de código y usar la APP sin el token (Así también es más sencillo de probar).
- El proyecto está hecho de forma responsiva.
- Al pinchar sobre la tarjeta del usuario, redirecciona al perfil del desarrollador y al pinchar sobre la tarjeta del repositorio, nos lleva al repositorio de este mismo, y si el usuario tiene habilitado el link para visitar la página subida a producción, ¡aparece para que podamos verla en acción!
- La carpeta Hooks contiene solo uno, este tiene todo lo que tiene que ver con el usuario y sus usuarios respectivos utilizando Tanstack Query.
- Se realizaron Mocks en primera instancia mientras armaba el proyecto y los dejé en caso de que sea necesario más adelante, ya sea para algún test o para tener una idea general de la data que se recibe.

## ¿Con qué se trabajó?

Esta aplicación está hecha con Vite, React.js, TypeScript , Testing library, Tailwind y Tanstack Query.

## Sobre el manejo de errores

- En cuanto al manejo de errores, siempre he manejado errores de manera que si aparece uno, no muestro nada y retorno el error.
Sin embargo me arrojaba errores cuando no encontraba un usuario, así que, tal vez me equivoque, pero consideré que la mejor forma es que si viene información del usuario la muestro y si no viene, que devuelva `null`, de esta manera, no arroja un error solo por no encontrar un usuario pero debe mostrar un mensaje que diga “No se ha encontrado un usuario con ese nombre”, de esta forma el usuario puede seguir buscando.
- Por otro lado, si no llega la información del repositorio de los repositorios del usuario, devolverá un array vacío, y este devolverá un mensaje de “No se han encontrado repositorios existentes para este usuario”.
