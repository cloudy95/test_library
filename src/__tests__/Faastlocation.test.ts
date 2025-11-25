import { Faastlocation } from '../main'

describe('Faastlocation', () => {
  describe('constructor', () => {
    it('should create instance without default country', () => {
      const faast = new Faastlocation()
      expect(faast).toBeInstanceOf(Faastlocation)
    })

    it('should create instance with default country CL', () => {
      const faast = new Faastlocation('CL')
      expect(faast).toBeInstanceOf(Faastlocation)
    })

    it('should create instance with default country PE', () => {
      const faast = new Faastlocation('PE')
      expect(faast).toBeInstanceOf(Faastlocation)
    })
  })

  describe('labels', () => {
    it('should return correct label for Chile', () => {
      const faast = new Faastlocation('CL')
      expect(faast.labels({ label: 'cliente' })).toBe('Cliente')
      expect(faast.labels({ label: 'deudor' })).toBe('Deudor')
      expect(faast.labels({ label: 'rut' })).toBe('RUT')
      expect(faast.labels({ label: 'iva' })).toBe('IVA')
    })

    it('should return correct label for Peru', () => {
      const faast = new Faastlocation('PE')
      expect(faast.labels({ label: 'cliente' })).toBe('Cedente')
      expect(faast.labels({ label: 'deudor' })).toBe('Aceptante')
      expect(faast.labels({ label: 'rut' })).toBe('RUC')
      expect(faast.labels({ label: 'iva' })).toBe('IGV')
    })

    it('should override default country when contry param is provided', () => {
      const faast = new Faastlocation('CL')
      expect(faast.labels({ contry: 'PE', label: 'cliente' })).toBe('Cedente')
    })

    it('should handle labels with tildes', () => {
      const faast = new Faastlocation('CL')
      expect(faast.labels({ label: 'región' })).toBe('Región')
    })

    it('should return original label if not found', () => {
      const faast = new Faastlocation('CL')
      expect(faast.labels({ label: 'unknown_label' })).toBe('unknown_label')
    })
  })

  describe('formaterCurrency', () => {
    it('should format currency for Chile (no decimals)', () => {
      const faast = new Faastlocation('CL')
      expect(faast.formaterCurrency({ currency: 1000000 })).toBe('1.000.000')
      expect(faast.formaterCurrency({ currency: 1234567 })).toBe('1.234.567')
    })

    it('should format currency for Peru (with decimals)', () => {
      const faast = new Faastlocation('PE')
      expect(faast.formaterCurrency({ currency: 1000 })).toBe('1,000.00')
      expect(faast.formaterCurrency({ currency: 1234.56 })).toBe('1,234.56')
    })

    it('should handle zero values', () => {
      const faast = new Faastlocation('CL')
      expect(faast.formaterCurrency({ currency: 0 })).toBe('0')
    })

    it('should handle undefined currency', () => {
      const faast = new Faastlocation('CL')
      expect(faast.formaterCurrency({})).toBe('0')
    })
  })

  describe('symbolCurrencyIndicadorCartera', () => {
    it('should return USD for Peru', () => {
      const faast = new Faastlocation('PE')
      expect(faast.symbolCurrencyIndicadorCartera({})).toBe('USD')
    })

    it('should return empty string for Chile', () => {
      const faast = new Faastlocation('CL')
      expect(faast.symbolCurrencyIndicadorCartera({})).toBe('')
    })
  })
})
