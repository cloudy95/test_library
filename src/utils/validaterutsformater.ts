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
        
       if( rut.length > 11 ||  rut.length < 11 ){
          Swal.fire({
            text: "Ruc inválido",
            title: "El RUC ingresado es inválido",
            icon: "warning",
          });
          return false;
       }

       return true;

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