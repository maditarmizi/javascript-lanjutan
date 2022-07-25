// cara penggunanan looping for.. of
// 1. Looping Array
// const mhs = ['adi', 'afrigh', 'ayu'];

// pakai for biasa
/*for( let i = 0; i < mhs.length; i++) {
  */

// pakai forEach
/*mhs.forEach(m => console.log(m));*/

// pakai for in
/*for (const m of mhs) {
    console.log(m);
}*/


// 2. Looping String

// const nama = 'Adi';
// for (const n of nama) {
//     console.log(n);
// }


const mhs = ['adi', 'afrigh', 'ayu'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// });


// pakai for of, nagakalin pakai method entries()
// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// }


// 3. Pakai NodeList
const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent));

// for ( n of liNama ) {
//     console.log(n.innerHTML);
// }


// 4. Pakai Arguments

// function jumlahAngka() {
//     let jumlah = 0;
//     for ( j of arguments ) {
//         jumlah += j;
//     }
//     return jumlah;
// }
// console.log(jumlahAngka(1, 2, 3, 4));




// cara penggunaan looping for...in

// const siswa = {
//     nama: 'adi',
//     umur: 22,
//     kelas: 1
// }
// for ( s in siswa ) {
//     console.log(siswa[s]);
// }



