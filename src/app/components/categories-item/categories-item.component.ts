import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories-item',
  standalone: true,
  imports: [],
  templateUrl: './categories-item.component.html',
  styleUrl: './categories-item.component.scss',
})
export class CategoriesItemComponent {
  @Input() title?: string = '';
}
