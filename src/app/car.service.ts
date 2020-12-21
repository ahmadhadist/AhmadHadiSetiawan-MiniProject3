import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CarService {

  private carsUrl = 'assets/cars.json';
  private carUrl = 'assets/car.json';

  constructor(private http: HttpClient) { }
  

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  
    }
    
    getCar(id: number): Observable<Car> {
      return this.http.get<Car>(this.carUrl + "?id=" + id)
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        );
      }

  updateCar(car: Car): Observable<Car>{
    return this.http.post<Car>(this.carsUrl, car,);
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
  

  

  
}
