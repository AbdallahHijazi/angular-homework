import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private urlApi = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) { }

  getWordData(word: string): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${word}`);
  }
}

