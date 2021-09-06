package com.realty.realtybrowser.domain;

//import com.sun.org.apache.xpath.internal.objects.XString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Property implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String streetAddress;
    private String secondAddress;
    private String city;
    private String state;
    private String listingType;
    private int price;
    private int bedrooms;
    private float bathrooms;
    private String thumbnailLink;
    private float squareFoot;
    private float acreage;
    private String propertyType;
    private int yearBuilt;
    private int garageSpace;
    private String propertyCode;

    public Property()
    {
    }

    public Property(String streetAddress, String secondAddress, String city, String state, String listingType, int price, int bedrooms, float bathrooms,
                    String thumbnailLink, float squareFoot, float acreage, String propertyType, int yearBuilt,
                    int garageSpace, String propertyCode)
    {
        this.streetAddress = streetAddress;
        this.secondAddress = secondAddress;
        this.city = city;
        this.state = state;
        this.listingType = listingType;
        this.price = price;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.thumbnailLink = thumbnailLink;
        this.squareFoot = squareFoot;
        this.acreage = acreage;
        this.propertyType = propertyType;
        this.yearBuilt = yearBuilt;
        this.garageSpace = garageSpace;
        this.propertyCode = propertyCode;
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getStreetAddress()
    {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress)
    {
        this.streetAddress = streetAddress;
    }

    public String getCity()
    {
        return city;
    }

    public void setCity(String city)
    {
        this.city = city;
    }

    public String getState()
    {
        return state;
    }

    public void setState(String state)
    {
        this.state = state;
    }

    public int getPrice()
    {
        return price;
    }

    public void setPrice(int price)
    {
        this.price = price;
    }

    public int getBedrooms()
    {
        return bedrooms;
    }

    public void setBedrooms(int bedrooms)
    {
        this.bedrooms = bedrooms;
    }

    public float getBathrooms()
    {
        return bathrooms;
    }

    public void setBathrooms(float bathrooms)
    {
        this.bathrooms = bathrooms;
    }

    public String getThumbnailLink() { return thumbnailLink; }

    public void setThumbnailLink(String thumbnailLink) { this.thumbnailLink = thumbnailLink; }

    public void setPropertyCode(String propertyCode)
    {
        this.propertyCode = propertyCode;
    }

    public String getPropertyCode()
    {
        return propertyCode;
    }



    public float getSquareFoot() {
        return squareFoot;
    }

    public void setSquareFoot(float squareFoot) {
        this.squareFoot = squareFoot;
    }


    public float getAcreage() {
        return acreage;
    }

    public void setAcreage(float acreage) {
        this.acreage = acreage;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public int getYearBuilt() {
        return yearBuilt;
    }

    public void setYearBuilt(int yearBuilt) {
        this.yearBuilt = yearBuilt;
    }

    public int getGarageSpace() {
        return garageSpace;
    }

    public void setGarageSpace(int garageSpace) {
        this.garageSpace = garageSpace;
    }

    public String getListingType() {
        return listingType;
    }

    public void setListingType(String listingType) {
        this.listingType = listingType;
    }


    @Override
    public String toString()
    {
        return  "Property{" +
                "id=" + id +
                ", streetAddress=" + streetAddress + '\'' +
                ", secondAddress=" + secondAddress + '\'' +
                ", city=" + city + '\'' +
                ", state=" + state + '\'' +
                ", listingType=" + listingType + '\'' +
                ", price=" + price + '\'' +
                ", bedrooms=" + bedrooms + '\'' +
                ", bathrooms=" + bathrooms + '\'' +
                ", thumbnailLink=" + thumbnailLink + '\'' +
                ", squareFoot=" + squareFoot + '\'' +
                ", acreage=" + acreage + '\'' +
                ", propertyType=" + propertyType + '\'' +
                ", yearBuilt=" + yearBuilt + '\'' +
                ", garageSpace=" + garageSpace + '\'' +
                ", propertyCode=" + propertyCode + '\'' +
                "}";
    }

    public String getSecondAddress() {
        return secondAddress;
    }

    public void setSecondAddress(String secondAddress) {
        this.secondAddress = secondAddress;
    }
}
