import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import '@phosphor-icons/web/regular';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
    
    <router-outlet> </router-outlet>
    <app-footer />
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  @Input() title?: string = 'test';
}
