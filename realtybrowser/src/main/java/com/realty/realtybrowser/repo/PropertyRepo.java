package com.realty.realtybrowser.repo;

import com.realty.realtybrowser.domain.Property;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PropertyRepo extends JpaRepository<Property, Long> {
    void deletePropertyById(Long id);

    Optional<Property> findPropertyById(Long id);
}
