import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Gift } from './gift.model';
import { GiftService } from './gift.service';

@Component({
  selector: 'app-donating-gifts',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './donating-gifts.component.html',
  styleUrl: './donating-gifts.component.css'
})
export class DonatingGiftsComponent implements OnInit {

  gifts$: Observable<Gift[]> | undefined;
  currentGift!: Gift;
  isEditing: boolean = false;

  constructor(private giftService: GiftService) { }

  ngOnInit() {
    this.loadGifts();

  }
  loadGifts() {
    this.gifts$ = this.giftService.getGifts();
    console.log('gifts$', this.gifts$)
  }

  addGift() {
    this.giftService.addGift(this.currentGift).subscribe(() => {
      this.loadGifts();
      this.resetForm();

    });
  }

  updateGift() {
    this.giftService.updateGift(this.currentGift).subscribe(() => {
      this.loadGifts();
      this.resetForm();
    });
  }

  deleteGift(id: number) {
    this.giftService.deleteGift(id).subscribe(() => {

      this.loadGifts();
    })
  }


  editGift(gift: Gift) {
    this.isEditing = true;
    this.currentGift = { ...gift };
  }
  resetForm() {

    this.currentGift = { id: 0, name: '', description: '', price: 0 }
    this.isEditing = false;
  }
}