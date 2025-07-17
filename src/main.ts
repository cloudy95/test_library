import { FormaterAmountInterface, FormaterCurrencyInterface, formaterNumDocumentinterface, FormaterRut, interestAmountuntInterface, InterfaceLabels, RutValidatorIsNaturalinterface, symbolCurrencyIndicadorCarterainterface } from "./models/interfaces"
import { Labels, SimbolIndicadorcartera } from './utils/const';
import { contryCode } from "./utils/Contrycode";
import { formateramount } from "./utils/FormaterAmount";
import { FormaterCurrency } from "./utils/FormaterCurrency";
import { formaterNumberDocument } from "./utils/formaterNumDocument";
import { intersetAmountFnc } from "./utils/InterestAmount";
import { PropsInput } from "./utils/Propsinput";
import { RutValidatorIsNatural } from "./utils/Rutvalidatorisnatural";
import { FormateaRut, ValidateDoc, ValidateRut } from "./utils/validaterutsformater";

export interface FaastlocationInterface {
  labels: ({ contry, label }: InterfaceLabels) => string
  validateFormaterRut: ({ contry, rut,isValidate  }: FormaterRut) => string | boolean;
  validateFormaterDoc: ({ contry, rut,isValidate  }: FormaterRut) => string | boolean;
  formaterCurrency: ({ contry, currency }: FormaterCurrencyInterface) => string;
  formaterInputProps: ({ contry }:any)=> object;
  formaterAmount:({ contry, amount }:FormaterAmountInterface)=>string;
  rutValidatorIsNatural:({ contry, rut }:RutValidatorIsNaturalinterface)=>boolean;
  symbolCurrencyIndicadorCartera: ({ contry }:symbolCurrencyIndicadorCarterainterface) => string;
  formaterNumDocument: ({ contry, value }:formaterNumDocumentinterface) => string;
  interestAmountunt: ({ contry, type, anticipo, tasa, plazo, array_interes}:interestAmountuntInterface) => number | string | any[];
}

export class Faastlocation implements FaastlocationInterface {
  private defaultCountry: string;

  /**
   * Constructor de Faastlocation
   * @param defaultCountry Opcional.
   */
  constructor(defaultCountry?: string) {
    this.defaultCountry = defaultCountry ? contryCode(defaultCountry) : '';
  }
  labels({ contry = this.defaultCountry, label = 'cliente' }:InterfaceLabels | any ):string{
    const normalizedContry = contryCode(contry);
    const normalizedLabel = label.toLocaleLowerCase().trim() || '';
    
    const removeTildes:string = normalizedLabel?.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    return Labels[normalizedContry]?.[removeTildes] || label;
  }

  validateFormaterRut({ contry = this.defaultCountry, rut = '', isValidate = false }:FormaterRut | any):string{
    const normalizedContry = contryCode(contry);
    const normalizedRut = rut ? rut.toLocaleLowerCase().trim() || '' : '';
    
    return isValidate ? ValidateRut[normalizedContry](normalizedRut) : FormateaRut[normalizedContry](normalizedRut);
  }

  validateFormaterDoc({ contry = this.defaultCountry, rut = '', isValidate = false }:FormaterRut | any):string{
    const normalizedContry = contryCode(contry);
    const normalizedRut = rut ? rut.toLocaleLowerCase().trim() || '' : '';
    
    return isValidate ? ValidateDoc[normalizedContry](normalizedRut) : FormateaRut[normalizedContry](normalizedRut);
  }

  formaterCurrency({ contry = this.defaultCountry, currency = 0, typeCurrenzy = '' }:FormaterCurrencyInterface):string{
    const normalizedContry = contryCode(contry);
    const normalizedCurrenzy = currency ? currency.toString() || '0' : '0';

    return FormaterCurrency[normalizedContry](
      {
        currenzy: normalizedCurrenzy,
        typeCurrenzy
      }
    )
  }

  formaterInputProps({ contry = this.defaultCountry, typeCurrenzy='', decimalScale, fixedDecimalScale}:{
    contry: string;
    typeCurrenzy?: string;
    decimalScale?: number;
    fixedDecimalScale?: boolean;
  }):object{
    const normalizedContry = contryCode(contry);

    try{
      return PropsInput?.[normalizedContry]({
        typeCurrenzy,
        decimalScale,
        fixedDecimalScale
      }) || {};
    }catch(e){
      return {};
    }
  }

  formaterAmount({ contry = this.defaultCountry, amount = '', typeCurrenzy= '' }:FormaterAmountInterface):string{
    const normalizedContry = contryCode(contry);
    const normalizedAmount = amount ? amount?.toString().trim() || '' : '';
    
    return formateramount[normalizedContry](
      {
        amount:normalizedAmount,
        typeCurrenzy
      }
    );
  }

  rutValidatorIsNatural({ contry = this.defaultCountry, rut = '' }:RutValidatorIsNaturalinterface):boolean{
    const normalizedContry = contryCode(contry);
    const normalizedRut:any = rut ? rut.toLocaleLowerCase().trim() || '' : '';

    // const newRut = normalizedRut?.replaceAll('.','').replaceAll('-','');

    return RutValidatorIsNatural[normalizedContry](normalizedRut) || false;
  }

  symbolCurrencyIndicadorCartera({ contry = this.defaultCountry}:symbolCurrencyIndicadorCarterainterface | any ):string{
    const normalizedContry = contryCode(contry);

    return SimbolIndicadorcartera[normalizedContry] || '';
  }

  formaterNumDocument({ contry = this.defaultCountry, value = ''}:formaterNumDocumentinterface | any ):string{
    const normalizedContry = contryCode(contry);

    return formaterNumberDocument[normalizedContry](value) || value;
  }

  interestAmountunt({ contry = this.defaultCountry, type = '', anticipo = 0, tasa = 0, plazo = 0, array_interes = []}: interestAmountuntInterface) : number | string | any[] {
    const normalizedContry = contryCode(contry);

    return intersetAmountFnc[normalizedContry]({ type, anticipo, tasa, plazo, array_interes}) || '';
  }

}