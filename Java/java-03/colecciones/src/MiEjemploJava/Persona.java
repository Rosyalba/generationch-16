package MiEjemploJava;

public class Persona {
//Definir clase Persona
    //nombre: String, edad: int, nss: int
    //caminar (): void, dormir (); void

   public String nombre = "Karen";
   public int edad = 24;
   public int nss = 123;

    public Persona(int edad, int nss) {
        this.edad = edad;
        this.nss = nss;
    }

    public Persona(String nombre) {
        this.nombre = nombre;
    }

    void caminar() {
        System.out.println("Caminando");
    }


    void dormir() {
        System.out.println("Durmiendo");
    }

}
