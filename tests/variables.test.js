let alexisVariables
let jdVariables
let samVariables

try {
  alexisVariables = require('../src/alexis/variables')
  jdVariables = require('../src/jd/variables')
  samVariables = require('../src/sam/variables')
} catch (error) {
  console.error('Error requiring', error)
}

describe('variables', () => {
  test('alexis', () => {
    expect(alexisVariables()).toBe(3)
  })
  test('jd', () => {
    expect(jdVariables()).toBe(3)
  })
  test('sam', () => {
    expect(samVariables()).toBe(3)
  })
})
