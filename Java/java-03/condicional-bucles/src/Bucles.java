import java.util.*; //Importar todas las clases del paquete util
public class Bucles {
    public static void main(String[] args) {
        System.out.println("Bucles");
        // let i=1
        //bucle controlado

        for(int i =0; i<10; i++){
            System.out.println(i);}

        //mientras la condicion sea true
        String condicion = "";
        Scanner sc = new Scanner(System.in);
        while(! Objects.equals(condicion, "Hola")){
        System.out.println("Saludame");
        condicion = sc.next();
    }
     //El do while es igual al while
        // el do while ejecuta la accion aunque sea una vez
        do {
            System.out.println("Saludame x2");
            condicion = sc.next();
        }    while(!Objects.equals(condicion, "Hola"));



    }
}
