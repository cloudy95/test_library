
const Etiquetas:any = {
  'PE':{
      'Cliente': 'Cedente',
      'Deudor': 'Aceptante'
  },
  'CL':{
      'Cliente': 'Cliente',
      'Deudor': 'Deudor'
  }
}

export class Changescurrezycontries {

  constructor(){}

  etiquetas( type = 'Cliente', contry = 'PE' ){
    return Etiquetas[contry][type]
  }

}