import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatingGiftsComponent } from './donating-gifts.component';

describe('DonatingGiftsComponent', () => {
  let component: DonatingGiftsComponent;
  let fixture: ComponentFixture<DonatingGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonatingGiftsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatingGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
