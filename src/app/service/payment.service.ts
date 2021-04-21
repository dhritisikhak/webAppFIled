import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from  "@angular/common/http" ;
import { Observable, of } from  "rxjs" ;
import  "rxjs/add/operator/map" ;
import  "rxjs/add/operator/switchMap" ;
import  "rxjs/add/observable/of" ;

const httpOptions = {
  headers: new HttpHeaders({
     "Content-Type" :  "application/json" ,
    'Access-Control-Allow-Origin':'*'
  })
}

const headers1= new HttpHeaders({
   "Content-Type" :  "application/json" ,
  'Access-Control-Allow-Origin':'*',
  })

@Injectable({
  providedIn: 'root'
})
export class Payments {
  URL_PAY = 'http://localhost:6780';

  constructor(
    private http: HttpClient  
  ) { }

  makePayment(data: any){
    return this.http.post(`${this.URL_PAY}/makepayment`, data, {headers: headers1})
  }
 
}

