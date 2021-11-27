package com.emprenddi.service_ms.controller;

import com.emprenddi.service_ms.exception.ContractorIDNotFoundException;
import com.emprenddi.service_ms.exception.ReservationIDNotFoundException;
import com.emprenddi.service_ms.exception.SpecialistIDNotFoundException;
import com.emprenddi.service_ms.model.Reservation;
import com.emprenddi.service_ms.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
        if(reservationService.getReservationsByContractor(contractorId).isEmpty()) {
            throw new ContractorIDNotFoundException("El contratista no ha realizado reservas: "+HttpStatus.NOT_FOUND);
        }
        else{
            return reservationService.getReservationsByContractor(contractorId);
        }
    }

    @GetMapping("/getReservationsBySpecialist/{specialistId}")
    List<Reservation> getReservationsBySpecialist(@PathVariable Long specialistId){
        if(reservationService.getReservationsBySpecialist(specialistId).isEmpty()) {
            throw new SpecialistIDNotFoundException("No hay reservas para el especialista con ID "+specialistId+ ", "+HttpStatus.NOT_FOUND);
        } else{
            return reservationService.getReservationsBySpecialist(specialistId);
        }
    }

    @GetMapping("/getReservationById/{reservationID}")
    Optional<Reservation> getReservationById(@PathVariable Long reservationID){
        return reservationService.findReservationById(reservationID);
    }

    @GetMapping("/getAllReservations")
    List <Reservation> getAllReservations(){
        return reservationService.getAllReservations();
    }

    @DeleteMapping("/deleteReservationById/{id}")
    String deleteReservation(@PathVariable Long id){
        if(reservationService.findReservationById(id).isEmpty()){
            throw new ReservationIDNotFoundException("No se encontró la reserva con el ID "+id+" , "+HttpStatus.NOT_FOUND);
        }else{
            reservationService.deleteReservationById(id);
            return "Se eliminó la reserva con id "+id+" , "+ HttpStatus.ACCEPTED;
        }
    }

    @PutMapping("/updateReservation")
    Reservation updateReservation(@RequestBody Reservation reservation){
        if(reservationService.findReservationById(reservation.getId()).isEmpty()){
            throw new ReservationIDNotFoundException("No se encontro la reserva con el ID "+reservation.getId()+", "+HttpStatus.NOT_FOUND);
        }else{
            return reservationService.updateReservation(reservation);
        }
    }

    @GetMapping("/getScoreBySpecialist/{specialistId}")
    double getScoreBySpecialist(@PathVariable Long specialistId) {
        if (reservationService.getReservationsBySpecialist(specialistId).isEmpty()) {
            throw new SpecialistIDNotFoundException("No hay reservas para el especialista con ID " + specialistId + ", " + HttpStatus.NOT_FOUND);
        } else {
            return reservationService.calculateScoreBySpecialist(specialistId);
        }
    }
}
