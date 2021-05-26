import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardModalComponent } from './card-modal/card-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CardSearchComponent } from './card-search/card-search.component';


@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardModalComponent,
    CardSearchComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserModule,
    MatProgressBarModule
  ]
})
export class CardsModule { }
