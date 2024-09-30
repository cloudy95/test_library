import { InterfaceLabels } from "./models/interfaces"
import { Labels } from "./utils/const"

export class Faastlocation {

  constructor(){}
  
  labels({ contry, label }:InterfaceLabels ){
    return Labels[contry.toLocaleLowerCase()][label.toLocaleLowerCase()]
  }

}
