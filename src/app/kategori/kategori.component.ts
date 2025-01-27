// kategori.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/haber.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css'],
})
export class KategoriComponent implements OnInit {
  categoryName: string = '';
  categoryNews: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // URL parametrelerini alıyoruz ve kategori ismini belirliyoruz
    this.route.paramMap.subscribe((params) => {
      this.categoryName = params.get('category') || '';
      this.loadCategoryNews();
    });
  }

  loadCategoryNews() {
    this.newsService
      .getCategoryNews(this.categoryName, this.currentPage)
      .subscribe((data) => {
        this.categoryNews = data.articles;
        this.totalPages = Math.ceil(data.totalResults / 20); // Sayfa başına 20 haber varsayımı
      });
  }

  // Önceki sayfayı yükleme
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCategoryNews();
    }
  }

  // Sonraki sayfayı yükleme
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCategoryNews();
    }
  }
}
