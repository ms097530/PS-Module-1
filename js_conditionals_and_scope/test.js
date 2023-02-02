// looks for faveColor at global scope -- does not exist -> error 
// including this log will throw an exception and cause global declaration below to not happen
// console.log(faveColor)

// declares faveColor at global scope -- can not be accessed globally in files executing after this one
let faveColor = 'blue'