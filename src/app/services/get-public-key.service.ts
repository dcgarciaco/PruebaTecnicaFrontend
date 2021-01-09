import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class GetPublicKeyService {

  constructor(private http:HttpClient) { }

  getPublicKey () {
    return this.http.get('http://localhost:3000/publicKey');
  }
}
