// destructuring variable / assignment

// Destructuring array
const perkenalan = ['halo', 'nama', 'saya', 'M Andi Arsyil'];

/*const[salam, satu, dua, nama] = perkenalan;*/

// cara skip items
/*const[salam, , , nama] = perkenalan;
console.log(dua);*/



// cara swap items / menukar isi dari array
/*let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);*/


//return value pada function

/*function coba() {
    return[1, 2];
}

const [a, b] = coba();
console.log(b);*/

// Rest parameter 
/*const [a, ...values] = [1, 2, 3, 4];

console.log(a);
console.log(values);*/

// destructuring object
/*const mhs = {
    nama: 'Andi',
    umur: 22,
};
const { nama, umur } = mhs;

console.log(nama);*/


// destructuring assignment tanpa deklarasi object

/*({ nama, umur } = {
    nama: 'Andi',
    umur: 22,
});

console.log(umur);*/


// assign ke variable baru
/*const mhs = {
    nama: 'Andi',
    umur: 22,
};
const { nama: n, umur: u } = mhs;

console.log(n);*/


// Memberikan default value
/*const mhs = {
    nama: 'Andi',
    umur: 22,
    email: 'aditarmzi'
};
const { nama, umur, email = 'default@gmailcom' } = mhs;

console.log(email);*/


// memberi nilai default + assign ke variable
/*const mhs = {
    nama: 'Andi',
    umur: 22,
    email: 'aditarmizi@gmail.com'
};
const { nama, umur, email: e = 'default@gmailcom' } = mhs;

console.log(e);*/


// Rest Parameter 

/*const mhs = {
    nama: 'Andi',
    umur: 22,
    email: 'aditarmizi@gmail.com'
};
const { nama, ...value } = mhs;

console.log(value);*/


// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Andi',
    umur: 22,
    email: 'aditarmizi@gmail.com'
};

function getIdMhs(mhs) {
    return mhs.id;
}
console.log(getIdMhs(mhs));






