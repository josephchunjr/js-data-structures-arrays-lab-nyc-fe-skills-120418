// Write your solution here!
const drivers = ["Milo","Otis","Garfield"]
const appendDriver = drivers.slice()

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
  drivers.push()
}