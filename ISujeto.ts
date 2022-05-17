//Clase Interfaz
//En esta clase defino una interfaz en comun para Sujeto Real y el Proxy
export interface ISujeto{
    Peticion(pOpcion: number, password:string): any;
    //Es una operacion del Sujeto que es enviada a traves del Proxy
}