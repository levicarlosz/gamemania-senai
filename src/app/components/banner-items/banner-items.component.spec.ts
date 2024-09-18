import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerItemsComponent } from './banner-items.component';

describe('BannerItemsComponent', () => {
  let component: BannerItemsComponent;
  let fixture: ComponentFixture<BannerItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
