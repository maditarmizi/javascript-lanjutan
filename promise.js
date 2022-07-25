// Materi Promise
// Apa Itu Promise? Promise Artinya Janji
// Definisi Promise adalah Sebuah Object Yang mempresentasikan keberhasilan / kegagalan dari sebuah event yang asynchronous yang akan terjadi di massa yang akan datang.
// yang nama nya JANJI pasti ada 2 kan : (Terpenuhi / Ingkar Janji)
// kalau di javascript disebut dengan states (fulfilled / Rejected / pending)
// untuk menjalankan keadaan ini ada 3 fungsi Callback yang kalian perlu ingat
// Callback (Resolve / reject / finally )
// aksi (then / catch)

// contoh promise 1 
// let ditepati = false;
// const janjiKamu = new Promise((resolve, reject) => {
//     if( ditepati ) {
//         resolve('JanjiKu telah ditepati');
//     } else {
//         reject('Kamu Telah Ingkar Janji');
//     }
// });

// janjiKamu
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));


//  contoh 2
// let ditepati = true;
// const janjiKamu = new Promise((resolve, reject) => {
//     if( ditepati ) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu');
//         }, 2000);
//     }
// });

// console.log('Mulai');
// // console.log(janjiKamu.then(() => console.log(janjiKamu)))
// janjiKamu
//     .finally(() => console.log('Selesai menunggu'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));
// console.log('Selesai');


// Method Promise
// 1. Promise.all

const film = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'adi',
        }])
    }, 2000)
})

const cuaca = new Promise( resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Pasuruan',
            kondisi: 'Panas'
        }])
    }, 1000)
})

Promise.all([film, cuaca])
//    .then(response => console.log(response));

// cara memecah array pakai spread Operator

.then( response => {
    const[film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
})























