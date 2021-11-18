package com.emprenddi.service_ms.controller;

import com.emprenddi.service_ms.models.Reservation;
import com.emprenddi.service_ms.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservationController")
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @PostMapping("/addReservation")
    Reservation addReservation(@RequestBody Reservation reservation){
        return reservationService.addReservation(reservation);
    }

    @GetMapping("/getReservationByContractor/{contractorId}")
    List <Reservation> getReservationsByContractor(@PathVariable Long contractorId){
        return reservationService.getReservationsByContractor(contractorId);
    }

    @GetMapping("/getAllReservations")
    List <Reservation> getAllReservations(){
        return reservationService.getAllReservations();
    }

    @DeleteMapping("/deleteReservationById/{id}")
    Boolean addReservation(@PathVariable Long id){
        return reservationService.deleteReservationById(id);
    }

    @PutMapping("/updateReservation")
    Boolean updateReservation(@RequestBody Reservation reservation){
        return reservationService.updateReservation(reservation);
    }

    @GetMapping("/getReservationsBySpecialist/{specialistId}")
    List<Reservation> getReservationBySpecialist(@PathVariable Long specialistId){
        return reservationService.getReservationBySpecialist(specialistId);
    }

    @GetMapping("/getScoreBySpecialist/{specialistId}")
    double getScoreBySpecialist(@PathVariable Long specialistId){
        return reservationService.calculateScoreBySpecialist(specialistId);
    }
}
