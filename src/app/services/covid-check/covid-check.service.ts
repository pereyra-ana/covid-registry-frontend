import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidCheck } from 'src/app/model/covid-check/covid-check';
import { SearchResult } from 'src/app/model/searchResult/search-result';
import { Stats } from 'src/app/model/stats/stats';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidCheckService {

  url = environment.url_service;

  constructor(private http: HttpClient) { }

  //  /covid/checks/search?key=X&values=Y,Z
  getAll(): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.url}/covid/checks`);
  }

  //  /covid/checks/search?key=X&values=Y,Z
  getAllWithFilter(key: string, value: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.url}/covid/checks/search?key=${key}&value=${value}`);
  }

  create(registries: CovidCheck): Observable<any> {
    return this.http.post<CovidCheck>(`${this.url}/covid/checks`, registries);
  }

  getById(id: string): Observable<CovidCheck> {
    return this.http.get<CovidCheck>(`${this.url}/covid/checks/${id}`);
  }

  getStats(): Observable<Stats> {
    return this.http.get<Stats>(`${this.url}/covid/stats`);
  }
}
