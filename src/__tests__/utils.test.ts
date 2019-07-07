import { limitRange } from '../utils'

describe('边界测试', () => {
  it('should be 0', () => {
    const r = limitRange(-100, 0, 20)
    expect(r).toBe(0)
  })

  it('should be 20', () => {
    const r = limitRange(100, 0, 20)
    expect(r).toBe(20)
  })

  it('should be 10', () => {
    const r = limitRange(10, 0, 20)
    expect(r).toBe(10)
  })
})
