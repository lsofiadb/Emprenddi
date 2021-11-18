package com.emprenddi.service_ms.service;

import com.emprenddi.service_ms.models.Reservation;
import com.emprenddi.service_ms.repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reserDAO;

    //add new Reservation
    public Reservation addReservation(Reservation reservation){
        return reserDAO.save(reservation);
    }

    //find a reservation by id
    public Optional<Reservation> findReservationById(Long id){
        return reserDAO.findReservationById(id);
    }

    //delete a reservation
    public boolean deleteReservationById(Long id){
        if(findReservationById(id)==null){
            System.out.println("Don't exist the id");
            return false;
        } else{
            reserDAO.deleteReservationById(id);
            return true;
        }
    }

    //get contractor reservations
    public List<Reservation> getReservationsByContractor(Long contractorId){
        return reserDAO.findReservationByContractorId(contractorId);
    }

    //get reservations by specialist
    public List<Reservation> getReservationBySpecialist(Long specialistId){
        return reserDAO.findReservationBySpecialistId(specialistId);
    }

    //get all reservations
    public List<Reservation> getAllReservations(){
        return  reserDAO.findAll();
    }

    //update reservation
    public boolean updateReservation(Reservation reservation){
        if(findReservationById(reservation.getId())==null){
            System.out.println("Don't exist the id"+reservation.getId());
            return false;
        }else{
            addReservation(reservation);
            return true;
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
