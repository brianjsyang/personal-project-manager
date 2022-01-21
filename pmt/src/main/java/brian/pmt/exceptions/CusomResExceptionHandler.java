package brian.pmt.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * ControllerAdvice: Match all exception with exception handler, giving global response
 */
@ControllerAdvice
@RestController
public class CusomResExceptionHandler extends ResponseEntityExceptionHandler {
    
    @ExceptionHandler
    public final ResponseEntity<Object> handleIdException(IdException ex, WebRequest req) {
        IdExceptionRes exceptionRes = new IdExceptionRes(ex.getMessage());
        return new ResponseEntity<>(exceptionRes, HttpStatus.BAD_REQUEST);
    }
}
