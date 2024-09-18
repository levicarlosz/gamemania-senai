import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import '@phosphor-icons/web/regular';
import { CategoriesItemComponent } from '../categories-item/categories-item.component';
import { CategoriesRowComponent } from '../categories-row/categories-row.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { ProductCarouselComponent } from '../product-carousel/product-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ProductCarouselComponent,
    CategoriesItemComponent,
    CategoriesRowComponent,
    MainBannerComponent,
  ],
  template: `
    
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  @Input() title?: string = 'test';
}
