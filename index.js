// Write your solution here!
const drivers = ["Milo","Otis","Garfield"]


function destructivelyAppendDriver(newName) {
  drivers.push(newName)
}
function destructivelyPrependDriver(newName) {
  drivers.unshift(newName)
}
function destructivelyRemoveLastDriver(newName) {
  drivers.pop(newName)
}
function destructivelyRemoveFirstDriver(newName) {
  drivers.shift(newName)
}
function appendDriver(newName) {
  const appendDriver = [...drivers, newName];
  return appendDriver
}
function prependDriver(newName) {
  const prependDriver = [newName, ...drivers];
  return prependDriver
}
function removeLastDriver() {
  const removeLastDriver = [...drivers];
  return removeLastDriver.pop()
}