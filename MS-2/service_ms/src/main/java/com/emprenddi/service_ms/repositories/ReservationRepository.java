package com.emprenddi.service_ms.repositories;

import com.emprenddi.service_ms.models.Reservation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends MongoRepository<Reservation, Long> {

    Optional <Reservation> findReservationById(Long id);
    List<Reservation> findReservationByContractorId(Long contractorId);
    List<Reservation> findReservationBySpecialistId(Long specialistId);
    void deleteReservationById(Long id);
    void deleteServiceById(Long id);
}
