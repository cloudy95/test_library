# TypeScript

Changes in formats, currencies, documents and labels depending on location


## Install

```bash
$ npm install currency_contry_exchange
```

## Import
```bash
import { Faastlocation } from 'faastlocation';
const location = new Faastlocation();
```

## Methods the app

```bash
labels({ contry = '', label = 'cliente' }): string
Devuelve una etiqueta específica basada en el país y la etiqueta proporcionada.

validateFormaterRut({ contry = '', rut = '', isValidate = false}): string
Valida o formatea un RUT (Rol Único Tributario) según el país especificado. 
Campo "isValidate" si esta en true valida el rut, esta en false por default para formatear rut

formaterCurrency({ contry = '', currency = 0, typeCurrenzy = '' }): string
Formatea una cantidad de moneda específica según el país.

formaterInputProps({ contry = '', typeCurrenzy = '', decimalScale, fixedDecimalScale }): object
Devuelve propiedades de objeto específicas según el país, se usa para la libreria (NumberFomat).

formaterAmount({ contry = '', amount = '', typeCurrenzy = '' }): string
Formatea una cantidad según el país especificado. 
```

## Example
```bash
const location = new Faastlocation();

const label = location.labels({ contry: 'cl', label: 'cliente' });
console.log(label);

const formattedRut = location.validateFormaterRut({ contry: 'pe', rut: '123456789', isValidate: true, typeCurrenzy = 'EUR' });
console.log(formattedRut);

const formattedCurrency = location.formaterCurrency({ contry: 'cl', currency: 1000 });
console.log(formattedCurrency);

const formaterInputProps =  location.formaterInputProps({ contry = '', typeCurrenzy = '' })
console.log(formaterInputProps);
```


| Method | Parameters                                  | Return rate | Description                                                              |
|---|---|---|---|
| formaterCurrency(options) | { contry: string, currency: number, typeCurrenzy: string } | string         | Formatea un valor monetario según el país y tipo de moneda especificados. <br> **Ejemplo:** formaterCurrency({ contry: 'chile', currency: 123456.78, typeCurrenzy: 'CLP' }) |
| formaterInputProps(options) | { contry: string, typeCurrenzy: string, decimalScale?:number, fixedDecimalScale?:number }             | object         | Devuelve un objeto con las propiedades de un input adaptado al país y tipo de moneda. Este metodo se usa con la libreria Numberformat |
| labels(optins) | { contry: string, label:string } | string | Devuelve un string | 
| formaterAmount(optins) | { contry:string, amount:number, typeCurrenzy:string } | string | Devuelve un string con el monto formateado
| validateFormaterRut(optins) | { contry:string rut:string isValidate:boolean } | string o alerta | Devuelve un string si isValidate esta en true, por defecto retorna el rut formateado string
