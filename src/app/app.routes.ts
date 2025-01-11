import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BuyingGiftsComponent } from './buying-gifts/buying-gifts.component';
import { DonatingGiftsComponent } from './donating-gifts/donating-gifts.component';
import { PaymentComponent } from './payment/payment.component';
import { DonorManagementComponent } from './donor-management/donor-management.component';

export const routes: Routes = [
    {path:' ',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'menu',component:MenuComponent},
    {path:'buyingGifts',component:BuyingGiftsComponent},
    {path:'donatingGifts',component:DonatingGiftsComponent},
    {path:'donorManegment',component:DonorManagementComponent},
    {path:'paymentManegment',component:PaymentComponent}

];

   
   export class AppRoutingModule { }