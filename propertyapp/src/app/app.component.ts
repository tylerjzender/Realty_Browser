import { Component, OnInit } from '@angular/core';
import { Property } from './property';
import { PropertyService } from './property.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import * as AWS from 'aws-sdk';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public properties: Property[];
  title: any;
  public searchTerm: String;
  public searchState: String;
  public searchCity: String;
  
  onSearchSubmitted(key: string){
    console.log("Key: " + key);
    this.searchThis(key);

    //this.searchThis(key);
    if (this.searchCity != null)
    {
      this.router.navigate(['/search/state/' + this.searchState + '/city/' + this.searchCity]);
      this.searchTerm = null;
      this.searchState = null;
      this.searchCity = null;
    }
    else
    {
      this.router.navigate(['/search/state/' + this.searchState]);
      this.searchTerm = null;
      this.searchState = null;
      this.searchCity = null;
    }
  }

  constructor(private propertyService: PropertyService, private router: Router, private route: ActivatedRoute){}

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

  public searchThis(key: string): void {
    console.log("Key (searchThis): " + key);
    this.searchTerm = key;
    var substrings: String[];

    
    if (this.searchTerm.includes(",")) { 
      substrings = this.searchTerm.split(",");
    } else if (this.searchTerm.includes(" ")) { 
      substrings = this.searchTerm.split(" ");
    } 
    else 
    {
      this.searchState = key;
      return;
    }

    for (let ctr = 0; ctr < substrings.length; ctr++) {
      substrings[ctr] = substrings[ctr].trim();
      if (substrings[ctr].length == 2)
      {
        this.searchState = substrings[ctr];
      }
      else
      {
        this.searchCity = substrings[ctr];
      }
    }    
  } 
  
}