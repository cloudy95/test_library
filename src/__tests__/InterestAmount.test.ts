import { intersetAmountFnc } from "../utils/InterestAmount"

describe('interestAmount', () => {
    it('Debe calcular interés simple para chile', ()=>{
        const resultado = intersetAmountFnc['cl']({
            type: 'simple',
            anticipo: 1000,
            tasa: 1.8,
            plazo: 30
        })

        expect(resultado).toBe(18);
    })
    it('debe redondear hacia arriba cuando decimal >= 0.5', () => {
      const resultado = intersetAmountFnc['cl']({
        type: 'simple',
        anticipo: 1000,
        tasa: 1.85,
        plazo: 91
      })
      expect(resultado).toBe(56);
    })
})