// var takeNumber = function(currentLine, newName){
//   var num = currentLine.length
//   return `Welcome, ${newName}. You are the ${num + 1}th in line.`
// }

// console.log(takeNumber(["ada", "zach", "corey"], "lesly"))

// var nowServing = function(katzDeliLine){
//   if(katzDeliLine.length > 0){
//   const firstPerson = katzDeliLine[0]
//   katzDeliLine.shift()
//   return firstPerson
//   } else {
//     return "There is nobody waiting to be served!"
//   }
// }

// console.log(nowServing([]))

var currentLine = function(currentLine){
  if (currentLine.length > 0){
    for(let i = 0; i < currentLine.length; i++){
      const message = [i] + ": " + currentLine[i]
      console.log(message)
    }
  return `the line is currently:`
  } else {
    return "The line is currently empty."
  }
}

currentLine(["jada", "jason", "jayla"])