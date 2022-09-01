package com.rsa.h_abstracta;

public class Circulo extends FigurasGeometricas {
    private float radio;

    @Override
    public float area() {
        return(float) (Math.PI*Math.pow(radio, 2));
    }

    @Override
    public void setRadio(float radio) {
        this.radio = radio;

    }

    public Circulo() {
        super("Circulo");
        this.radio = radio;
    }

    public float getRadio(){
        return radio;
    }

    public Circulo(float radio) {
        super();
        this.radio = radio;
    }
}
