import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestProductPageComponent } from './guest-product-page.component';

describe('GuestProductPageComponent', () => {
  let component: GuestProductPageComponent;
  let fixture: ComponentFixture<GuestProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestProductPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
