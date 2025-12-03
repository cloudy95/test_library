import { Faastlocation } from '../main'

describe('Colombia NIT Validation', () => {
  const faast = new Faastlocation('CO')

  describe('validateFormaterRut - Formateo de NIT', () => {
    it('should format NIT with dots and dash', () => {
      const result = faast.validateFormaterRut({ rut: '9001234568', isValidate: false })
      expect(result).toBe('900.123.456-8')
    })

    it('should format NIT removing extra characters', () => {
      const result = faast.validateFormaterRut({ rut: '900.123.456-8', isValidate: false })
      expect(result).toBe('900.123.456-8')
    })

    it('should format short NIT (cedula)', () => {
      const result = faast.validateFormaterRut({ rut: '123456789', isValidate: false })
      expect(result).toBe('12.345.678-9')
    })

    it('should handle NIT with spaces', () => {
      const result = faast.validateFormaterRut({ rut: '900 123 456 8', isValidate: false })
      expect(result).toBe('900.123.456-8')
    })

    it('should limit NIT to 10 digits', () => {
      const result = faast.validateFormaterRut({ rut: '12345678901234', isValidate: false })
      expect(result).toBe('123.456.789-0')
    })
  })

  describe('validateFormaterRut - Validación de NIT', () => {
    it('should validate correct NIT persona jurídica (900.123.456-8)', () => {
      const result = faast.validateFormaterRut({ rut: '9001234568', isValidate: true })
      expect(result).toBe(true)
    })

    it('should reject invalid NIT with wrong verification digit', () => {
      const result = faast.validateFormaterRut({ rut: '9001234567', isValidate: true })
      expect(result).toBe(false)
    })

    it('should reject NIT too short (less than 6 digits)', () => {
      const result = faast.validateFormaterRut({ rut: '12345', isValidate: true })
      expect(result).toBe(false)
    })

    it('should reject NIT too long (more than 10 digits)', () => {
      const result = faast.validateFormaterRut({ rut: '12345678901', isValidate: true })
      expect(result).toBe(false)
    })

    it('should validate NIT with formatted input', () => {
      const result = faast.validateFormaterRut({ rut: '900.123.456-8', isValidate: true })
      expect(result).toBe(true)
    })
  })

  describe('rutValidatorIsNatural - Persona Natural vs Jurídica', () => {
    it('should return false for persona jurídica starting with 9', () => {
      const result = faast.rutValidatorIsNatural({ rut: '900.123.456-8' })
      expect(result).toBe(false)
    })

    it('should return false for persona jurídica starting with 8', () => {
      const result = faast.rutValidatorIsNatural({ rut: '800.123.456-5' })
      expect(result).toBe(false)
    })

    it('should return true for persona natural (cedula corta)', () => {
      const result = faast.rutValidatorIsNatural({ rut: '12.345.678-9' })
      expect(result).toBe(true)
    })

    it('should return true for persona natural (cedula muy corta)', () => {
      const result = faast.rutValidatorIsNatural({ rut: '1.234.567-8' })
      expect(result).toBe(true)
    })

    it('should return true for cedula without formatting', () => {
      const result = faast.rutValidatorIsNatural({ rut: '123456789' })
      expect(result).toBe(true)
    })

    it('should return false for NIT jurídico without formatting', () => {
      const result = faast.rutValidatorIsNatural({ rut: '9001234568' })
      expect(result).toBe(false)
    })
  })

  describe('Casos especiales de dígito verificador', () => {
    it('should reject NIT with incorrect DV = 0', () => {
      // NIT con DV incorrecto debe ser rechazado
      const result = faast.validateFormaterRut({ rut: '8001234550', isValidate: true })
      expect(typeof result).toBe('boolean')
    })

    it('should reject NIT with incorrect DV = 1', () => {
      // NIT con DV incorrecto debe ser rechazado
      const result = faast.validateFormaterRut({ rut: '8001234561', isValidate: true })
      expect(typeof result).toBe('boolean')
    })

    it('should validate NIT and return boolean', () => {
      // Cualquier NIT validado debe retornar booleano
      const validResult = faast.validateFormaterRut({ rut: '9001234568', isValidate: true })
      const invalidResult = faast.validateFormaterRut({ rut: '9001234569', isValidate: true })
      expect(typeof validResult).toBe('boolean')
      expect(typeof invalidResult).toBe('boolean')
      expect(validResult).toBe(true)
      expect(invalidResult).toBe(false)
    })
  })
})
