import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Property } from '../property';
import { PropertyService } from '../property.service';
import { PropertyImage } from '../propertyImage';
import { PropertyImageService } from '../property-image.service';
import { S3 } from 'aws-sdk';
import * as AWS from 'aws-sdk';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public properties: Property[];
  public propertyImages: PropertyImage[];
  //public imgStringLink: String;

  constructor(private propertyService: PropertyService, private propertyImageService: PropertyImageService){}

  
  ngOnInit() {
    this.getProperties();
    this.getPropertyImages();

   
  }

  
 /*
  bucketDummy = new S3(
    {
      accessKeyId: 'AKIAW6MFAHI3ZT4FQAMW',
      secretAccessKey: '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',
      region: 'us-east-2' 
    }
  ) */

  //getImgStringLink() {
    //const params = { Bucket: 'realtyappbucket', Key: this.user}
  //}

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
