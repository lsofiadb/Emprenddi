package com.emprenddi.service_ms.service;

import com.emprenddi.service_ms.model.Reservation;
import com.emprenddi.service_ms.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository reservationRepository;

    //add a new Reservation
    public Reservation addReservation(Reservation reservation){
        return reservationRepository.save(reservation);
    }

    //find a reservation by id
    public Optional<Reservation> findReservationById(Long id){
        return reservationRepository.findReservationById(id);
    }

    //delete a reservation
    public void deleteReservationById(Long id){
        reservationRepository.deleteReservationById(id);
    }

    //get reservations by contractor
    public List<Reservation> getReservationsByContractor(Long contractorId){
        return reservationRepository.findReservationByContractorId(contractorId);

    }

    //get reservations by specialist
    public List<Reservation> getReservationsBySpecialist(Long specialistId){
        return reservationRepository.findReservationBySpecialistId(specialistId);
    }

    //get all reservations
    public List<Reservation> getAllReservations(){
        return  reservationRepository.findAll();
    }

    //update reservation
    public Reservation updateReservation(Reservation reservation){
        addReservation(reservation);
        return reservation;
    }

    //calculate score
    public double calculateScoreBySpecialist(Long id){
        double score = 0;
        double sum = 0;
        List <Reservation> reservations = getReservationsBySpecialist(id);
        for(int i = 0; i<reservations.size(); i++){
            sum = sum + reservations.get(i).getScore();
        }
        score = sum / reservations.size();
        return score;
    }

    //calculate hours
    public ArrayList<Long> calculateTimeByService(Reservation reservation) {
        ArrayList <Long> time = new ArrayList<>();
        long diff = reservation.getFinalDate().getTime() - reservation.getInitialDate().getTime();
        long seconds = diff / 1000;
        long minutes  = diff / (60 * 1000);
        long hours = diff / (60 * 60 * 1000);
        long days = diff /(24 * 60 * 60 *1000);
        System.out.println("Time in seconds: " + seconds + " seconds.");
        System.out.println("Time in minutes: " + minutes + " minutes.");
        System.out.println("Time in hours: " + hours + " hours.");
        System.out.println("Time in days: " + days + " days");
        time.add(0, days);
        time.add(1,hours);
        time.add(2,minutes);
        time.add(3,seconds);
        return time;
    }

    public int calculateListSize(){
        int size = 0;
        size = getAllReservations().size();
        return size;
    }
}
