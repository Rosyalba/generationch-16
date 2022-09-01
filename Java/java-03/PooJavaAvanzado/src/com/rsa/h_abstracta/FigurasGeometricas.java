package com.rsa.h_abstracta;

public abstract class FigurasGeometricas {
    private String nombre;

    public FigurasGeometricas() {

    }

    public abstract float area();

    public FigurasGeometricas(String nombre) {
        this.nombre = nombre;
    }

    @Override
public String toString(){
    return nombre  = nombre + "area -> " + area();
}
    public abstract void setRadio(float v);
}
