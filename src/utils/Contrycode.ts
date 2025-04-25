import { CONTRY } from "./const";

export const contryCode = (contry:string)=>{
    const contrytemp = contry?.toLocaleLowerCase().trim();
    return (contrytemp == CONTRY.pe || contrytemp == CONTRY.cl) ? contrytemp : ''
} 
