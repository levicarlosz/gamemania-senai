import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { BannerItemsComponent } from '../banner-items/banner-items.component';

register();

@Component({
  selector: 'app-main-banner',
  standalone: true,
  imports: [BannerItemsComponent],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainBannerComponent {}
