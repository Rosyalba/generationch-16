package com.rsa.excepcion;

public class ErrorFisicoException extends Exception{
    public ErrorFisicoException(Exception ex) {
        super("\t\t\t <--Ocurrio un error Físico --> ", ex);
    }
}
