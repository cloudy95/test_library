import { Formateramountfnc } from "../models/interfaces"
import { TYPECURRENZY } from "./const"

export const formateramount:any = {
    'pe':({amount = '', typeCurrenzy = ''}:Formateramountfnc)=>{
        if(typeCurrenzy == TYPECURRENZY.euro){
            return amount?.replaceAll('.','').replaceAll(',','.');
        }
        return amount?.replaceAll(',','')
    },
    'cl':({amount = ''}:Formateramountfnc)=>{
        return amount?.replaceAll('.','').replaceAll(',','.')
    },
    '':({amount = ''}:Formateramountfnc)=>{
        return amount?.replaceAll('.','').replaceAll(',','')
    }
}