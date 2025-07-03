# TypeScript

Librería para formateo de monedas, documentos, etiquetas y cálculo de intereses según país.

## Instalación

```bash
npm install currency_contry_exchange
```

## Importación y Uso

```typescript
import { Faastlocation } from 'faastlocation';

// Puedes inicializar con país por defecto (opcional)
const location = new Faastlocation('cl'); // o sin parámetro para usar el default
```

## Métodos Disponibles

- **labels({ contry, label }): string**  
  Devuelve una etiqueta específica basada en el país y la etiqueta proporcionada.

- **validateFormaterRut({ contry, rut, isValidate }): string | boolean**  
  Valida o formatea un RUT (Rol Único Tributario) según el país especificado.  
  Si `isValidate` es `true`, valida el rut; si es `false` (por defecto), lo formatea.

- **validateFormaterDoc({ contry, rut, isValidate }): string | boolean**  
  Valida o formatea un documento según el país.

- **formaterCurrency({ contry, currency, typeCurrenzy }): string**  
  Formatea una cantidad de moneda específica según el país.

- **formaterInputProps({ contry, typeCurrenzy, decimalScale, fixedDecimalScale }): object**  
  Devuelve propiedades de objeto específicas según el país, útil para librerías como NumberFormat.

- **formaterAmount({ contry, amount, typeCurrenzy }): string**  
  Formatea una cantidad según el país especificado.

- **rutValidatorIsNatural({ contry, rut }): boolean**  
  Valida si el rut corresponde a una persona natural según el país.

- **symbolCurrencyIndicadorCartera({ contry }): string**  
  Devuelve el símbolo de la moneda para el país.

- **formaterNumDocument({ contry, value }): string**  
  Formatea el número de documento según el país.

- **interestAmountunt({ contry, type, anticipo, tasa, plazo, array_interes }): number | string | any[]**  
  Calcula el interés simple o compuesto según país y parámetros.  
  - Para Chile (`cl`): retorna entero, redondeando hacia arriba solo si hay decimales.  
  - Para Perú (`pe`): retorna con 2 decimales.  
  - Soporta cálculo individual o por arreglo (`array_interes`).

## Ejemplo de Uso

```typescript
const location = new Faastlocation('cl');

const label = location.labels({ contry: 'cl', label: 'cliente' });
console.log(label);

const formattedRut = location.validateFormaterRut({ contry: 'pe', rut: '123456789', isValidate: true });
console.log(formattedRut);

const formattedCurrency = location.formaterCurrency({ contry: 'cl', currency: 1000 });
console.log(formattedCurrency);

const inputProps = location.formaterInputProps({ contry: 'cl', typeCurrenzy: 'CLP' });
console.log(inputProps);

const interest = location.interestAmountunt({ contry: 'cl', type: 'simple', anticipo: 650000, tasa: 1.8, plazo: 90 });
console.log(interest); // 35100

const interestArray = location.interestAmountunt({
  contry: 'pe',
  type: 'compuesto',
  array_interes: [
    { id: 1, anticipo: 1000, tasa: 2, plazo: 60 },
    { id: 2, anticipo: 2000, tasa: 1.5, plazo: 30 }
  ]
});
console.log(interestArray); // [{ id: 1, result: },{ id: 2, result: }]
```

## Tabla de Métodos

| Método                         | Parámetros                                                                 | Retorno         | Descripción                                                                                                   |
|------------------------------- |---------------------------------------------------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------|
| labels                         | { contry: string, label: string }                                         | string          | Devuelve una etiqueta localizada.                                                                             |
| validateFormaterRut            | { contry: string, rut: string, isValidate: boolean }                      | string/boolean  | Valida o formatea un RUT según país.                                                                          |
| validateFormaterDoc            | { contry: string, rut: string, isValidate: boolean }                      | string/boolean  | Valida o formatea un documento según país.                                                                    |
| formaterCurrency               | { contry: string, currency: number, typeCurrenzy: string }                | string          | Formatea un valor monetario según país y tipo de moneda.                                                      |
| formaterInputProps             | { contry: string, typeCurrenzy: string, decimalScale?: number, fixedDecimalScale?: boolean } | object          | Devuelve propiedades de input adaptadas al país y moneda.                                                     |
| formaterAmount                 | { contry: string, amount: number, typeCurrenzy: string }                  | string          | Devuelve el monto formateado según país.                                                                      |
| rutValidatorIsNatural          | { contry: string, rut: string }                                           | boolean         | Valida si el rut es de persona natural.                                                                       |
| symbolCurrencyIndicadorCartera | { contry: string }                                                        | string          | Devuelve el símbolo de la moneda para el país.                                                                |
| formaterNumDocument            | { contry: string, value: string }                                         | string          | Formatea el número de documento según país.                                                                   |
| interestAmountunt              | { contry: string, type: 'simple' \| 'compuesto', anticipo: number, tasa: number, plazo: number, array_interes?: any[] } | number/string/any[] | Calcula interés simple o compuesto según país. CL: entero, redondeo arriba si hay decimales. PE: 2 decimales. |

---

**Nota:**  
Puedes inicializar la instancia con el país por defecto, así no necesitas pasar `contry` en cada método.