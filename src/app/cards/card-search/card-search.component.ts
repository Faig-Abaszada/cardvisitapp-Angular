import { Component } from '@angular/core';
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent  {

  constructor(
    private  cardService: CardService
  ) { }


  search(searchText: string): void {
    // console.log(searchText);
    searchText = searchText.toLocaleLowerCase();
     this.cardService.filteredCards = this.cardService.cards.filter((card) => {
      return card.title.toLocaleLowerCase().indexOf(searchText) > -1 ||
            (card.name && card.name.toLocaleLowerCase().indexOf(searchText) > -1);
    });
  }

}
