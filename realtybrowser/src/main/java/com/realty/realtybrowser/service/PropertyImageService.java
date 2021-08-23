package com.realty.realtybrowser.service;

import com.realty.realtybrowser.domain.PropertyImage;
import com.realty.realtybrowser.exception.UserNotFoundException;
import com.realty.realtybrowser.repo.PropertyImageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
public class PropertyImageService {
    private final PropertyImageRepo propertyImageRepo;

    @Autowired
    public PropertyImageService(PropertyImageRepo propertyImageRepo) {
        this.propertyImageRepo = propertyImageRepo;
    }

    public PropertyImage addPropertyImage(PropertyImage propertyImage)
    {
        propertyImage.setPropertyCode(UUID.randomUUID().toString());
        return propertyImageRepo.save(propertyImage);
    }

    public List<PropertyImage> findAllPropertyImages()
    {
        return propertyImageRepo.findAll();
    }

    public PropertyImage updatePropertyImage(PropertyImage propertyImage)
    {
        return propertyImageRepo.save(propertyImage);
    }

    public PropertyImage findPropertyImageById(Long id)
    {
        return propertyImageRepo.findPropertyImageById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public  void deletePropertyImage(Long id)
    {
        propertyImageRepo.deletePropertyImageById(id);
    }

}
