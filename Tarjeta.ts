import { ISujeto } from './ISujeto';

//SujetoReal
export class Tarjeta implements ISujeto{
    transacciones=[];

    Peticion(pOpcion: number): any {
        throw new Error('No se puede acceder directo sin pasar por el Proxy');
    }

    //Sobreescribi el metodo peticion de la clase Tarjeta para que no pueda ser utilizada directamente, sin pasar por el Proxy
    //Estos metodos ponerlos en privado, pero se rompe 

    public ultimosMovimientos():string[]{//Funcion que devuelve los ultimos movimientos
        this.transacciones=["+1000","-200","+50","-300"];
        return this.transacciones;//Devuelve la lista de las ultimas transacciones
    }

    public OperacionRealizada():string{//Funcion que informa del pago realizado
        return "Pago Realizado";
    }

    public mensajeError():string{//En caso de tener contraseña y ser incorrecta devuelve mensaje de error
        return "Acceso Denegado"
    }
}