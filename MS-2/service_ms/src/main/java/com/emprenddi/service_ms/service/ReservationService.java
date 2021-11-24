package com.emprenddi.service_ms.service;

import com.emprenddi.service_ms.model.Reservation;
import com.emprenddi.service_ms.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    //add new Reservation
    public Reservation addReservation(Reservation reservation){
        return reservationRepository.save(reservation);
    }

    //find a reservation by id
    public Optional<Reservation> findReservationById(Long id){
        return reservationRepository.findReservationById(id);
    }

    //delete a reservation
    public boolean deleteReservationById(Long id){
        reservationRepository.deleteReservationById(id);
        return true;
    }

    //get contractor by reservations
    public List<Reservation> getReservationsByContractor(Long contractorId){
        return reservationRepository.findReservationByContractorId(contractorId);
    }

    //get reservations by specialist
    public List<Reservation> getReservationBySpecialist(Long specialistId){
        return reservationRepository.findReservationBySpecialistId(specialistId);
    }

    //get all reservations
    public List<Reservation> getAllReservations(){
        return  reservationRepository.findAll();
    }

    //update reservation
    public Reservation updateReservation(Reservation reservation){
        if(findReservationById(reservation.getId())==null){
            System.out.println("Don't exist the id"+reservation.getId());
            return null;
        }else{
            addReservation(reservation);
            return reservation;
        }
    }

    //calculate score
    public double calculateScoreBySpecialist(Long id){
        double score = 0;
        double sum = 0;
        List <Reservation> reservations = getReservationBySpecialist(id);
        for(int i = 0; i<reservations.size(); i++){
            sum = sum + reservations.get(i).getScore();
        }
        score = sum / reservations.size();
        return score;
    }

}
