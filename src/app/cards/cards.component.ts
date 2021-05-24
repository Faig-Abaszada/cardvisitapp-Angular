import { Component, OnInit } from '@angular/core';
import {CardService} from "../services/card.service";
import {MatDialog} from "@angular/material/dialog";
import {CardModalComponent} from "./card-modal/card-modal.component";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public cardService: CardService
  ) { }

  ngOnInit(): void {
    this.cardService.getCards();
  }

  addCardModal(): void {
    this.dialog.open(CardModalComponent)
  }

}
