var katzDeliLine = [];

function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName)
  return `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
 if (katzDeliLine.length > 0) {
  return `Currently serving ${katzDeliLine.shift()}.`
 }
 else {
  return "There is nobody waiting to be served!"
 }
}
 