import { Component, OnInit } from '@angular/core';
import { Property } from './property';
import { PropertyService } from './property.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public properties: Property[];
  title: any;

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