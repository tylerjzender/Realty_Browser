package com.realty.realtybrowser.repo;

import com.realty.realtybrowser.domain.Property;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

public interface PropertyRepo extends JpaRepository<Property, Long> {

    void deletePropertyById(Long id);

    Optional<Property> findPropertyById(Long id);

    Optional<List<Property>> findPropertiesByState(String state);

    Optional<List<Property>> findPropertiesByStateAndCity(String state, String city);

}
