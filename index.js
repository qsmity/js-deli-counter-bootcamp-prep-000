var takeNumber = function(currentLine, newName){
  return `Welcome, ${name}. You are the ${currentLine}th in line.`
}

var nowServing = function(katzDeliLine){
  if(katzDeliLine.length >= 1){
  return katzDeliLine[0]
  katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}

var currentLine = function(currentLine){
  if (currentLine > 0){
  return `the line is currently:`
  } else {
    return 
  }
}