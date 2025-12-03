import { FormaterCurrencyFnc } from "../models/interfaces";
import { TYPECURRENZY } from "./const";

export const FormaterCurrency: Record<string, (params: FormaterCurrencyFnc) => string> = {
    'cl': ({ currenzy = '' }: FormaterCurrencyFnc) => {
        const number = parseFloat(currenzy.toString());
        return new Intl.NumberFormat("es-CL", {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0 
        }).format(number);
    },
    'pe': ({ currenzy = '', typeCurrenzy = '' }: FormaterCurrencyFnc) => {
        const number = parseFloat(currenzy.toString());
        
        if (typeCurrenzy === TYPECURRENZY.euro) {
            return new Intl.NumberFormat("es-CL", {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
            }).format(number);
        }
        
        return new Intl.NumberFormat("es-PE", {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(number);
    },
    'co': ({ currenzy = '', typeCurrenzy = '' }: FormaterCurrencyFnc) => {
        const number = parseFloat(currenzy.toString());

        if (typeCurrenzy === TYPECURRENZY.euro) {
            return new Intl.NumberFormat("es-CL", {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
            }).format(number);
        }

        return new Intl.NumberFormat("es-CO", {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0 
        }).format(number);
    },
    '': ({ currenzy = '' }: FormaterCurrencyFnc) => {
        const number = parseFloat(currenzy.toString());
        return new Intl.NumberFormat("es-CL", {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0 
        }).format(number);
    }
};