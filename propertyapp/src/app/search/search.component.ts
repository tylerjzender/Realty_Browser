import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public state: String;
  public city: String;
  public locationString;
  public properties: Property[];
  

  constructor(private route: ActivatedRoute, private router: Router, private propertyService: PropertyService) { }

  
  ngOnInit(): void {
    let state = this.route.snapshot.paramMap.get('state');
    let city = this.route.snapshot.paramMap.get('city');
    if (city == null)
    {
      this.locationString = state;
    }
    else
    {
      this.locationString = city + ", " + state;
    }
    this.state = state;
    this.city = city;
    this.getProperties();
    this.router.events.subscribe((val) => {
      let state = this.route.snapshot.paramMap.get('state');
      let city = this.route.snapshot.paramMap.get('city');
      if (city == null)
      {
        this.locationString = state;
      }
      else
      {
        this.locationString = city + ", " + state;
      }
      this.state = state;
      this.city = city;
      this.getProperties();
    });
    
  }


  public getProperties(): void {
    if (this.city != null)
    {
      this.propertyService.findPropertiesByStateAndCity(this.state, this.city).subscribe(
        (response: Property[]) => {
          this.properties = response;
          console.log(this.properties);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    else
    {
      this.propertyService.findPropertiesByState(this.state).subscribe(
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

}
