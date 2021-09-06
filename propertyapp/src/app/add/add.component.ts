import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EventEmitter } from 'stream';
import { Property } from '../property';
import { PropertyService } from '../property.service';
import { PropertyImageService } from '../property-image.service';
import { PropertyImage } from '../propertyImage';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private additionalPicture1;
  private additionalPicture2;
  private additionalPicture3;
  private addedId: number;
  private addedCode: string;

  constructor(private propertyService: PropertyService, private propertyImageService: PropertyImageService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Add Listing");
  }

  public onAddProperty(addForm: NgForm): void {
    this.propertyService.addProperty(addForm.value).subscribe(
      (response: Property) => {
        console.log(response);
        this.addedId = response.id;

        console.log("this.additionalPicture1: "+this.additionalPicture1)
        
        if (this.additionalPicture1 != null)
        {
          const myImg: PropertyImage = {
            propertyId: this.addedId,
            imageLink: this.additionalPicture1
          }
          
          console.log(myImg);
          this.propertyImageService.addPropertyImage(myImg).subscribe(
            (response2: PropertyImage) => {
              console.log(response2);
            }
          )
        }

        if (this.additionalPicture2 != null)
        {
          const myImg: PropertyImage = {
            propertyId: this.addedId,
            imageLink: this.additionalPicture2
          }
          
          console.log(myImg);
          this.propertyImageService.addPropertyImage(myImg).subscribe(
            (response2: PropertyImage) => {
              console.log(response2);
            }
          )
        }

        if (this.additionalPicture3 != null)
        {
          const myImg: PropertyImage = {
            propertyId: this.addedId,
            imageLink: this.additionalPicture3
          }
          
          console.log(myImg);
          this.propertyImageService.addPropertyImage(myImg).subscribe(
            (response2: PropertyImage) => {
              console.log(response2);
            }
          )
        } 

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );

  }

  logImage1(value)
  {
    this.additionalPicture1 = value;
    console.log(value);
  }

  logImage2(value)
  {
    this.additionalPicture2 = value;
    console.log(value);
  }

  logImage3(value)
  {
    this.additionalPicture3 = value;
    console.log(value);
  }

}



