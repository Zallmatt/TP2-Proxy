import { ISujeto } from './ISujeto';
import { ProxySencillo } from './ProxySencillo';
import { Tarjeta } from './Tarjeta';
import { ProxySeguro } from './ProxySeguro';

test('Cuando_SeProxySencilloLlamaPeticion_Deberia_DevolverListaDeProductos', () => {
    let miProxy: ISujeto = new ProxySencillo();//En una misma variable se usa distintos metodos
    let devolver = miProxy.Peticion(1,"");//Se crea una variable que contenga la operacion a realizarse
    expect(devolver).toEqual(["+1000","-200","+50","-300"]);
});

test('Cuando_SeProxySencilloLlamaPeticion_Deberia_DevolverCantidadDeRecetasCocinando', () => {
    let miProxy: ISujeto = new ProxySencillo();//En una misma variable se usa distintos metodos
    let devolver = miProxy.Peticion(2,"");//Se crea una variable que contenga la operacion a realizarse
    expect(devolver).toBe("Pago Realizado");
});

it('Cuando_SeIntentaIngresarAClaseTarjeta_Deberia_NegarElAcceso', () => {
    let tarjeta: ISujeto = new Tarjeta();//En una misma variable se usa distintos metodos
    expect(() => tarjeta.Peticion(1,"")).toThrow('No se puede acceder directo sin pasar por el Proxy');
});

test('Cuando_SeIngresaAProxySeguro_Deberia_PedirContraseña', () => {
    let miProxy: ISujeto = new ProxySeguro();
    let devolver = miProxy.Peticion(1,"abc123");//Se crea una variable que contenga la operacion a realizarse con la contraseña solicitada
    expect(devolver).toEqual(["+1000","-200","+50","-300"]);
});

test('Cuando_SeIngresaMalContraseña_Deberia_MensajeDeError', () => {
    let miProxy: ISujeto = new ProxySeguro();
    expect(miProxy.Peticion(1,"a")).toBe("Acceso Denegado");//En caso de ser la contraseña incorrecta devuelve acceso denegado
});



