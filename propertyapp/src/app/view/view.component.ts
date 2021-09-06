import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../property';
import { PropertyImageService } from '../property-image.service';
import { PropertyService } from '../property.service';
import { PropertyImage } from '../propertyImage';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public gfg = false;
  public propertyId;
  public viewedProperty;
  public viewedPropertyImages;
  constructor(private route: ActivatedRoute, private propertyService: PropertyService, private propertyImageService: PropertyImageService, private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.propertyId = id;
    this.getViewedProperty();
    this.getViewedPropertyImages();
  }

  


  public getViewedProperty(): void {
    this.propertyService.findPropertyById(this.propertyId).subscribe(
      (response: Property) => {
        this.viewedProperty = response;
        console.log(this.viewedProperty);
      },
      (error: HttpErrorResponse) => {
        alert("Property id " + this.propertyId + " does not exist.");
        this.router.navigate(['']);
      }
    );
  }


  getViewedPropertyImages() {
    this.propertyImageService.findPropertyImagesByPropertyId(this.propertyId).subscribe(
      (response: PropertyImage[]) => {
        this.viewedPropertyImages = response;
        console.log(this.viewedPropertyImages);
      },
      (error: HttpErrorResponse) => {
        alert("Property id " + this.propertyId + " does not exist.");
        this.router.navigate(['']);
      }
    )
    /*
    this.propertyImageService.findPropertyImagesByPropertyId(this.propertyId).subscribe(
      (response: Property) => {
        this.viewedPropertyImages = response;
        console.log(this.viewedProperty);
      },
      (error: HttpErrorResponse) => {
        alert("Property id " + this.propertyId + " does not exist.");
        this.router.navigate(['']);
      }
    ); */
    
  }

}
