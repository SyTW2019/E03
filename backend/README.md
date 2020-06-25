# node-mongo-registration-login-api

NodeJS + MongoDB API for User Management, Authentication and Registration

For documentation and instructions check out http://jasonwatmore.com/post/2018/06/14/nodejs-mongodb-simple-api-for-authentication-registration-and-user-management

## Despliegue

https://jasonwatmore.com/post/2018/12/06/deploy-to-heroku-node-mongo-api-for-authentication-registration-and-user-management

https://medium.com/@timanovsky/heroku-buildpack-to-support-deployment-from-subdirectory-e743c2c838dd

## Events

Las rutas para acceder al endpoint de Event son las siguientes:

- GET: /events - Accede a todos los eventos en un array
- GET: /events/:id -Accede a los datos de un evento en concreto
- GET: /events/:id/join -Añade el usuario a la lista de asistentes al evento
- DELETE: /events/:id/unjoin -Elimina a un usuario de la lista de asistentes
- POST: /events/new -Crea un elemento, para ello se le tiene que pasar en el cuerpo un objeto:

  { "eventName":"",
  "beginDate":"Formato Date",
  "endDate":"Formato Date", "description":"", "imageUrl":"",
  }
  //Los campos son obligatorios menos el de imagen y el de fecha de finalización. En el caso de que se omita la fecha de fin se debería sobreentender que es todo el día.

* UPDATE: /events/:id -Actualiza el evento, lo actualiza con los campos anteriores y solo el dueño del evento
* DELETE: /events/:id -Elimina el evento, solo el creador
