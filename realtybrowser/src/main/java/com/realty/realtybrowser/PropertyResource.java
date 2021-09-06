package com.realty.realtybrowser;

import com.realty.realtybrowser.domain.Property;
import com.realty.realtybrowser.service.PropertyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/property")
public class PropertyResource {
    private final PropertyService propertyService;

    public PropertyResource(PropertyService propertyService)
    {
        this.propertyService = propertyService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Property>> getAllProperties()
    {
        List<Property> properties = propertyService.findAllProperties();
        return new ResponseEntity<>(properties, HttpStatus.OK);
    }

    @GetMapping("/find/id/{id}")
    public ResponseEntity<Property> getPropertyById (@PathVariable("id") Long id)
    {
        Property property = propertyService.findPropertyById(id);
        return new ResponseEntity<>(property, HttpStatus.OK);
    }


    @GetMapping("/find/state/{state}")
    public ResponseEntity<List<Property>> getPropertiesByState (@PathVariable("state") String state)
    {
        List<Property> properties = propertyService.findAllPropertiesByState(state);
        return new ResponseEntity<>(properties, HttpStatus.OK);
    }

    @GetMapping("/find/state/{state}/city/{city}")
    public ResponseEntity<List<Property>> getPropertiesByStateAndCity (@PathVariable("state") String state, @PathVariable("city") String city)
    {
        List<Property> properties = propertyService.findAllPropertiesByStateAndCity(state, city);
        return new ResponseEntity<>(properties, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Property> addProperty(@RequestBody Property property)
    {
        Property newProperty = propertyService.addProperty(property);
        return new ResponseEntity<>(newProperty, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Property> updateProperty(@RequestBody Property property)
    {
        Property updateProperty = propertyService.updateProperty(property);
        return new ResponseEntity<>(updateProperty, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProperty(@PathVariable("id") Long id)
    {
        propertyService.deleteProperty(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }




}
