import { FormaterCurrency } from '../utils/FormaterCurrency'

describe('FormaterCurrency', () => {
  describe('Chile (cl)', () => {
    it('should format numbers without decimals', () => {
      expect(FormaterCurrency['cl']({ currenzy: '1000' })).toBe('1.000')
      expect(FormaterCurrency['cl']({ currenzy: '1000000' })).toBe('1.000.000')
    })

    it('should round decimal numbers', () => {
      expect(FormaterCurrency['cl']({ currenzy: '1000.99' })).toBe('1.001')
      expect(FormaterCurrency['cl']({ currenzy: '1000.49' })).toBe('1.000')
    })

    it('should handle small numbers', () => {
      expect(FormaterCurrency['cl']({ currenzy: '0' })).toBe('0')
      expect(FormaterCurrency['cl']({ currenzy: '1' })).toBe('1')
      expect(FormaterCurrency['cl']({ currenzy: '999' })).toBe('999')
    })

    it('should handle negative numbers', () => {
      expect(FormaterCurrency['cl']({ currenzy: '-1000' })).toBe('-1.000')
    })
  })

  describe('Peru (pe)', () => {
    it('should format numbers with 2 decimals', () => {
      expect(FormaterCurrency['pe']({ currenzy: '1000' })).toBe('1,000.00')
      expect(FormaterCurrency['pe']({ currenzy: '1000.5' })).toBe('1,000.50')
    })

    it('should handle decimal precision', () => {
      expect(FormaterCurrency['pe']({ currenzy: '1000.999' })).toBe('1,001.00')
      expect(FormaterCurrency['pe']({ currenzy: '1000.123' })).toBe('1,000.12')
    })

    it('should format with Euro style when typeCurrenzy is EUR', () => {
      expect(FormaterCurrency['pe']({ currenzy: '1000', typeCurrenzy: 'EUR' })).toBe('1.000,00')
    })
  })

  describe('empty country code', () => {
    it('should default to Chile format', () => {
      expect(FormaterCurrency['']({ currenzy: '1000' })).toBe('1.000')
    })
  })
})
