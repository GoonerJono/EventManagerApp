import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CancelledTicketsPage } from './cancelled-tickets.page';

const routes: Routes = [
  {
    path: '',
    component: CancelledTicketsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CancelledTicketsPage]
})
export class CancelledTicketsPageModule {}
