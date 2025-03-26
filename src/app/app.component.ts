import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
  <!--  -->
  <!-- <button [disabled]="isDisabled">Cliquez-moi</button> -->
  <!-- <p [style.fontSize.px]="fontSize">Texte avec taille dynamique</p> -->
  `,
})
export class AppComponent {
  // 
  // isDisabled = true; /* isEditable est la "propriéte de classe et true est la "valeur" */
  // fontSize = 66;
}

// Lien du l'exercice : https://angular.dev/tutorials/learn-angular/6-property-binding


/*
Liaison de propriétés dans Angular
edit
La liaison de propriétés dans Angular vous permet de définir des valeurs pour les propriétés des éléments HTML, des composants Angular et plus encore.

Utilisez la liaison de propriétés pour définir dynamiquement les valeurs des propriétés et des attributs. Vous pouvez notamment activer/désactiver des boutons, définir des chemins d'accès aux images par programmation et partager des valeurs entre composants.
*/