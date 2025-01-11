import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingGiftsComponent } from './buying-gifts.component';

describe('BuyingGiftsComponent', () => {
  let component: BuyingGiftsComponent;
  let fixture: ComponentFixture<BuyingGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyingGiftsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyingGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
