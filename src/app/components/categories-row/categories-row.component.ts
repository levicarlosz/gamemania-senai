import { Component } from '@angular/core';
import { CategoriesItemComponent } from '../categories-item/categories-item.component';

@Component({
  selector: 'app-categories-row',
  standalone: true,
  imports: [CategoriesItemComponent],
  templateUrl: './categories-row.component.html',
  styleUrl: './categories-row.component.scss',
})
export class CategoriesRowComponent {}
