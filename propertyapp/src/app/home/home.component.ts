import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public properties: Property[];

  constructor(private propertyService: PropertyService){}

  ngOnInit() {
    this.getProperties();
  }

  public getProperties(): void {
    this.propertyService.getProperties().subscribe(
      (response: Property[]) => {
        this.properties = response;
        console.log(this.properties);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
