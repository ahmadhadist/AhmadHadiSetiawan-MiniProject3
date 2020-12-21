import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { DetailCarsComponent } from './components/detail-cars/detail-cars.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'detail/:id', component: DetailCarsComponent }

  ];



@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
