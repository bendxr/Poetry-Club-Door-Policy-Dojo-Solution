function frontDoorResponse(sentence) {
  return sentence.charAt(0);
  // return '';
}

function frontDoorPassword(word) {
  return capitalize(word);
  // return '';
}

function backDoorResponse(sentence) {
  return sentence.charAt(sentence.length-1);
  // return '';
}

function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please';
  // return '';
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = {
  frontDoorResponse, 
  frontDoorPassword, 
  backDoorResponse, 
  backDoorPassword
};