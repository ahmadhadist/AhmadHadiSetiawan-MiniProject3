import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../car';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-detail-cars',
  templateUrl: './detail-cars.component.html',
  styleUrls: ['./detail-cars.component.css']
})


export class DetailCarsComponent implements OnInit {
  @Input() car: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location
  ) { }

  getCar(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
    .subscribe(car=>this.car = car)

}

  ngOnInit(): void {
    this.getCar();
  }

  

  goBack(): void {
    this.location.back();
    }

}
