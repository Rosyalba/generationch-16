package com.rsa.h_abstracta;

public class EjemploFiguras {
    public static void main(String[] args) {
        Triangulo t = new Triangulo(5,10);
        t.setBase(5);
        t.setAltura(2);
        System.out.println( t);

        Circulo c = new Circulo(5);
        c.setRadio(15.5f);
        System.out.println(c);

    }
}
