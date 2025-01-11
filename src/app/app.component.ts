import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuyingGiftsComponent } from './buying-gifts/buying-gifts.component';
import { DonatingGiftsComponent } from './donating-gifts/donating-gifts.component';
import { DonorManagementComponent } from './donor-management/donor-management.component';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,HomeComponent,BuyingGiftsComponent,DonatingGiftsComponent,DonorManagementComponent,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChineseSale';
}
