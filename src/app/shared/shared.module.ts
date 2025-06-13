import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonButton, IonList, IonItem, IonProgressBar, IonButtons, IonBackButton } from '@ionic/angular/standalone';


const GENERALS = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule
]

const IONIC_MODULES = [
  IonButton,
  IonCardContent,
  IonCardTitle,
  IonCard,
  IonCardHeader,
  IonSearchbar,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonProgressBar,
  IonButtons,
  IonBackButton
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...GENERALS,
    ...IONIC_MODULES,
  ],
  exports: [
    CommonModule,
    ...GENERALS,
    ...IONIC_MODULES,
  ]
})
export class SharedModule { }
