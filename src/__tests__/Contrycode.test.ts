import { contryCode } from '../utils/Contrycode'

describe('contryCode', () => {
  describe('valid country codes', () => {
    it('should return "cl" for Chile variations', () => {
      expect(contryCode('cl')).toBe('cl')
      expect(contryCode('CL')).toBe('cl')
      expect(contryCode('Cl')).toBe('cl')
      expect(contryCode(' CL ')).toBe('cl')
    })

    it('should return "pe" for Peru variations', () => {
      expect(contryCode('pe')).toBe('pe')
      expect(contryCode('PE')).toBe('pe')
      expect(contryCode('Pe')).toBe('pe')
      expect(contryCode(' PE ')).toBe('pe')
    })
  })

  describe('invalid country codes', () => {
    it('should return empty string for unknown countries', () => {
      expect(contryCode('us')).toBe('')
      expect(contryCode('mx')).toBe('')
      expect(contryCode('ar')).toBe('')
    })

    it('should return empty string for empty input', () => {
      expect(contryCode('')).toBe('')
    })

    it('should handle undefined gracefully', () => {
      expect(contryCode(undefined as unknown as string)).toBe('')
    })
  })
})
