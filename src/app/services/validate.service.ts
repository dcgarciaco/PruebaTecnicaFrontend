import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValidateService {

  constructor(private http:HttpClient) { }

  validate(nombre, docCifrado):Observable<any> {
    const data = { 
      name: nombre,
      docCrypt: docCifrado
    };

    return this.http.post(`http://localhost:3000/checkValues/`, data);
  }
}
