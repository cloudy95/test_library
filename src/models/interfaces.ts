export interface InterfaceLabels {
    contry:string;
    label:string;
}

export interface FormaterRut {
    contry:string;
    rut:string;
    isValidate:boolean;
}

export interface FormaterCurrencyInterface {
    contry:string;
    currency:any;
    typeCurrenzy?:string;
}

export interface FormaterAmountInterface {
    contry:string;
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
    euro:string
}

export interface RutValidatorIsNaturalinterface {
    contry:string;
    rut:string | any;
}

export interface symbolCurrencyIndicadorCarterainterface {
    contry:string;
}
