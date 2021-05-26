import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "../models/card";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {


  cards!: Card[]

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) { }

  getCards(): void {
    this.http.get<Card[]>(this.apiUrl + '/cards')
      .subscribe((res: Card[]) => {
        this.cards = res;
      });
  }



  addCard(card: Card): Observable<any> {
    return this.http.post(this.apiUrl + '/cards', card)
  }
  updateCard(card: Card, cardId: number): Observable<any> {
    return this.http.put(this.apiUrl + '/cards/' + cardId, card)
  }

}
//apiURL: string !service
// icinde apiurl-i cagiracagimiz deyisken adidir!
