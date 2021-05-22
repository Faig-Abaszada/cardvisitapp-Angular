import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    @Inject('apiUrl') private apiUrl: string, //apiURL: string !service
                                             // icinde apiurl-i cagiracagimiz deyisken adidir!
  ) { }
}
