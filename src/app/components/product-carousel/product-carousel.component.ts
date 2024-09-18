import { Component, Input, output } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [ProductCardComponent],
  styleUrl: './product-carousel.component.scss',
  templateUrl: './product-carousel.component.html' 
})
export class ProductCarouselComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() productName: string = '';

}
