const text = `input here`

const tab = text.split(/\r?\n/).map((el) => [...el])
let shallowTab = tab
let summary = 0
let lastResult = 0
do {
  const usingTable = shallowTab
  const properCoordinates = []
  for (let row = 0; row <= usingTable.length; row++) {
    if (usingTable?.[row]?.length !== 0) {
      for (let col = 0; col <= usingTable[row]?.length; col++) {
        // if (usingTable[row]?.[col]?.length === 0) break
        if (usingTable[row][col] === '@') {
          const topL = usingTable?.[row - 1]?.[col - 1] ?? null
          const top = usingTable?.[row - 1]?.[col] ?? null
          const topR = usingTable?.[row - 1]?.[col + 1] ?? null
          const right = usingTable?.[row]?.[col + 1] ?? null
          const left = usingTable?.[row]?.[col - 1] ?? null
          const bottomL = usingTable?.[row + 1]?.[col - 1] ?? null
          const bottom = usingTable?.[row + 1]?.[col] ?? null
          const bottomR = usingTable?.[row + 1]?.[col + 1] ?? null

          const test = [topL, top, topR, right, left, bottomL, bottom, bottomR]
          let counter = 0
          for (let i = 0; i <= 8; i++) {
            if (test[i] === '@') {
              counter += 1
              if (counter >= 4) break
            }
          }
          if (counter < 4) {
            properCoordinates.push([row, col])
            shallowTab[row][col] = '.'
          }
        }
      }
    }
  }
  lastResult = properCoordinates.length
  summary += properCoordinates.length
} while (lastResult !== 0)
console.log('Summary:', summary)
