// news.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '676f017549224f488970f1835f9db971';
  private baseUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}

  searchNews(query: string): Observable<any> {
    const url = `${this.baseUrl}/everything?q=${query}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
