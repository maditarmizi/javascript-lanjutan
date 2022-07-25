/*function init() {
  let nama = 'Adi';
  function tampilNama() {
    console.log(nama);
  }
  console.log(tampilNama);
}
init();*/



/* Contoh Function Factory */
/*function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}, semoga hari ini menyenangkan`);
  }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

console.dir(selamatPagi('Adi'));*/


// Private Method
let add = (function() {
  let counter = 0;
  return function() {
    return ++counter;
  }
}) ();


console.log(add());
console.log(add());
console.log(add());
console.log(add());







