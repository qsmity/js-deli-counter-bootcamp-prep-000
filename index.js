var takeNumber = function(currentLine, newName){
  var num = currentLine.length
  return `Welcome, ${name}. You are the ${num + 1}th in line.`
}

console.log(takeNumber(["ada", "zach", "corey"], "lesly"))

// var nowServing = function(katzDeliLine){
//   if(katzDeliLine.length >= 1){
//   return katzDeliLine[0]
//   katzDeliLine.shift()
//   } else {
//     return "There is nobody waiting to be served!"
//   }
// }

// var currentLine = function(currentLine){
//   if (currentLine > 0){
//   return `the line is currently:`
//   } else {
//     return "The line is currently empty."
//   }
// }