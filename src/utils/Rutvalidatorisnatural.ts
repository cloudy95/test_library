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