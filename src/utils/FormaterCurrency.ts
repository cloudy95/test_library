import { FormaterCurrencyFnc } from "../models/interfaces";
import { TYPECURRENZY } from "./const";

// export const FormaterCurrency:any = {
//     'cl':({currenzy = ''}:FormaterCurrencyFnc)=>{
//         return formaterCurrencystring({currenzy, decimal:',', miles:'.', contry: 'cl'});
//     },
//     'pe':({currenzy = '', typeCurrenzy = '' }:FormaterCurrencyFnc)=>{
//         if( typeCurrenzy == TYPECURRENZY.euro ){
//             return formaterCurrencystring({currenzy, decimal:',', miles:'.'});
//         }
//         return formaterCurrencystring({currenzy, decimal:'.', miles:','});
//     },
//     '':({currenzy = ''}:FormaterCurrencyFnc)=>{
//         return formaterCurrencystring({currenzy, decimal:'.', miles:','});
//     }
// }

// const formaterCurrencystring = ({currenzy, decimal, miles, contry = 'pe'}:any) => {
//     const numberStr = currenzy.toString();
  
//     const part = numberStr.split('.');
//     const partInt = part[0];
//     const partFloat = (part[1]?.length == 1 ? `${part[1]}0` : part[1]) || '00'; 
  
//     const partIntFormater = partInt.replace(/\B(?=(\d{3})+(?!\d))/g, miles);
  
//     return `${ partIntFormater }${partFloat == '' ? '' :  contry == 'cl' ? "" : decimal}${ contry == 'cl' ? '' : partFloat}`;
// }

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
    '': ({ currenzy = '' }: FormaterCurrencyFnc) => {
        const number = parseFloat(currenzy.toString());
        return new Intl.NumberFormat("es-CL", {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0 
        }).format(number);
    }
};