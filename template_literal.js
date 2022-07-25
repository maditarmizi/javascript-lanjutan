// template literal
const nama = 'Mukhamad Adi Tarmizi';
const umur = 21;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// embedded expression
const x = 10;
console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);

// HTML Fragments
const mhs = {
    nama: 'Adi',
    umur: 22,
    agama: 'islam'
};
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="umur">${mhs.umur}</span>
</div>`;
console.log(el);