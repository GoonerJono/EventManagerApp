import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },  { path: 'create-appointment', loadChildren: './create-appointment/create-appointment.module#CreateAppointmentPageModule' },
  { path: 'view-appointment', loadChildren: './view-appointment/view-appointment.module#ViewAppointmentPageModule' },
  { path: 'view-organisation', loadChildren: './view-organisation/view-organisation.module#ViewOrganisationPageModule' },
  { path: 'view-directions', loadChildren: './view-directions/view-directions.module#ViewDirectionsPageModule' },
  { path: 'cancelled-tickets', loadChildren: './cancelled-tickets/cancelled-tickets.module#CancelledTicketsPageModule' },
  { path: 'edit-user', loadChildren: './edit-user/edit-user.module#EditUserPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
