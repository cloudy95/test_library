
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

class Changescurrezycontries {

  constructor(){}

  etiquetas( type = 'Cliente', contry = 'PE' ){
    return Etiquetas[contry][type]
  }

}

export default Changescurrezycontries;