package com.rsa.j_interface;

import java.util.ArrayList;
import java.util.List;

public class EjemploTest {
    private static String Hola;

    public static void main(String[] args) {
        System.out.println("Test.CONV = " + Test.CONV);
        System.out.println("Prueba.CONV = " + Prueba.CONV);
        Prueba p = new Prueba();
        System.out.println("p = " + p.CONV);

        Test ts= new Prueba(); //Instancia tipo referencia
        ts.metodo1(3);
       // ts.metodo2("hola");
        System.out.println("ts.metodo2(\"Hola\") = " + ts.metodo2("Hola"));
        p.metodoPropio();
Test1 s1 = new Prueba();
s1.metodo01();
        System.out.println("s1.metodo02() = " + s1.metodo02());
s1.metodo02();




    }
}
