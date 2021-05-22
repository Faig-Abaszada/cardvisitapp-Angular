import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    @Inject('apiUrl') private apiUrl: string, //apiURL: string !service
                                             // icinde apiurl-i cagiracagimiz deyisken adidir!
    private http: HttpClient
  ) { }
}
