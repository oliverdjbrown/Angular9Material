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

## Sidenav
1) import {MatSidenavModule} from '@angular/material/sidenav';
2) injectarlo
3) documentacion https://material.angular.io/components/sidenav/overview

## Menu
1) import {MatMenuModule} from '@angular/material/menu';
2) injectarlo
3) documentacion https://material.angular.io/components/menu/overview

## List
1) import {MatListModule} from '@angular/material/list';
2) injectarlo
3) documentacion https://material.angular.io/components/list/overview

## Grid List
1) import {MatGridListModule} from '@angular/material/grid-list';
2) injectarlo
3) documentacion https://material.angular.io/components/grid-list/overview

## Expansion
1) import {MatExpansionModule} from '@angular/material/expansion';
2) injectarlo
3) documentacion https://material.angular.io/components/expansion/overview

## Cards
1) import {MatCardModule} from '@angular/material/card';
2) injectarlo
3) documentacion https://material.angular.io/components/card/overview

## Tabs
1) import {MatTabsModule} from '@angular/material/tabs';
2) injectarlo
3) documentacion https://material.angular.io/components/tabs/overview

## Stepper
1) import {MatStepperModule} from '@angular/material/stepper';
2) injectarlo
3) documentacion https://material.angular.io/components/stepper/overview

## Input
1) import {MatInputModule} from '@angular/material/input';
2) injectarlo
3) documentacion https://material.angular.io/components/input/overview

## Select
1) import {MatSelectModule} from '@angular/material/select';
2) injectarlo
3) documentacion https://material.angular.io/components/select/overview

## Autocomplete
1) import {MatAutocompleteModule} from '@angular/material/autocomplete';
2) injectarlo
3) documentacion https://material.angular.io/components/autocomplete/overview

## CheckBox
1) import {MatCheckboxModule} from '@angular/material/checkbox';
2) injectarlo
3) documentacion https://material.angular.io/components/checkbox/overview

## RadioButton
1) import {MatRadioModule} from '@angular/material/radio';
2) injectarlo
3) documentacion https://material.angular.io/components/radio/overview

## DateTimePicker
1) import {MatDatepickerModule} from '@angular/material/datepicker';
2) injectarlo
3) documentacion https://material.angular.io/components/datepicker/overview

## Tooltip
1) import {MatTooltipModule} from '@angular/material/tooltip';
2) injectarlo
3) documentacion https://material.angular.io/components/tooltip/overview

## Snackbar
1) import {MatSnackBarModule} from '@angular/material/snack-bar';
2) injectarlo
3) documentacion https://material.angular.io/components/snack-bar/overview

## Dialog
1) import {MatDialogModule} from '@angular/material/dialog';
2) injectarlo
3) documentacion https://material.angular.io/components/dialog/overview