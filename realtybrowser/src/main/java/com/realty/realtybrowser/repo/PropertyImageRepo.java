package com.realty.realtybrowser.repo;

import com.realty.realtybrowser.domain.PropertyImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PropertyImageRepo extends JpaRepository<PropertyImage, Long> {
    void deletePropertyImageById(Long id);

    Optional<PropertyImage> findPropertyImageById(Long id);
}
