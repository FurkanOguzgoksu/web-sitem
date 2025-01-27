// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { KategoriComponent } from './kategori/kategori.component';
import { HakkimdaComponent } from './hakkimda/hakkimda.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'home', component: AnasayfaComponent },
  { path: 'kategori/:category', component: KategoriComponent },
  { path: 'hakkimda', component: HakkimdaComponent },
  { path: 'search', component: SearchComponent }, // Arama sayfası
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
