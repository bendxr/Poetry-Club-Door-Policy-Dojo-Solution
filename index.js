const assert = require('assert');
const acrostics = require('./acrostics');
const dojo = require('./dojo');

const recite = (poem, fn) => {
  return poem.map(line => fn(line)).join('');
}

const tellPassword = (poem, fnPassword, fnWord) => {
  return fnPassword(recite(poem, fnWord));
}

const tellFrontPassword = (poem) => {
  return tellPassword(poem, dojo.frontDoorPassword, dojo.frontDoorResponse);
}

const tellBackPassword = (poem) => {
  return tellPassword(poem, dojo.backDoorPassword, dojo.backDoorResponse);
}

assert.strictEqual(recite(acrostics.poem1, dojo.frontDoorResponse), 'SHIRE');
assert.strictEqual(recite(acrostics.poem1, dojo.backDoorResponse), 'horse');

assert.strictEqual(dojo.frontDoorResponse('SHIRE'), 'S');
assert.strictEqual(dojo.frontDoorPassword('SHIRE'), 'Shire');
assert.strictEqual(dojo.backDoorResponse('horse'), 'e');
assert.strictEqual(dojo.backDoorPassword('horse'), 'Horse, please');

assert.strictEqual(tellFrontPassword(acrostics.poem1), 'Shire');
assert.strictEqual(tellBackPassword(acrostics.poem1), 'Horse, please');

assert.strictEqual(tellFrontPassword(acrostics.poem2), 'Writing');
assert.strictEqual(tellBackPassword(acrostics.poem2), 'Therapy, please');

assert.strictEqual(tellFrontPassword(acrostics.poem3), 'Balance');
assert.strictEqual(tellBackPassword(acrostics.poem3), 'Deepens, please');

module.exports = {
  tellFrontPassword, 
  tellBackPassword
};