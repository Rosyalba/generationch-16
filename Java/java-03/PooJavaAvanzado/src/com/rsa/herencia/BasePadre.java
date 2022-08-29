
package com.rsa.herencia;

import java.util.Scanner;

public class BasePadre {
    private int a;
    private double b;
    private String c;

    public  BasePadre(){


    }

    public void visualizarA(){

    }

    public void visualizarABC(){

    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
    public void ejecutar(){
        BasePadre basePadre = new BasePadre();
        Scanner sc = new Scanner(System.in);
        System.out.println("Ingrese el valor de a (es entero)");
        int a = sc.nextInt();
        basePadre.setA(a);
        System.out.println("Ingrese el valor de b (es double)");
        double b= sc.nextDouble();
        basePadre.setB(b);
        System.out.println("Ingrese el valor de c(es string)");
        String c = sc.next();
        basePadre.setC(c);
        basePadre.visualizarA();
        basePadre.visualizarABC();
    }
}