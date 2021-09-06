package com.realty.realtybrowser.service;

import com.realty.realtybrowser.domain.Property;
import com.realty.realtybrowser.exception.UserNotFoundException;
import com.realty.realtybrowser.repo.PropertyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
public class PropertyService {
    private final PropertyRepo propertyRepo;

    @Autowired
    public PropertyService(PropertyRepo propertyRepo)
    {
        this.propertyRepo = propertyRepo;
    }

    public Property addProperty(Property property)
    {
        property.setPropertyCode(UUID.randomUUID().toString());
        return propertyRepo.save(property);
    }

    public List<Property> findAllProperties()
    {
        return propertyRepo.findAll();
    }

    public Property findPropertyById(Long id)
    {
        return propertyRepo.findPropertyById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }


    public List<Property> findAllPropertiesByState(String state)
    {
        return propertyRepo.findPropertiesByState(state).orElseThrow(() -> new UserNotFoundException("Properties by state " + state + " were not found"));
    }

    public List<Property> findAllPropertiesByStateAndCity(String state, String city)
    {
        return propertyRepo.findPropertiesByStateAndCity(state, city).orElseThrow(() -> new UserNotFoundException("Properties by state " + state + " and city " + city + " were not found"));
    }


    public Property updateProperty(Property property)
    {
        return propertyRepo.save(property);
    }



    public void deleteProperty(Long id)
    {
        propertyRepo.deletePropertyById(id);
    }



}
