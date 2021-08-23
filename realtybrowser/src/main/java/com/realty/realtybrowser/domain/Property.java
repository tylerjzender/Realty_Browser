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
    private String city;
    private String state;
    private int price;
    private int bedrooms;
    private float bathrooms;
    private String thumbnailLink;
    private String propertyCode;

    public Property()
    {
    }

    public Property(String streetAddress, String city, String state, int price, int bedrooms, float bathrooms, String thumbnailLink, String propertyCode)
    {
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.price = price;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.thumbnailLink = thumbnailLink;
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

    @Override
    public String toString()
    {
        return  "Property{" +
                "id=" + id +
                ", streetAddress=" + streetAddress + '\'' +
                ", city=" + city + '\'' +
                ", state=" + state + '\'' +
                ", price=" + price + '\'' +
                ", bedrooms=" + bedrooms + '\'' +
                ", bathrooms=" + bathrooms + '\'' +
                ", thumbnailLink=" + thumbnailLink + '\'' +
                ", propertyCode=" + propertyCode + '\'' +
                "}";
    }
}
