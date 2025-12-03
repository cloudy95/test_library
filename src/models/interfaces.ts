export interface InterfaceLabels {
    contry?:string;
    label:string;
}

export interface FormaterRut {
    contry?:string;
    rut:string;
    isValidate:boolean;
}

export interface FormaterCurrencyInterface {
    contry?:string;
    currency:any;
    typeCurrenzy?:string;
}

export interface FormaterAmountInterface {
    contry?:string;
    amount:string;
    typeCurrenzy?:string;
}

export interface FormaterCurrencyFnc{
    currenzy:any;
    typeCurrenzy?:string; 
}

export interface Formateramountfnc{
    amount:string | any;
    typeCurrenzy?:string;
}

export interface Typecurrenzy{
    euro:string;
    dolar:string;
}

export interface RutValidatorIsNaturalinterface {
    contry?:string;
    rut:string | any;
}

export interface symbolCurrencyIndicadorCarterainterface {
    contry?:string;
}

export interface formaterNumDocumentinterface {
    contry?:string;
    value:string | any;
}

export type Typeinterest = 'simple' | 'compuesto' | '';
export interface interestAmountuntInterface {
    contry?:string;
    type: Typeinterest;
    anticipo?:number | string;
    tasa?:number | string;
    plazo?:number | string;
    array_interes?:interesArrayInterface[]
}

export interface interesArrayInterface {
    id:number | string;
    anticipo?:number | string;
    tasa?:number | string;
    plazo?:number | string;
}

