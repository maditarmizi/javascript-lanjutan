// Execution Context, Hoisting, Scope

/*console.log(nama);
var nama = 'adi';*/

// Creation Phase pada Global Context
// membuat nama var = undefined
// lalu kalau ada nama function = fn()
// konsep diatas disebut dengan Hoisting / istilahnya mengerek bendera
// JavaScript mendefinisikan object window = global & this = window

/*console.log(sayHello());
var nama = 'adi';
var umur = 21;

function sayHello() {
  return `Hallo, nama saya ${this.nama}, umur saya masih ${this.umur} tahun`;
}*/

// function membuat Local Execution Context
// yang di dalamnya terdapat Creation & Execution Phase
// window
// arguments

// kasus 2 
/*var nama = 'M Adi Tarmizi';
var username = '@maditarmz';

function cetakURL(username) {
  var InstagramURL = 'https://instagram.com/';
  return InstagramURL + username;
}
console.log(cetakURL(username));*/













