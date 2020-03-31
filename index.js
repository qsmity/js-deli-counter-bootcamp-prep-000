// var takeNumber = function(currentLine, newName){
//   var num = currentLine.length
//   return `Welcome, ${newName}. You are the ${num + 1}th in line.`
// }

// console.log(takeNumber(["ada", "zach", "corey"], "lesly"))

var nowServing = function(katzDeliLine){
  if(katzDeliLine.length > 0){
  const firstPerson = katzDeliLine[0]
  katzDeliLine.shift()
  console.log(katzDeliLine)
  return firstPerson
  } else {
    return "There is nobody waiting to be served!"
  }
}

console.log(nowServing(["Ada,", "jackson", "jeffery"]))
// var currentLine = function(currentLine){
//   if (currentLine > 0){
//   return `the line is currently:`
//   } else {
//     return "The line is currently empty."
//   }
// }