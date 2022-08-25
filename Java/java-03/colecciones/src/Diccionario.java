import java.util.*;
public class Diccionario {
    public static void main(String[] args) {

        /*
         *  Crear una clase llamada Diccionario
         *  Crear un programa en Java que realice lo siguiente:
         *  Crear un diccionario Español-Inglés, que contenga al menos 20 palabras (con traducción).
         *  Utilizar un objeto HashMap para almacenar los pares de palabras.
         *  Escoger al azar 5 palabras del mini diccionario.
         *  Pedir al usuario que teclee la palabra en inglés y que se imprima la traducción
         *
         *
         *
         * Extra:
         *  Pedir al usuario que teclee la traducción al inglés de cada una de las palabras y comprobará si son correctas.
         *  Al final debe mostrar por consola cuántas respuestas correctas e incorrectas tiene el usuario.

         * */

        Map<String, String> diccionario = new HashMap<String, String>();
        List<String> list=new ArrayList<String>();
        Map<String, String> palabras = new HashMap<String, String>();
        int x;


        diccionario.put("ventana","window");
        diccionario.put("lapiz","pencil");
        diccionario.put("pluma","pen");
        diccionario.put("esperanza","hope");
        diccionario.put("sueño","dream");
        diccionario.put("deseos","wishes" );
        diccionario.put("mesa","table");
        diccionario.put("pantalla","screen");
        diccionario.put("pastel","cake");
        diccionario.put("libro","book");
        diccionario.put("bota","boot");
        diccionario.put("pared","wall");
        diccionario.put("ladrillo","brick");
        diccionario.put("mochila", "bagpack");
        diccionario.put("reloj","watch");
        diccionario.put("lampara","lamp");
        diccionario.put("feliz", "happy");
        diccionario.put("conejo", "rabbit");
        diccionario.put("perro","dog");

        for (String i : diccionario.keySet()) {
            list.add(i);
        }
        for (int i = 0; i < 5 ; i++) {
            x=(int) (Math.random() * ((19 -0) + 0)) + 1;
            palabras.put(list.get(x),diccionario.get(list.get(x)));
        }
        System.out.println(palabras);

        Scanner sc = new Scanner(System.in);
        int correctas = 0;
        int incorrectas =0;

        for (String i : palabras.keySet()) {
            System.out.println("Traduce la palabra: " + i);
            String palabra = sc.nextLine();
            if (Objects.equals(palabra,palabras.get(i)) ){
                correctas++;
            }else{
                incorrectas++;
            }
        }

        System.out.println("Respuestas correctas:"+correctas + "\nIncorrectas:"+incorrectas);



        }
}
