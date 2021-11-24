package com.emprenddi.service_ms.controller;

import com.emprenddi.service_ms.exception.ContractorIDNotFoundException;
import com.emprenddi.service_ms.exception.ReservationIDNotFoundException;
import com.emprenddi.service_ms.model.Reservation;
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

    @GetMapping("/getReservationsByContractor/{contractorId}")
    List <Reservation> getReservationsByContractor(@PathVariable Long contractorId){
        if(contractorId==null){
            throw new ContractorIDNotFoundException("El ID tiene valor : " + contractorId);
        }else if(reservationService.getReservationsByContractor(contractorId).isEmpty()) {
            throw new ContractorIDNotFoundException("El contratista no ha realizado reservas");
        }
        else{
            return reservationService.getReservationsByContractor(contractorId);
        }

    }

    @GetMapping("/getAllReservations")
    List <Reservation> getAllReservations(){
        return reservationService.getAllReservations();
    }

    @DeleteMapping("/deleteReservationById/{id}")
    Boolean deleteReservation(@PathVariable Long id){
        if(reservationService.findReservationById(id)==null){
            throw new ReservationIDNotFoundException("No se encontró la reserva con el ID "+id);
        }else{
            return reservationService.deleteReservationById(id);
        }
    }

    @PutMapping("/updateReservation")
    Reservation updateReservation(@RequestBody Reservation reservation){
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
