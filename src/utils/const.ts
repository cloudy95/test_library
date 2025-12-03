import { Typecurrenzy } from "../models/interfaces"

export const Labels:any = {
    'pe':{
      'cliente': 'Cedente',
      'clientes': 'Cedentes',
      'deudor': 'Aceptante',
      'deudores': 'Aceptantes',
      'rut':'RUC',
      'rut cliente':'RUC Cedente',
      'iva':'IGV',
      'region':'Departamento',
      'comuna':'Distrito',
      'dicom':'Sentinel',
      'documento':'Documento',
      'sii':'SUNAT',
      'anfac':'APEFAC',
      'sbif':'RCC',
      'pagador': 'Gran Pagador'
    },
    'cl':{
      'cliente': 'Cliente',
      'deudor': 'Deudor',
      'clientes': 'Clientes',
      'deudores': 'Deudores',
      'rut':'RUT',
      'rut cliente':'RUT Cliente',
      'iva':'IVA',
      'region':'Región',
      'comuna':'Comuna',
      'dicom':'Dicom',
      'documento':'RUT',
      'sii':'SII',
      'anfac':'ANFAC',
      'sbif':'SBIF'
    },
    'co':{
      'cliente': 'Cedente',
      'clientes': 'Cedentes',
      'deudor': 'Aceptante',
      'deudores': 'Aceptantes',
      'rut':'NIT',
      'rut cliente':'NIT Cedente',
      'region':'Departamento',
      'comuna':'Distrito',
      'dicom':'Sentinel',
      'documento':'NIT',
      'sii':'RADIAN',
      'anfac':'',
      'sbif':'',
      'cesión':'Endoso',
      'excedente':'Garantia',
      'iva':'IVA',
    },
    '':{
      'cliente': 'Cliente',
      'deudor': 'Deudor',
      'clientes': 'Clientes',
      'deudores': 'Deudores',
      'rut':'RUT',
      'rut cliente':'RUT Cliente',
      'iva':'IVA',
      'region':'Región',
      'comuna':'Comuna',
      'dicom':'Dicom',
      'documento':'RUT',
      'sii':'SII',
      'anfac':'ANFAC',
      'sbif':'SBIF'
    }
}

export const TYPECURRENZY:Typecurrenzy = {
  euro: 'EUR',
  dolar: 'USD',
}

export const ObjecInputSeparatorPE:any = {
  thousandSeparator:",",
  decimalSeparator:"."
}

export const ObjecInputSeparatorCL:any = {
  thousandSeparator:".",
	decimalSeparator:","
}

export const CONTRY = {
  pe:'pe',
  cl:'cl',
  co:'co'
}

export const SimbolIndicadorcartera:any = {
  'pe':'USD',
  'cl':'',
  '':''
}