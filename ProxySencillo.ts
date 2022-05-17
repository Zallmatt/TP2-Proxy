
import { ISujeto } from "./ISujeto";
import { Tarjeta } from './Tarjeta';

//Clase Proxy

export class ProxySencillo implements ISujeto{

    private pTarjeta: Tarjeta;//Se crea una variable de tipo Tarjeta(Objeto Real)

    Peticion(pOpcion: number, password:string): any {
        if (this.pTarjeta == null){//Si la tarjeta no esta creada, se la crea o inicializa
            console.log("Activando el sujeto")
            this.pTarjeta = new Tarjeta();
        }

        if(pOpcion==1){//En caso de que cliente quiera ver sus movimientos elige la opcion 1
            return this.pTarjeta.ultimosMovimientos();//Devuelve la lista de las ultimas transacciones
        }
        if(pOpcion==2){
            return this.pTarjeta.OperacionRealizada();//En caso de que desea pagar se utiliza la opcion 2
        }
    }
    

}