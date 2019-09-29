import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewOrganisationPage } from './view-organisation.page';

const routes: Routes = [
  {
    path: '',
    component: ViewOrganisationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewOrganisationPage]
})
export class ViewOrganisationPageModule {}
