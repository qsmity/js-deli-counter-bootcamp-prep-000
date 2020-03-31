var takeNumber = function(currentLine, newName){
  return `Welcome, ${name}. You are the ${currentLine}th in line.`
}

var nowServing = function(katzDeliLine){
  if(katzDeliLine.length >= 1){
  return katzDeliLine[0]
  katzDeliLine.shift()
  } else {
    return "The line"
  }
}