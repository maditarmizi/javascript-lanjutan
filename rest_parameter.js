// Materi Rest Parameter

// function myFunc(a,...myArgs) {
//     // return myArgs;
// }
// console.log(myFunc(1,2,3,4,5));


// function jumlahkan(...angka) {

//     // looping pakai for of
//     // let total = 0;
//     // for (const a of angka ) {
//     //     total += a;
//     // }
//     // return total;

//     // pakai higher order function
//     return angka.reduce((a,b) => a + b);
// }
// console.log(jumlahkan(1,2,3,4,5,6));


// array destructuring
// const kelompok1 = ['adi', 'dinda', 'afrigh', 'risma'];
// const [ketua, wakil,...anggota] = kelompok1;
// console.log(anggota);



// object destructuring
// const team = {
//     fr: 'adi',
//     be: 'Galih',
//     ux: 'Sandhika'
// }

// const { pm, ...myTeam } = team;
// console.log(pm);



// filtering 

// function filterBy(type, ...values) {
//     return values.filter(v => typeof v === type);
// }
// console.log(filterBy('boolean',1,2,3,4,5,'adi',false, 10, true, 'afrigh'));








