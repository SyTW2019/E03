# EventFinder [![Build Status](https://travis-ci.com/SyTW2019/E03.svg?branch=master)](https://travis-ci.com/SyTW2019/E03)

## Nosotros

Somos el grupo E03 de la Universidad de La Laguna formado por:
  * Sonia Díaz Santos
  * Óscar González García
  * Carmen Castro González
  * Renisha Lachhani Punjabi
  * Diego Machín Guardia

Esta aplicación está desarrollada para la asignatura de Sistemas y Tecnologías Web. 



## Tecnologías
### Travis

Esta página incluye el servicio de Travis de manera que con cada modificación que se realize y se suba al repositorio lanzará el servicio de manera que se ejecuten los test y se cree la aplciación. 

Además se ha integrado travis con de Slack de manera que una vez se realize el lanzamiento en travis se comunique el resultado al equipo de trabajo. Esto se realiza al añadir la linea de notificaciones en el fichero de travis y añadir la clave de las comunicaciones al slack. 

### SonarCloud

Se creará un token usando los recursos ofrecidos por la documentación de SonarCloud, para ello:
  
  1. Se genera usando la semilla "sytwe03" en la plataforma que te habilita para ello el SonarCloud. 
  2. A continuación se ha de encriptar el token usando el comando  `travis encrypt token  --com`
  3. Se añade en el fichero de travis la información de dirección de la organización a la que se carga el proyecto, para ello se cargan las siguientes líneas
  
    addons: 
      sonarCloud:
        organization: OrganizationKey
        token: 
          secure: "token"
      script:
        -sonar-scanner
  4. Se añade dentro del directorio de frontend el fichero de configuración del sonarCloud que se llama `sonar-project.properties`. Dentro de este fichero se ha de completado con los campos necesarios para la inicialización del servicio. 
  