import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardModalComponent } from './card-modal/card-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardModalComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserModule,
    MatSnackBarModule,
    MatProgressBarModule
  ]
})
export class CardsModule { }
