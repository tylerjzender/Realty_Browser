# Realty_Browser
This project was intended to clone realty browsers similar to Zillow/Realtor/Compass. This project demonstrates usage of MySQL, SpringBoot, Angular, and Bootstrap. From the home screen, a number of property listings from the database are shown in card format with some of the more critical property information, such as price and bedrooms, as well as showcasing a thumbnail for each property. Cards may be clicked to be redirected to each property's view page. View pages showcase the property in its entirety by listing the full range of information on the property and all the photos provided to the database. Properties may be searched for using the search bar by entering either just the state or both the state and city. Property listings may also be added to the database. A quick-quote page was included to use linear regression techniques for estimating a house price. Lastly, there is a "page not found" page included for when a non-valid web address is used.

# Goal of Project
The primary goal of this project was to learn about working in a full stack environment, as well as to learn about using SpringBoot and Angular. Additionally, I wanted to demonstrate how such tools could be used to create a realty browser clone. Lastly, I wanted to demonstrate a simple application of linear regression.

# Demonstration Video
https://www.youtube.com/watch?v=YWY1Ap5JZ0g

# Backend
The backend is made up of a MySQL server interfaced by a SpringBoot application which was originally generated from Maven. JPA Repository is used to access elements of the database. Two classes of objects are defined: Property objects and PropertyImage objects. Property objects represent a single listing, while PropertyImage objects represent a link to an image referring to a Property object. Two repository interfaces are defined for each class of previously mentioned object class. Two services are defined to utilize each repository interface. Lastly, two Rest controllers are defined to be called upon by the frontend.

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
  * Indicates  that the address navigated to is not valid.

# Project outcomes


# Future work
* Redirect from add page to view page once a property has been added.
* Improve search functionality ("Advanced Search" - beds, baths, listing type, etc.).
* Hide "Built Year: 0" if no built year is provided.
* Improve quick-quote linear regression model.
  * The current linear regression model was fitted with data from the popular "King County House Sales Dataset" which, despite having an ideal set of data columns for my model, contains only data for King County, Washington. This creates a model which does not accurately represent housing data in the USA as a whole, which is my preferred application. Due to the difficulty of finding optimal data, perhaps I would have to do some web scraping/data mining in the future and refit my model.
* Instant feedback on quotes and add forms if a field is not filled out correctly/Disable quoting if form is not filled out. 
* Use image hosting service for uploading images.
  * Due to difficulties and time constraints, I was unable to implement a file hosting service to store image data. Ideally, I would use AWS S3, Firebase, or Imgur API to upload and store images. In the future, I would like to revisit this and implement the usage of one of these services to store image data.




