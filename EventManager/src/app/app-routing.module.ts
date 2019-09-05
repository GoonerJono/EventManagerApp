import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },  { path: 'create-appointment', loadChildren: './create-appointment/create-appointment.module#CreateAppointmentPageModule' },
  { path: 'view-appointment', loadChildren: './view-appointment/view-appointment.module#ViewAppointmentPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
