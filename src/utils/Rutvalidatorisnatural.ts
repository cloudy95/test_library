export const RutValidatorIsNatural:any = {
    'pe':(rut:any)=>{
        if(rut < 20000000000) {
            return true;
        } else {
            return false;
        }
    },
    'cl':(rut:any)=>{
        if(rut < 30000000) {
            return true;
        } else {
            return false;
        }
    },
    '':(rut:any)=>{
        if(rut < 30000000) {
            return true;
        } else {
            return false;
        }
    }
}