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
    private String roadAddress;
    private String city;
    private String state;
    private int price;
    private int bedrooms;
    private float bathrooms;
    private String propertyCode;

    public Property()
    {
    }

    public Property(String roadAddress, String city, String state, int price, int bedrooms, float bathrooms, String propertyCode)
    {
        this.roadAddress = roadAddress;
        this.city = city;
        this.state = state;
        this.price = price;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
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

    public String getRoadAddress()
    {
        return roadAddress;
    }

    public void setRoadAddress(String roadAddress)
    {
        this.roadAddress = roadAddress;
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
                ", roadAddress=" + roadAddress + '\'' +
                ", city=" + city + '\'' +
                ", state=" + state + '\'' +
                ", price=" + price + '\'' +
                ", bedrooms=" + bedrooms + '\'' +
                ", bathrooms=" + bathrooms + '\'' +
                ", propertyCode=" + propertyCode + '\'' +
                "}";
    }
}
