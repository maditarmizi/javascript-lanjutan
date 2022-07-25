// function expression
/*const tampilNama = function(nama) {
  return `Halo, ${nama}`;
}
console.log(tampilNama('Adi'));*/

// Arrow function
/*const tampilNama = (nama) => { return `Halo, ${nama}`; }
console.log('Adi Tarmizi');*/

// Parameter 2
/*const saya = (nama,waktu) => {
  return `Selamat, ${waktu} ${nama}`;
}
console.log(saya('M Adi Tarmizi', 'Malam'));*/


// implisit return / return tidak ditulis
/*const tampilNama = nama => `Halo, ${nama}`; 
console.log('Adi Tarmizi');*/

// tanpa Parameter
/*const nama = () => `Hello world!`;
console.log(nama());*/

// kasus 1 
let murid = ['Adi', 'Azmi', 'Putri'];

/*let jmlHuruf = murid.map(function (nama) {
  return nama.length;
});
console.log(jmlHuruf);*/

// kasus 2 pakai arrow functon
/*let jmlHuruf = murid.map( nama => nama.length);
console.log(jmlHuruf);*/

// mengembalikan pakai object

/*let jmlHuruf = murid.map( nama => ({ nama, jmlHuruf: nama.length}));
console.log(jmlHuruf);*/














