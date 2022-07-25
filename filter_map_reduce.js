
// BAB 9 - Materi Filter, Map, Reduce
// Mencari angka >= 3 Pakai For
const angka = [-1,8,9,1,4,-5,-4,3,2,7];
/*const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if(angka[i] >= 3 ) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);*/

// Menggunakan Filter 
/*const newAngka = angka.filter(a => a >= 3);
console.log(newAngka);*/

// Menggunakan Map kalikan semua angka dengan 2
/*const newAngka = angka.map(a => a * 2);
console.log(newAngka);*/
// Reduce | jumlahkan seluruh elemen pada array

/*const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newAngka);*/

// Method Chaining | cari angka > 5, kalikan 5, lalu jumlahkan
const hasil = angka.filter(a => a > 5)
 .map(a => a * 5)
 .reduce((acc, cur) => acc + cur);
 console.log(hasil);


