const _crypto = require("crypto-js"); 

/// AES 256
var _password = '123456'; 
var _textToEncrypt = 'Holi luis!';

const encrypt = function (text) {
  return (_crypto.AES.encrypt(text, _password)).toString();
}

const decrypt = function (ciphertext) {
  var bytes  = _crypto.AES.decrypt(ciphertext, _password);
  return bytes.toString(_crypto.enc.Utf8);
}

var _cipherText = encrypt(_textToEncrypt);
var _uncipherText = decrypt(_cipherText);

console.log(`Encrypted message: ${_cipherText}`);
console.log(`Decrypted message: ${_uncipherText}`);

/*
    Encrypted message: U2FsdGVkX1+w9hh0g7LvlwTkdyWPIzVowJ5ubH9mG04=
    Decrypted message: Holi luis!
*/


const { generateKeyPair } = require('crypto');
generateKeyPair('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'Holi Luis'
  }
}, (err, publicKey, privateKey) => {
  // Handle errors and use the generated key pair.
});