import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public quoteProperty = new quoteProperty(null,null,null,null,null);
  public quotedPrice: number = null;
  public quotedPriceString: string = "";

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Quick Quote");
  }

  public quickQuote(): void {
    this.quotedPrice = 236390.964 + (-52032.023*this.quoteProperty.bathrooms) + (120.618*this.quoteProperty.squareFoot) 
      + (-18852.615*this.quoteProperty.acreage) + (-20453.768*this.quoteProperty.bedrooms*this.quoteProperty.bathrooms) + (65.438*this.quoteProperty.bathrooms*this.quoteProperty.squareFoot);
      this.quotedPrice = Math.round(this.quotedPrice);
      this.quotedPriceString = "Your Quick-Quote: $" + this.quotedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      //this.quoteProperty = new quoteProperty('','','','','');
  }

  /*
  public onAddProperty(quoteForm: NgForm): void {
    this.propertyService.addProperty(addForm.value).subscribe(
      (response: Property) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  } */

}

export class quoteProperty {

  constructor(
    public bedrooms: number,
    public bathrooms: number,
    public squareFoot: number,
    public acreage: number,
    public yearBuilt: number
  ) { }
}
