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
    var message
    for(let i = 0; i < currentLine.length; i++){
     message = [i+1] + ". " + currentLine[i]
      
    }
    return `The line is currently: ${message}`
  } else {
    return "The line is currently empty."
  }
}

console.log(currentLine(["jada", "jason", "jayla"]))