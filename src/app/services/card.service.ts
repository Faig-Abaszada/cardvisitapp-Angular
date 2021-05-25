import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cards!: Card[]

  constructor(
    @Inject('apiUrl') private apiUrl: string, //apiURL: string !service
                                             // icinde apiurl-i cagiracagimiz deyisken adidir!
    private http: HttpClient
  ) { }

  getCards(): void {
    this.http.get<Card[]>(this.apiUrl + '/cards')
      .subscribe( (res: Card[]) => {
        this.cards = res;
      });
  }

  addCard(card: Card) {
    return this.http.post(this.apiUrl + '/cards', card)
  }

}
