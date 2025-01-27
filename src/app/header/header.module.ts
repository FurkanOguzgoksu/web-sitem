import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent], // Header bileşeni burada tanımlanır
  imports: [CommonModule], // Angular modülleri burada eklenir
  exports: [HeaderComponent], // Header bileşeni dışarıya açılır
})
export class HeaderModule {}
