const phoneMap = new Map([
  ['2', ['a', 'b', 'c']],
  ['3', ['d', 'e', 'f']],
  ['4', ['g', 'h', 'i']],
  ['5', ['j', 'k', 'l']],
  ['6', ['m', 'n', 'o']],
  ['7', ['p', 'q', 'r', 's']],
  ['8', ['t', 'u', 'v']],
  ['9', ['w', 'x', 'y', 'z']]
])

let results = []

const backtrack = (combo, phoneNumber) => {
  if (phoneNumber.length === 0) { return results.push(combo) }

  phoneMap.get(phoneNumber[0]).forEach(letter => {
    backtrack(`${combo}${letter}`, phoneNumber.slice(1))
  })
}

export const retrieveMnemonics = (phoneNumber) => {
  results = []

  if (!phoneNumber) { return [] }

  if (phoneNumber.length === 1) {
    return phoneMap.get(phoneNumber[0])
  }

  backtrack("", phoneNumber)

  return results
}
