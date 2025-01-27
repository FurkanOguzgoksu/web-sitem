// search.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/haber.service'; // Haber servisi

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchQuery: string = ''; // Kullanıcının arama terimi
  news: any[] = []; // Haber sonuçları
  loading: boolean = false; // Yüklenme durumu

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q']; // Arama terimini al
      if (this.searchQuery) {
        this.getSearchResults();
      }
    });
  }

  getSearchResults(): void {
    this.loading = true;
    this.newsService.searchNews(this.searchQuery).subscribe(
      (response: any) => {
        this.news = response.articles;
        this.loading = false;
      },
      (error) => {
        console.error('Hata:', error);
        this.loading = false;
      }
    );
  }
}
