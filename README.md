# currency_contry_exchange

Librería TypeScript para formateo de monedas, formatos de documento (RUT/NIT), etiquetas localizadas y cálculo de intereses por país.

**Versión:** 1.9.2 • **Licencia:** MIT

## Contenido
- **Descripción rápida**
- **Instalación**
- **Uso (TypeScript)**
- **Referencia de la API**
- **Archivos principales**
- **Comandos útiles**
- **Contribuir**

## Descripción rápida
Provee utilidades para manejar formatos y cálculos locales (por ejemplo: CL, PE). Incluye formateo de monedas, validación y formateo de documentos, generación de propiedades para inputs numéricos y cálculo de intereses (simple/compuesto).

## Instalación
Usa el gestor que prefieras:

```bash
npm install currency_contry_exchange
pnpm add currency_contry_exchange
yarn add currency_contry_exchange
```

> Tipo de paquete: módulo ESM. Incluye definiciones TypeScript en `dist`.

## Uso (TypeScript)

```typescript
import { Faastlocation } from 'currency_contry_exchange';

// Instanciar con país por defecto (opcional)
const locale = new Faastlocation('cl');

// Ejemplos
const label = locale.labels({ contry: 'cl', label: 'cliente' });
const formatted = locale.formaterCurrency({ contry: 'cl', currency: 12500 });
const rutValid = locale.validateFormaterRut({ contry: 'pe', rut: '20123456-7', isValidate: true });
const props = locale.formaterInputProps({ contry: 'cl', typeCurrenzy: 'CLP', decimalScale: 0, fixedDecimalScale: true });

// Cálculo de interés simple
const interes = locale.interestAmountunt({ contry: 'cl', type: 'simple', anticipo: 650000, tasa: 1.8, plazo: 90 });
```

## Referencia de la API

Instancia principal: `Faastlocation` — provee los siguientes métodos:

- **labels({ contry?, label }): string**
  - Descripción: Devuelve una etiqueta localizada (por ejemplo, 'cliente' → 'Cliente').
  - Notas: `contry` por defecto se toma de la instancia si se pasó al constructor.

- **validateFormaterRut({ contry?, rut, isValidate = false }): string | boolean**
  - Descripción: Valida o formatea un RUT/NIT según país. Si `isValidate` es `true`, devuelve `boolean`.

- **validateFormaterDoc({ contry?, rut, isValidate = false }): string | boolean**
  - Descripción: Similar a `validateFormaterRut` pero orientado a documentos genéricos.

- **formaterCurrency({ contry?, currency, typeCurrenzy? }): string**
  - Descripción: Formatea un número como moneda (separadores, símbolos según país/tipo).

- **formaterInputProps({ contry?, typeCurrenzy?, decimalScale?, fixedDecimalScale? }): object**
  - Descripción: Retorna propiedades convenientes para componentes de input numérico (ej. NumberFormat).

- **formaterAmount({ contry?, amount, typeCurrenzy? }): string**
  - Descripción: Otro helper para formateo de montos con reglas locales.

- **rutValidatorIsNatural({ contry?, rut }): boolean**
  - Descripción: Indica si el RUT/NIT corresponde a una persona natural.

- **symbolCurrencyIndicadorCartera({ contry? }): string**
  - Descripción: Símbolo de moneda para el país (ej. `$`, `S/`).

- **formaterNumDocument({ contry?, value }): string**
  - Descripción: Formatea números de documento (agrega puntos/guiones según normativa).

- **interestAmountunt({ contry?, type, anticipo, tasa, plazo, array_interes? }): number | string | any[]**
  - Descripción: Calcula interés simple o compuesto. Para Chile la salida suele ser entero; para Perú tiene 2 decimales.

Los tipos están disponibles en la definición TypeScript incluida.
