package MetPrincipal;

import Menu.MenuOp;
import Menu.MenuOp;
import MiSaludo.Saludo;

import java.util.*;

public class EjecutaT {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
MenuOp menuOp = new MenuOp();
menuOp.menu();

        System.out.println("Elija una opción -> ");
int op = sc.nextInt();
switch (op){
    case 1:
        Saludo s = new Saludo();
      //  s.saludar0();
       // s.saludar();
        break;

    case 2:
        
    case 3:
    case 4:
    default:

}
    }
}
