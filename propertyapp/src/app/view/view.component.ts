import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public gfg = false;
  public propertyId;
  public viewedProperty;
  constructor(private route: ActivatedRoute, private propertyService: PropertyService, private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.propertyId = id;
    this.getViewedProperty();
  }


  public getViewedProperty(): void {
    this.propertyService.findProperty(this.propertyId).subscribe(
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

}
