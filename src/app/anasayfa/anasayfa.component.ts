// anasayfa.component.ts
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/haber.service';

@Component({
  selector: 'app-home',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css'],
})
export class HomeComponent implements OnInit {
  topHeadlines: any[] = [];
  isLoading: boolean = true;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getTopHeadlines().subscribe(
      (response: any) => {
        this.topHeadlines = response.articles || [];
        this.isLoading = false;
      },
      (error) => {
        console.error('Haberler yüklenirken bir hata oluştu:', error);
        this.isLoading = false;
      }
    );
  }
}
