import { FormaterRut, InterfaceLabels } from "./models/interfaces"
import { Labels } from "./utils/const"
import { FormateaRut, ValidateRut } from "./utils/validaterutsformater";

export class Faastlocation {

  constructor(){}

  labels({ contry = '', label = 'cliente' }:InterfaceLabels | any ):string{
    const normalizedContry = contry?.toLocaleLowerCase().trim() || '';
    const normalizedLabel = label.toLocaleLowerCase().trim() || '';
      
    return Labels[normalizedContry]?.[normalizedLabel] || '';
  }

  validateFormaterRut({ contry = '', rut = '', isValidate = false }:FormaterRut | any):string{
    const normalizedContry = contry ? contry?.toLocaleLowerCase().trim() || '' : '';
    const normalizedRut = rut ? rut.toLocaleLowerCase().trim() || '' : '';
    
    return isValidate ? ValidateRut[normalizedContry](normalizedRut) : FormateaRut[normalizedContry](normalizedRut);
  }

}

new Faastlocation();