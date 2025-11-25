# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
# Build the library (TypeScript compilation + Vite bundling)
pnpm build

# Run development server
pnpm dev

# Preview production build
pnpm preview
```

## Architecture

This is a TypeScript utility library (`currency_contry_exchange`) that provides country-specific localization utilities for Chile (CL) and Peru (PE). It's built with Vite and outputs multiple formats: ES modules, CommonJS, UMD, and IIFE.

### Core Structure

- **Entry point**: `src/main.ts` exports the `Faastlocation` class
- **Interfaces**: `src/models/interfaces.ts` defines all TypeScript interfaces
- **Utilities**: `src/utils/` contains country-specific implementations

### Faastlocation Class

The main class accepts an optional default country code in its constructor. All methods accept a `contry` parameter that falls back to the default. Key methods:

- `labels()` - Country-specific terminology (e.g., "Cliente" vs "Cedente")
- `validateFormaterRut()` / `validateFormaterDoc()` - RUT/RUC validation and formatting
- `formaterCurrency()` - Number formatting with locale-specific separators
- `formaterInputProps()` - Input field configuration for react-number-format
- `formaterAmount()` - Amount string formatting
- `rutValidatorIsNatural()` - Determines if RUT belongs to natural person
- `symbolCurrencyIndicadorCartera()` - Currency symbol lookup
- `interestAmountunt()` - Simple/compound interest calculations

### Country Code Pattern

All utilities use `contryCode()` to normalize country input to lowercase `'cl'`, `'pe'`, or empty string. Each utility module exports a `Record<string, Function>` keyed by these codes.

### Key Constants (`src/utils/const.ts`)

- `Labels` - Locale-specific label mappings
- `ObjecInputSeparatorPE/CL` - Decimal/thousand separator configs
- `SimbolIndicadorcartera` - Currency symbol per country

### Dependencies

- `sweetalert2` - Used for validation error alerts in RUT/document validators
