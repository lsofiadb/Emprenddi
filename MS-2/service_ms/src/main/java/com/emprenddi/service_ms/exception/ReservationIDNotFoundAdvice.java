package com.emprenddi.service_ms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
@ResponseBody
public class ReservationIDNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ReservationIDNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String EntityNotFoundAdvice(ReservationIDNotFoundException ex){
        return ex.getMessage();
    }
}
