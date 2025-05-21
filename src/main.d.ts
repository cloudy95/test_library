import { FormaterAmountInterface, 
FormaterCurrencyInterface, 
formaterNumDocumentinterface, 
FormaterRut, 
InterfaceLabels, 
RutValidatorIsNaturalinterface, 
symbolCurrencyIndicadorCarterainterface } from "./models/interfaces";

declare interface FaastlocationInterface {
    labels: ({ contry, label }: InterfaceLabels) => string;
    validateFormaterRut: ({ contry, rut, isValidate }: FormaterRut) => string | boolean;
    validateFormaterDoc: ({ contry, rut, isValidate }: FormaterRut) => string | boolean;
    formaterCurrency: ({ contry, currency, typeCurrenzy }: FormaterCurrencyInterface) => string;
    formaterInputProps: ({ contry, typeCurrenzy, decimalScale, fixedDecimalScale }: any) => object;
    formaterAmount: ({ contry, amount, typeCurrenzy }: FormaterAmountInterface) => string;
    rutValidatorIsNatural: ({ contry, rut }: RutValidatorIsNaturalinterface) => boolean;
    symbolCurrencyIndicadorCartera: ({ contry }: symbolCurrencyIndicadorCarterainterface) => string;
    formaterNumDocument: ({ contry, value }:formaterNumDocumentinterface) => string;
}
  
declare class Faastlocation implements FaastlocationInterface {
    constructor();
    labels({ contry, label }: InterfaceLabels | any): string;
    validateFormaterRut({ contry, rut, isValidate }: FormaterRut | any): string;
    validateFormaterDoc({ contry, rut, isValidate }: FormaterRut | any): string;
    formaterCurrency({ contry, currency, typeCurrenzy }: FormaterCurrencyInterface): string;
    formaterInputProps({ contry, typeCurrenzy, decimalScale, fixedDecimalScale }: any): object;
    formaterAmount({ contry, amount, typeCurrenzy }: FormaterAmountInterface): string;
    rutValidatorIsNatural({ contry, rut }: RutValidatorIsNaturalinterface): boolean;
    symbolCurrencyIndicadorCartera({ contry }: symbolCurrencyIndicadorCarterainterface | any): string;
    formaterNumDocument: ({ contry, value }:formaterNumDocumentinterface) => string;
}
  

export default Faastlocation;