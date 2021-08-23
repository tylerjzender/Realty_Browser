import { Component, OnInit } from '@angular/core';
import { Property } from './property';
import { PropertyService } from './property.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import * as AWS from 'aws-sdk';

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
    //this.getProperties();

    /*
    AWS.config.update({
      region: 'us-east-2',
      accessKeyId: 'AKIAW6MFAHI3ZT4FQAMW',
      secretAccessKey: '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'
    });

    //this.getImgStringLink();

    var S3 = new S3();
    const params = {
      Bucket: 'realtyappbucket',
      region: 'us-east-2',
      accessKeyId: 'AKIAW6MFAHI3ZT4FQAMW',
      secretAccessKey: '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',
      
    }

    

    S3.listObjects(params, function (err, data) {
      if (err) {
        console.log('There was an error getting your files: ' + err);
        return;
      }

      console.log('Successfully get files.', data);

      const fileDatas = data.Contents;

      fileDatas.forEach(function (file) {
        
      });
    });  */
  }

  /*
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
  } */
}