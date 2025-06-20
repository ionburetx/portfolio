import { describe, it, expect } from 'vitest'
import { parsePhotoIndex } from '../utils/photoUtils'

describe('parsePhotoIndex', () => {
  it('devuelve el número entero si es válido', () => {
    expect(parsePhotoIndex('3')).toBe(3)
  })

  it('devuelve 0 si el valor es NaN', () => {
    expect(parsePhotoIndex('abc')).toBe(0)
  })

  it('devuelve 0 si el valor es negativo', () => {
    expect(parsePhotoIndex('-2')).toBe(0)
  })

  it('devuelve 0 si el valor está vacío', () => {
    expect(parsePhotoIndex('')).toBe(0)
  })

  it('devuelve 0 si es null o undefined', () => {
    expect(parsePhotoIndex(null)).toBe(0)
    expect(parsePhotoIndex(undefined)).toBe(0)
  })

  it('ignora espacios alrededor del número', () => {
    expect(parsePhotoIndex('  5  ')).toBe(5)
  })

  it('trunca decimales hacia abajo', () => {
    expect(parsePhotoIndex('7.8')).toBe(7)
  })

  it('acepta 0 como valor válido', () => {
    expect(parsePhotoIndex('0')).toBe(0)
  })
})
