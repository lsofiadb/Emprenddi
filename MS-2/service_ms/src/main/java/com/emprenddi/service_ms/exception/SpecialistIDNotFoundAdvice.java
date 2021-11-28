package com.emprenddi.service_ms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
@ResponseBody
public class SpecialistIDNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(SpecialistIDNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String EntityNotFoundAdvice(SpecialistIDNotFoundException ex){
        return ex.getMessage();
    }
}
