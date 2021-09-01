import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EventEmitter } from 'stream';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
  }

  public onAddProperty(addForm: NgForm): void {
    this.propertyService.addProperty(addForm.value).subscribe(
      (response: Property) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }

}



