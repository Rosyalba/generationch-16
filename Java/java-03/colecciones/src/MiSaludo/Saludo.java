package MiSaludo;

public class Saludo {
    public static void main(String[] args) {
        Saludo objSaludo; // declarar el objeto
        objSaludo = new Saludo(); //Crear el objeto con new
      public  objSaludo.saludar();//llama al metodo

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("Este es otro objeto -> " + objSaludo0.saludar);
        objSaludo.textoS = "Hola";
        System.out.println("objSaludo = " + objSaludo);



    }
}