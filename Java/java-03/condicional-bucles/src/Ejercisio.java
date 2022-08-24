public class Ejercisio {
    public static void main(String[] args) {
        System.out.println("Ejercisio");

        /* Problema 1
            La salida tiene que ser la siguiente:
            *
            **
            ***
            ****
            *****

            Problema 2
            *****
            ****
            ***
            **
            *

            Problema 3
            Pedirle al usuario la cantidad de estrellitas y la direccion
        */

        //EJERCICIO 1
        String [] estrellitas = {"*", "**", "***", "****", "*****"};
        for(String valor: estrellitas){
            System.out.println(valor);
        }

        String  estrellitas1 = " ";
        for(int i=0; i<5; i++){
            for (int j=0;  j<5; j++){
                System.out.println(estrellitas1);
                estrellitas1 += "*";
            }
        }

        //EJERCICIO

        String cantasteriscos2 = "*****";
        System.out.println("segundo");
        for (int j=1; j<=5; j++){
            String a=cantasteriscos2.substring(j);
            System.out.println(a);
        }



    }
}
