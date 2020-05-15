# AngularMaterial
Que es Angular Material? Angular Material es una librería de estilos (como Bootstrap) basada en la guía de diseño de Material Design, realizado por el equipo de Angular para integrarse perfectamente con Angular.

## Getting Started
1) para instalar angular material dirigirse con la consola dentro de la carpeta de tu proyecto de angular y escribir el comando
ng add @angular/material.
2) seleccionamos el estilo que deseamos para nuestro proyecto.
3) seleccionamos si queremos la tipografia de angular material.
4) seleccionamos si queremos tener animaciones.

## Material Module
En esta practica generaremos un modulo para manejar las importaciones 

1) por medio de la consola utilizaremos el comando "ng g m material" para generar un modulo.
2) dentro del archivo generado eliminamos el import de commonModule junto con su propiedad en el import y el arreglo de declaraciones.
3) ahora agregamos un exports array.
4) colocamos nuestros imports de nuestros componentes material.
5) Creamos una constante que sera un arrerlo llamada MAterialComponents y le aregaremos nuestras propiedad.
6) agregamos nuestra constante a los arreglos imports y exports.
7) dentro de nuestro app.module.ts importamos nuestro modulo y lo agregamos al arreglo de imports.

## Typography
1) docuemntacion https://material.angular.io/guide/typography

## Button
1) import {MatButtonModule} from '@angular/material/button';
2) injectarlo
3) documentacion https://material.angular.io/components/button/overview

## Button Toggle
1) import {MatButtonToggleModule} from '@angular/material/button-toggle';
2) injectarlo
3) documentacion https://material.angular.io/components/button-toggle/overview

## Icons
1) import import {MatIconModule} from '@angular/material/icon';
2) injectarlo
3) documentacion https://material.angular.io/components/icon/overview
4) Icons https://material.io/resources/icons/?style=baseline

## Badges
1) import {MatBadgeModule} from '@angular/material/badge';
2) injectarlo
3) documentacion https://material.angular.io/components/badge/overview

## Progress Spinner
1) import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
2) injectarlo
3) documentacion https://material.angular.io/components/progress-spinner/overview

## Navbar
1) import {MatToolbarModule} from '@angular/material/toolbar';
2) injectarlo
3) documentacion https://material.angular.io/components/toolbar/overview