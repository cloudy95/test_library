import { interestAmountuntInterface, Typeinterest } from "../models/interfaces"

function calcSimple({ tasa = 0, plazo = 0, anticipo = 0 }: any) {
    const t = (Number(tasa) || 0) / 100;
    const d = Number(plazo) || 0;
    const a = Number(anticipo) || 0;
    return t * (d / 30) * a;
}

function calcCompuesto({ tasa = 0, plazo = 0, anticipo = 0 }: any) {
    const t = (Number(tasa) || 0);
    const d = Number(plazo) || 0;
    const a = Number(anticipo) || 0;
    const factor = Math.pow(1 + t / 100, d / 30) - 1;
    return factor * a;
}

function calcularResultadoPorTipo(type: Typeinterest, datos: any) {
    if (type === 'simple') return calcSimple(datos);
    if (type === 'compuesto') return calcCompuesto(datos);
    return 0;
}

function procesarArray(type: Typeinterest, array_interes: any[], roundFn: (v: number) => number) {
    return array_interes.map(item => ({
        id: item.id,
        result: roundFn(calcularResultadoPorTipo(type, item))
    }));
}

function procesarIndividual(type: Typeinterest, datos: any, roundFn: (v: number) => number) {
    if (type !== 'simple' && type !== 'compuesto') return '';
    return roundFn(calcularResultadoPorTipo(type, datos));
}

function roundCL(value: number): number {
    // Si es entero, retorna igual
    console.log('value', value)
    if (Number.isInteger(value)) return value;
    const decimal = value - Math.floor(value);
    // Si los decimales son 0.5 o más, redondea hacia arriba
    if (decimal >= 0.5) return Math.ceil(value);
    // Si los decimales son menores a 0.5, redondea hacia abajo (sin decimales)
    return Math.floor(value);
}

function roundPE(value: number): number {
    // Siempre retorna con 2 decimales
    return Math.round(value * 100) / 100;
}

export const intersetAmountFnc: any = {
    'pe': ({ type, anticipo, tasa, plazo, array_interes }: interestAmountuntInterface) => {
        if (Array.isArray(array_interes) && array_interes.length > 0) {
            return procesarArray(type, array_interes, roundPE);
        }
        return procesarIndividual(type, { tasa, plazo, anticipo }, roundPE);
    },
    'cl': ({ type, anticipo, tasa, plazo, array_interes }: interestAmountuntInterface) => {
        if (Array.isArray(array_interes) && array_interes.length > 0) {
            return procesarArray(type, array_interes, roundCL);
        }
        return procesarIndividual(type, { tasa, plazo, anticipo }, roundCL);
    },
    '': ({ type, anticipo, tasa, plazo, array_interes }: interestAmountuntInterface) => {
        if (Array.isArray(array_interes) && array_interes.length > 0) {
            return procesarArray(type, array_interes, roundCL);
        }
        return procesarIndividual(type, { tasa, plazo, anticipo }, roundCL);
    }
}