package com.emprenddi.service_ms.repository;

import com.emprenddi.service_ms.model.Reservation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ReservationRepository extends MongoRepository<Reservation, Long> {

    Optional <Reservation> findReservationById(Long id);
    List<Reservation> findReservationsByContractorId(Long contractorId);
    List<Reservation> findReservationBySpecialistId(Long specialistId);
    void deleteReservationById(Long id);
}
