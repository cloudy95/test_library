import { ObjecInputSeparatorCL, ObjecInputSeparatorPE, TYPECURRENZY } from "./const"

export const PropsInput:any = {
    'pe':({ decimalScale = 2, fixedDecimalScale = 2 })=>{
      return {
          ...ObjecInputSeparatorPE,
          decimalScale,
          fixedDecimalScale
        }
    },
    'cl':({typeCurrenzy = '', decimalScale = 0, fixedDecimalScale = 0 })=>{
      if(typeCurrenzy == TYPECURRENZY.euro){
        return {
          ...ObjecInputSeparatorPE,
          decimalScale: decimalScale != 0 ? decimalScale : 2,
          fixedDecimalScale: fixedDecimalScale != 0 ? fixedDecimalScale : 2,
        }
      }
      return {
        ...ObjecInputSeparatorCL,
        decimalScale,
        fixedDecimalScale
      }
    },
    '':({ decimalScale = 0, fixedDecimalScale = 0 })=>{
      return {
        ...ObjecInputSeparatorCL,
        decimalScale,
        fixedDecimalScale
      }
    }
  }
  