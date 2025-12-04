const text = `input here`

const moves = text.split(/\r?\n/).map((el) => [...el])

let leftDial = 50
let rightDial = 50
let leftNum = 0
let rightNum = 0

function spin(amount, number, site){
  
    if(site==='R'){

    }else{

    }
}

for(move of moves){ 
  amount = parseFloat(move.substring(1,2))
  console.log('amount', amount)

  if(move[0] === 'R'){
    const result = spin(amount, rightDial, 'R')
    if(result === 0) rightNum ++
  }
  
  if(move[0] === 'L'){
    const result = spin(amount, leftDial, 'L')
    if(result === 0) leftNum ++
  }
}

// tab.forEach((move)=>{ 
  
// })
