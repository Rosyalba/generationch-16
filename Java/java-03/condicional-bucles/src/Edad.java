import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        System.out.println("Esta es la clase edad");

        //Determinar si una persona es mayor de edad;
        // tener la edad - pedir al usuario
        // condicional para saber si es menor de 18

        //let nombre = prompt("Escribe tu edad")

        Scanner escaner = new Scanner(System.in); // instaciar
        System.out.println("Escibe tu edad: ");
        int edad = escaner.nextInt();
        escaner.close(); //Cuando ya no se necesiten leer mas datos

        System.out.println(edad);
         // If else
        if (edad >= 18){
            System.out.println("Eres mayor de edad");
        } else {
            System.out.println("Eres mayor de edad");

        }

        //Operador ternario
       String resultado = (edad >= 18) ? "Eres mayor de edad " : "Eres menor de edad" ;
        System.out.println(resultado);



    }
}
