import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  apiUrl = 'https://api.thecatapi.com/v1/breeds'
  apiKey = 'live_99Qe4Ppj34NdplyLW67xCV7Ds0oSLKGgcWWYnSzMJY9C0QOu0HUR4azYxWkyW2nr'

  httpOptions = {
    headers: new HttpHeaders({
      'x-api-key': this.apiKey,
    }),
  };

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getAll() {
    return this.httpClient.get(this.apiUrl, this.httpOptions)
  }

}
