package com.realty.realtybrowser;

import com.realty.realtybrowser.domain.Property;
import com.realty.realtybrowser.domain.PropertyImage;
import com.realty.realtybrowser.service.PropertyImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/propertyImage")
public class PropertyImageResource {
    private final PropertyImageService propertyImageService;

    public PropertyImageResource(PropertyImageService propertyImageService)
    {
        this.propertyImageService = propertyImageService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<PropertyImage>> getAllPropertyImages ()
    {
        List<PropertyImage> propertyImages = propertyImageService.findAllPropertyImages();
        return new ResponseEntity<>(propertyImages, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<PropertyImage> getPropertyImageById (@PathVariable("id") Long id)
    {
        PropertyImage propertyImage = propertyImageService.findPropertyImageById(id);
        return new ResponseEntity<>(propertyImage, HttpStatus.OK);
    }

    @GetMapping("/find/propertyId/{propertyId}")
    public ResponseEntity<List<PropertyImage>> getPropertyImagesByPropertyId (@PathVariable("propertyId") Long propertyId)
    {
        List<PropertyImage> propertyImages = propertyImageService.findPropertyImagesByPropertyId(propertyId);
        return new ResponseEntity<>(propertyImages, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<PropertyImage> addPropertyImage(@RequestBody PropertyImage propertyImage)
    {
        PropertyImage newPropertyImage = propertyImageService.addPropertyImage(propertyImage);
        return new ResponseEntity<>(newPropertyImage, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<PropertyImage> updatePropertyImage(@RequestBody PropertyImage propertyImage)
    {
        PropertyImage updatePropertyImage = propertyImageService.updatePropertyImage(propertyImage);
        return new ResponseEntity<>(updatePropertyImage, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePropertyImage(@PathVariable("id") Long id)
    {
        propertyImageService.deletePropertyImage(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
