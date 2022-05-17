import { Tarjeta } from './Tarjeta';
import { ISujeto } from "./ISujeto";

//Clase Proxy de Proteccion

export class ProxySeguro implements ISujeto{
    
    private pTarjeta:Tarjeta;//Se crea una variable de tipo Tarjeta(Objeto Real)
    
    Peticion(pOpcion: number, password:string): any {
        if(password=="abc123"){//En este caso se pide una contraseña para poder acceder 
            if (this.pTarjeta == null){//Si la tarjeta no esta creada, se la crea o inicializa
                console.log("Activando el sujeto")
                this.pTarjeta = new Tarjeta();
            }
            
            if(pOpcion==1){//En caso de que cliente quiera ver sus movimientos elige la opcion 1
                return this.pTarjeta.ultimosMovimientos();
            }
            if(pOpcion==2){//En caso de que desea pagar se utiliza la opcion 2
                return this.pTarjeta.OperacionRealizada();
            }
        }else{//En caso de ser incorrecta se restinge el acceso
            return "Acceso Denegado"
        }
    }

}