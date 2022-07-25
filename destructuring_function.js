// Destructuring function

/*function kalkulasi(a, b) {
    return [a + b, a - b, a * b];
}*/

/*const [jumlah, kali] = penjumlahanPerkalian(2, 3);
console.log(jumlah);
console.log(kali);*/

/*const [jumlah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,4);
console.log(bagi);*/

// cara tidak urut

/*function kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}
const { kurang, bagi, kali, tambah} = kalkulasi(2, 4);
console.log(bagi);*/


// destructuring function arguments
const mhs2 = {
    nama: 'adi',
    umur: 22,
    email: 'aditarmizi',
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 70
    }
}
/*function cetakMhs(mhs) {
    return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} Tahun.`;
}
console.log(cetakMhs(mhs2));*/


// pakai object
function cetakMhs( { nama, umur,nilai: {tugas, uts, uas} }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} Tahun, dan nilai uts saya adalah ${uas}`;
}

console.log(cetakMhs(mhs2));












