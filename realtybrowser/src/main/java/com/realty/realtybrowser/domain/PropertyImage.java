package com.realty.realtybrowser.domain;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public  class PropertyImage implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Long propertyId;
    private String imageLink;
    private String propertyImageCode;

    public PropertyImage()
    {
    }

    public PropertyImage(Long propertyId, String imageLink, String propertyImageCode)
    {
        this.propertyId = propertyId;
        this.imageLink = imageLink;
        this.propertyImageCode = propertyImageCode;
    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public Long getPropertyId() { return propertyId; }

    public void setPropertyId(Long propertyId) { this.propertyId = propertyId; }

    public String getImageLink() { return imageLink; }

    public void setContent(String imageLink ) { this.imageLink = imageLink; }

    public void setPropertyCode(String propertyImageCode) { this.propertyImageCode = propertyImageCode; }

    public String getPropertyImageCode() { return propertyImageCode; }

    @Override
    public String toString()
    {
        return  "PropertyImage{" +
                "id=" + id +
                ", propertyId=" + propertyId + '\'' +
                ", imageLink=" + imageLink + '\'' +
                ", propertyImageCode=" + propertyImageCode + '\'' +
                "}";
    }
}
