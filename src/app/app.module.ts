import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from './car.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { DetailCarsComponent } from './components/detail-cars/detail-cars.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    DetailCarsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
