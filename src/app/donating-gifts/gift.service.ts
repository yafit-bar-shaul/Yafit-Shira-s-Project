import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Gift } from './gift.model';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  private giftsSubject: BehaviorSubject<Gift[]> = new BehaviorSubject<Gift[]>([]);  // הגדרת BehaviorSubject
  private gifts: Gift[] = [];

  constructor(private http: HttpClient) {
    this.loadGiftsFromFile();  // טוען את המתנות כששירות נטען
  }

  // טוען את המתנות מהקובץ JSON ומעדכן את ה-BehaviorSubject
  loadGiftsFromFile(): void {
    this.http.get<Gift[]>('assets/gifts.json').pipe(
      catchError((err) => {
        console.error('שגיאה בטעינת המתנות', err);
        return [];
      })
    ).subscribe({
      next: (data) => {
        this.gifts = data;
        this.giftsSubject.next(this.gifts);  // עדכון ה-BehaviorSubject
      },
      error: (err) => {
        console.error('שגיאה בטעינת המתנות', err);
      },
    });
  }

  // מחזיר את המתנות כ-Observable
  getGifts(): Observable<Gift[]> {
    return this.giftsSubject.asObservable();
  }

  // הוספת מתנה
  addGift(newGift: Gift): Observable<Gift[]> {
    newGift.id = this.gifts.length > 0 ? Math.max(...this.gifts.map((gift) => gift.id)) + 1 : 1;
    this.gifts.push(newGift);
    this.giftsSubject.next(this.gifts);  // עדכון ה-BehaviorSubject
    return this.getGifts();
  }

  // עדכון מתנה
  updateGift(updatedGift: Gift): Observable<Gift[]> {
    const index = this.gifts.findIndex((gift) => gift.id === updatedGift.id);
    if (index !== -1) {
      this.gifts[index] = updatedGift;
      this.giftsSubject.next(this.gifts);  // עדכון ה-BehaviorSubject
    }
    return this.getGifts();
  }

  // מחיקת מתנה
  deleteGift(id: number): Observable<Gift[]> {
    this.gifts = this.gifts.filter((gift) => gift.id !== id);
    this.giftsSubject.next(this.gifts);  // עדכון ה-BehaviorSubject
    return this.getGifts();
  }
}
