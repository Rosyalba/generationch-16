package com.rsa.h_abstracta;

public class Circulo extends FigurasGeometricas {
    private float radio;

    @Override
    public float area() {
        return(float) (Math.PI*Math.pow(radio, 2));
    }

    @Override
    public void setRadio(float v) {

    }

    public Circulo() {
    }

    public Circulo(float radio) {
        this.radio = radio;
    }
}
