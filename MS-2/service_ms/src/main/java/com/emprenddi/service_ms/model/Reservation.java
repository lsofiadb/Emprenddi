package com.emprenddi.service_ms.model;

import org.springframework.data.annotation.Id;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;


public class Reservation {
    @Id
    private Long id;
    private Long contractorId;
    private Long specialistId;
    private Date initialDate;
    private Date finalDate;
    private double score;

    //constructor
    public Reservation(Long id, Long contractorId, Long specialistId, Date initialDate, Date finalDate, double score) {
        this.id = id;
        this.contractorId = contractorId;
        this.specialistId = specialistId;
        this.initialDate = initialDate;
        this.finalDate = finalDate;
        this.score = score;
    }

    //getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getContractorId() {
        return contractorId;
    }

    public void setContractorId(Long contractorId) {
        this.contractorId = contractorId;
    }

    public Long getSpecialistId() {
        return specialistId;
    }

    public void setSpecialistId(Long specialistId) {
        this.specialistId = specialistId;
    }

    public Date getInitialDate() {
        return initialDate;
    }

    public void setInitialDate(Date initialDate) {
        this.initialDate = initialDate;
    }

    public Date getFinalDate() {
        return finalDate;
    }

    public void setFinalDate(Date finalDate) {
        this.finalDate = finalDate;
    }
    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

}
