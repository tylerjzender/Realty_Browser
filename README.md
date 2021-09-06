# Realty_Browser
This project was intended to clone realty browsers similar to Zillow/Realtor/Compass. This project demonstrates usage of MySQL, SpringBoot, Angular, and Bootstrap. From the home screen, a number of property listings from the database are shown in card format with some of the more critical property information, such as price and bedrooms, as well as showcasing a thumbnail for each property. Cards may be clicked to be redirected to each property's view page. View pages showcase the property in it's entirety by listing the full range of information on the property and all the photos provided to the database. Properties may be searched for using the search bar by entering either just the state or both the state and city. Property listings may also be added to the database. A quick-quote page was included to use linear regression techniques for estimating a house price. Lastly, there is a "page not found" page included for when a non-valid webaddress is used.

# Demonstration Video
https://www.youtube.com/watch?v=YWY1Ap5JZ0g

# Backend
The backend is made up of a MySQL server interfaced by a SpringBoot application which was originally generated from Maven. JPA Repository is used to access elements of the database. Two classes of objects are defined: Property objects and PropertyImage objects. Property objects represent a single listing, while PropertyImage objects represent a link to an image refering to a Property object. Two repository interfaces are defined for each class of previously mentioned object class. Two services are defined to utilize each repository interface. Lastly, two Rest controllers are defined to be called upon by the frontend.

# Frontend
The frontend was developed in Angular 9 and utilizes bootstrap. The following components make up the front end:
* App
  * Operates nav-bar navigation and search functionality. 
* Home
  * Randomly lists a select number of properties from the full list of properties.
* View
  * Views a specific property.
* Search
  * Displays properties matching the provided search criteria.
* Add
  * Adds a property to the database.
* Quote
  * Uses a fitted linear regression model to provide a quote for a property's price. Fitted model was generated in R.
* PageNotFound
  * Inicated that the address navigated to is not valid.

# Future work
* Redirect from add page to view page once a property has been added.
* Improve search functionality ("Advanced Search" - beds, baths, listing type, etc.).
* Hide "Built Year: 0" if no built year is provided.
* Improve quick-quote linear regression model.
  * The current linear regression model was fitted with data from the popular "King County House Sales Dataset" which, despite having an ideal set of data columns for my model, it contains only data for King County, Washington. This creates a model which does not accurately represent housing data in the USA as a whole, which is my preferred application. Due to difficulty of finding optimal data, perhaps I would have to do some web scraping/data mining in the future and refit my model.
* Instant feedback on quote and add forms. 


