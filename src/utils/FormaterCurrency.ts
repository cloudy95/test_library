import { FormaterCurrencyFnc } from "../models/interfaces";
import { TYPECURRENZY } from "./const";

export const FormaterCurrency:any = {
    'cl':({currenzy = ''}:FormaterCurrencyFnc)=>{
        return formaterCurrencystring({currenzy, decimal:',', miles:'.'});
    },
    'pe':({currenzy = '', typeCurrenzy = '' }:FormaterCurrencyFnc)=>{
        if( typeCurrenzy == TYPECURRENZY.euro ){
            return formaterCurrencystring({currenzy, decimal:',', miles:'.'});
        }
        return formaterCurrencystring({currenzy, decimal:'.', miles:','});
    },
    '':({currenzy = ''}:FormaterCurrencyFnc)=>{
        return formaterCurrencystring({currenzy, decimal:'.', miles:','});
    }
}

const formaterCurrencystring = ({currenzy, decimal, miles}:any) => {
    const numberStr = currenzy.toString();
  
    const part = numberStr.split('.');
    const partInt = part[0];
    const partFloat = (part[1]?.length == 1 ? `${part[1]}0` : part[1]) || '00'; 
  
    const partIntFormater = partInt.replace(/\B(?=(\d{3})+(?!\d))/g, miles);
  
    return `${ partIntFormater }${partFloat == '' ? '' : decimal}${partFloat}`;
}
