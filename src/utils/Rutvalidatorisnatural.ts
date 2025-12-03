export const RutValidatorIsNatural:any = {
    'pe':(rut:any)=>{
        const newRut = rut?.replaceAll('.','').replaceAll('-','');
        if(newRut < 20000000000) {
            return true;
        } else {
            return false;
        }
    },
    'cl':(rut:any)=>{
        return Rutclp(rut);
    },
    'co':(nit:any)=>{
        return NitCo(nit);
    },
    '':(rut:any)=>{
        return Rutclp(rut);
    }
}

const Rutclp = (rut:string = '')=>{
   const rutNumber = rut.includes(".") ? Number(rut.replace(/\./g, "")?.split("-")[0]) : Number(rut?.split("-")[0])
    if(rutNumber < 30000000) {
        return true;
    } else {
        return false;
    }
}

const NitCo = (nit:string = '')=>{
    const nitLimpio = nit.replace(/\./g,'').replace(/-/g,'').replace(/\s/g,'');

    // Obtener solo los dígitos sin el DV
    const numero = nitLimpio.substring(0, nitLimpio.length - 1);

    // Personas jurídicas en Colombia:
    // - NITs que comienzan con 8 o 9 y tienen 9 dígitos (sin DV)
    // - Ejemplos: 800.xxx.xxx, 830.xxx.xxx, 860.xxx.xxx, 900.xxx.xxx
    if(numero.length === 9 && (numero.startsWith('8') || numero.startsWith('9'))) {
        return false; // Es persona jurídica
    }

    return true; // Es persona natural
}