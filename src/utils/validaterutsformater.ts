import Swal from "sweetalert2";

export const FormateaRut:any = {
    'cl':(rut:string)=>{
        return formaretrutcl(rut);
    },
    'pe':(rut:string)=>{

        const regex = /^[0-9]{0,11}$/;
        if (!regex.test(rut)) {
            return rut.replace(/[^0-9]/g, '');
        }

        return rut;
    },
    'co':(nit:string)=>{
        return formatearNitCo(nit);
    },
    '':(rut:string)=>{
        return formaretrutcl(rut);
    }
}

const formaretrutcl = (actual:string = '')=>{
    if (actual !== undefined) {
      if (actual != "" && actual.length > 1) {
        var sinPuntos = actual.replace(/\./g, "");
        var sinEspacios = sinPuntos.replace(/\s/g, "");
        var actualLimpio = sinEspacios.replace(/-/g, "");
        
        // Elimina ceros al inicio
        actualLimpio = actualLimpio.replace(/^0+/, '');

        // Si después de limpiar queda vacío, retorna original
        if (actualLimpio.length < 2) {
          return actual;
        }

        var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        var rutPuntos = "";
        var i = 0;
        var j = 1;
        for (i = inicio.length - 1; i >= 0; i--) {
            var letra = inicio.charAt(i);
            rutPuntos = letra + rutPuntos;
            if (j % 3 == 0 && j <= inicio.length - 1) {
                rutPuntos = "." + rutPuntos;
            }
            j++;
        }
        var dv = actualLimpio.substring(actualLimpio.length - 1);
        rutPuntos = rutPuntos + "-" + dv;
        return rutPuntos;
      }
    }
    return actual;
}


export const ValidateRut:any = {
    'cl':(rut:string)=>{
        return validaRut(rut);
    },
    'pe':(rut:string)=>{

       if( rut.length > 11 || rut.length < 11 ){
          Swal.fire({
            text: "Ruc inválido",
            title: "El RUC ingresado es inválido",
            icon: "warning",
          });
          return false;
       }

       return true;

    },
    'co':(nit:string)=>{
        return validaNitCo(nit);
    },
    '':(rut:string)=>{
        return validaRut(rut);
    }
}

export const ValidateDoc:any = {
  'cl':(rut:string)=>{
      return validaRut(rut);
  },
  'pe':(rut:string)=>{

      if( rut.length == 8 ){
        return true;
      }

      if( rut.length < 8  ){
        Swal.fire({
          text: "Documento inválido",
          title: "El documento ingresado es inválido",
          icon: "warning",
        });
        return false;
      }

     if( rut.length > 11 || rut.length < 11 ){
        Swal.fire({
          text: "Documento inválido",
          title: "El documento ingresado es inválido",
          icon: "warning",
        });
        return false;
     }

     return true;

  },
  'co':(nit:string)=>{
      return validaNitCo(nit);
  },
  '':(rut:string)=>{
      return validaRut(rut);
  }
}


export const validaRut = (obj:string) => {
    var largo, crut, rut, dv, i, suma, mul, res, dvi;
    var tmpstr = "";
    var intlargo = obj;
    if (intlargo.length > 0) {
      crut = obj;
      largo = crut.length;
      if (largo < 2) {
        return false;
      }
      for (i = 0; i < crut.length; i++)
        if (
          crut.charAt(i) != " " &&
          crut.charAt(i) != "." &&
          crut.charAt(i) != "-"
        ) {
          tmpstr = tmpstr + crut.charAt(i);
        }
      rut = tmpstr;
      crut = tmpstr;
      largo = crut.length;
  
      if (largo > 2) rut = crut.substring(0, largo - 1);
      else rut = crut.charAt(0);
  
      dv = crut.charAt(largo - 1);
  
      if (rut == null || dv == null) return false;
  
      var dvr = "0";
      suma = 0;
      mul = 2;
  
      for (i = rut.length - 1; i >= 0; i--) {
        //@ts-ignore
        suma = suma + rut?.charAt(i) * mul;
        if (mul == 7) mul = 2;
        else mul++;
      }
  
      res = suma % 11;
      if (res == 1) dvr = "k";
      else if (res == 0) dvr = "0";
      else {
        dvi = 11 - res;
        dvr = dvi + "";
      }
  
      if (dvr != dv.toLowerCase()) {
        Swal.fire({
          text: "Rut inválido",
          title: "El RUT ingresado es inválido",
          icon: "warning",
        });
        return false;
      }
      return true;
    }
};

const formatearNitCo = (actual: string = '') => {
    if (actual !== undefined && actual !== "") {
        var sinPuntos = actual.replace(/\./g, "");
        var sinEspacios = sinPuntos.replace(/\s/g, "");
        var actualLimpio = sinEspacios.replace(/-/g, "");

        actualLimpio = actualLimpio.replace(/[^0-9]/g, '');

        if (actualLimpio.length < 2) {
            return actual;
        }

        if (actualLimpio.length > 10) {
            actualLimpio = actualLimpio.substring(0, 10);
        }

        var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        var nitPuntos = "";
        var i = 0;
        var j = 1;
        for (i = inicio.length - 1; i >= 0; i--) {
            var letra = inicio.charAt(i);
            nitPuntos = letra + nitPuntos;
            if (j % 3 == 0 && j <= inicio.length - 1) {
                nitPuntos = "." + nitPuntos;
            }
            j++;
        }
        var dv = actualLimpio.substring(actualLimpio.length - 1);
        nitPuntos = nitPuntos + "-" + dv;
        return nitPuntos;
    }
    return actual;
};

const validaNitCo = (nit: string) => {
    if (!nit || nit.length === 0) {
        return false;
    }

    var tmpstr = "";
    for (var i = 0; i < nit.length; i++) {
        if (nit.charAt(i) != " " && nit.charAt(i) != "." && nit.charAt(i) != "-") {
          tmpstr = tmpstr + nit.charAt(i);
        }
    }

    var nitLimpio = tmpstr;

    // NIT puede tener entre 6 y 10 dígitos (incluyendo DV)
    // Personas naturales (cédulas): 6-10 dígitos
    // Personas jurídicas: generalmente 10 dígitos
    if (nitLimpio.length < 6 || nitLimpio.length > 10) {
        Swal.fire({
          text: "NIT inválido",
          title: "El NIT debe tener entre 6 y 10 dígitos",
          icon: "warning",
        });
        return false;
    }

    var numero = nitLimpio.substring(0, nitLimpio.length - 1);
    var dvIngresado = nitLimpio.charAt(nitLimpio.length - 1);

    // Pesos estándar del algoritmo Módulo 11 colombiano (de derecha a izquierda)
    var pesos = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
    var suma = 0;

    // Aplicar pesos de derecha a izquierda
    for (var i = 0; i < numero.length; i++) {
        suma += parseInt(numero.charAt(numero.length - 1 - i)) * pesos[i];
    }

    var residuo = suma % 11;
    var dvCalculado: string;

    if (residuo === 0) {
        dvCalculado = "0";
    } else if (residuo === 1) {
        dvCalculado = "1";
    } else {
        dvCalculado = (11 - residuo).toString();
    }

    if (dvCalculado !== dvIngresado) {
        Swal.fire({
            text: "NIT inválido",
            title: "El NIT ingresado es inválido",
            icon: "warning",
        });
        return false;
    }

    return true;
};