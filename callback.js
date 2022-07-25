// Materi Callback
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }
// function tampiilkanPesan(message) {
//     const namaKamu = prompt('Masukkan Nama : ');
//     message(namaKamu);
// }

// tampiilkanPesan(halo);




// const mhs = [
//     {
//         "nama": "Mukhamad Adi Tarmizi",
//         "Kelas": "Web Developer",
//         "email": "aditarmizi",
//         "idCard": 1

//     },
//     {
//         "nama": "Afrigh Ilmin Navy Wiyono",
//         "Kelas": "Front end Developer",
//         "email": "afrighgcgg",
//         "idCard": 1

//     }
// ];

// console.log('mulai');
// mhs.forEach(m =>  {
//     for( let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');


// Asynchronous Callback
// Pakai Vanilla Javascript / Javascript Murni

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();  // object AJAX

//     // melakukan request secara asynchronous
//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4) {
//             if( xhr.status === 200 ) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('mahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');




// Asynchronous Callback
// pakai Plugin Jquery
console.log('mulai');

$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responText);
    }
})
console.log('selesai');



