public class EjemploVariables {
    public static void main(String[] args) {
       String nombre = "Rosy";

       String saludo = "hola esto es un ejemplo de variables";

        System.out.println(saludo + "" + nombre);
        char espacio = '\u0021' ;
        char caracter = 'f';

        System.out.println("espacio = " + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("char corresponde en bits : " + Character.SIZE);
        System.out.println("char valor maximo: " + Character.MAX_VALUE );
        System.out.println("char valor minimo: " + Character.MIN_VALUE);


        int numeroEntero =2;
        System.out.println("numeroEntero = " + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits : " + Integer.SIZE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE );
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);


        float numeroFloat = 0.00000000015f; // 1.5e-10f
        System.out.println("numeroFloat = " + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits : " + Float.SIZE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE );
        System.out.println("float valor minimo: " + Float.MIN_VALUE);

        double numeroDouble = 3.444567E39;
        System.out.println("numeroDouble = " + numeroDouble );
        System.out.println("double corresponde en byte: " + Double.BYTES);
        System.out.println("double corresponde en bits : " + Double.SIZE);
        System.out.println("double valor maximo: " + Double.MAX_VALUE );
        System.out.println("double valor minimo: " + Double.MIN_VALUE);

        boolean ValorBoolean = (3-2 == 1);
        System.out.println("ValorBoolean = " + ValorBoolean);

        long valorLong = 1;
        System.out.println("valorLong = " + valorLong);
        System.out.println("long corresponde en byte: " + Long.BYTES);
        System.out.println("long corresponde en bits : " + Long.SIZE);
        System.out.println("long valor maximo: " + Long.MAX_VALUE );
        System.out.println("long valor minimo: " + Long.MIN_VALUE);

        short valorShort = 1;
        System.out.println("valorShort = " + valorShort);
        System.out.println("short corresponde en byte: " + Short.BYTES);
        System.out.println("short corresponde en bits : " + Short.SIZE);
        System.out.println("short valor maximo: " + Short.MAX_VALUE );
        System.out.println("short valor minimo: " + Short.MIN_VALUE);

        byte valorByte = 1;
        System.out.println("valorByte = " + valorByte);
        System.out.println("byte corresponde en byte: " + Byte.BYTES);
        System.out.println("byte corresponde en bits : " + Byte.SIZE);
        System.out.println("byte valor maximo: " + Byte.MAX_VALUE );
        System.out.println("byte valor minimo: " + Byte.MIN_VALUE);

        var miVar = "2";
        System.out.println("miVar = " + miVar);



    }
}
