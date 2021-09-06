import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Property } from '../property';
import { PropertyService } from '../property.service';
import { PropertyImage } from '../propertyImage';
import { PropertyImageService } from '../property-image.service';
import { S3 } from 'aws-sdk';
import * as AWS from 'aws-sdk';
import { Title } from '@angular/platform-browser';
import { variableName } from 'aws-sdk/clients/frauddetector';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public properties: Property[];
  public allProperties: Property[];
  public propertyImages: PropertyImage[];

  constructor(private propertyService: PropertyService, private propertyImageService: PropertyImageService, private titleService: Title){}

  
  ngOnInit() {
    this.getProperties();
    this.titleService.setTitle("Property Browser");
   
  }



  public getProperties(): void {
    this.propertyService.getProperties().subscribe(
      (response: Property[]) => {
        this.allProperties = response;
        
        let random = this.allProperties.sort(() => .5 - Math.random()).slice(0,6);
        this.properties = random;
        console.log(this.allProperties);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public getPropertyImages(): void {
    this.propertyImageService.getPropertyImages().subscribe(
      (response: PropertyImage[]) => {
        this.propertyImages = response;
        console.log(this.propertyImages);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
    

  
}