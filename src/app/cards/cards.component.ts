import { Component, OnInit } from '@angular/core';
import {CardService} from "../services/card.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    public cardService: CardService
  ) { }

  ngOnInit(): void {
    this.cardService.getCards();
  }

}
