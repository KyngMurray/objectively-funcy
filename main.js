// Your code here.

// if you want to "get" something in a function - you must return the object.

function getFirstName (obj){
  return obj.firstName
}

// =====================================================================================================

function getLastName (obj){
  return obj.lastName
}

// =====================================================================================================

function getFullName (person){
  return person.firstName + " " + person.lastName
}

// =====================================================================================================

// if you want to "set" something in a function - you do not have to return.
function setFirstName (person, newFirstName){
  person.firstName = newFirstName;
}

// =====================================================================================================

function setAge (person, newAge){
  person.age = newAge
}

// =====================================================================================================

function giveBirthday(person) {
  if (person.age === undefined) {
    return person.age = 1
  } else {
    return person.age += 1
  }
}

// =====================================================================================================

function marry(person1, person2){
  person1.married = true;
  person2.married = true;

  person1.spouseName = getFullName(person2);
  person2.spouseName = getFullName(person1);
}

// =====================================================================================================

function divorce (person1, person2){
  person1.married = false
  person2.married = false
  delete person1.spouseName
  delete person2.spouseName
}

// =====================================================================================================

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
