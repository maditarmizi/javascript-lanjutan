// ambil semua elemen materi Pembelajaran
const materi = Array.from(document.querySelectorAll('[data-duration]'));
// pilih hanya yang "MATERI JAVASCRIPT"
let materiJs = materi.filter(video => video.textContent.includes('Belajar Javascript'))
// Ambil durasi masing2 materi 
.map(item => item.dataset.duration)
// Ubah durasi menjadi Float, ubah menit menjadi detik 
.map(time => {
    // 10:30 dipecah menjadi array [10,30] <= Cara Split
    const updates = time.split(':').map(update => parseFloat(update));
    return (updates[0]) * 60 + updates[1];
})
// jumlahkan semua detik
.reduce((total, detik) => total + detik);
// ubah formatnya menjadi Jam, Menit, Detik
const jam = Math.floor(materiJs / 3600); // pembulatan ke bawah pakai floor
materiJs = materiJs - jam * 3600;
const menit = Math.floor(materiJs / 60);
const detik = materiJs - menit * 60;
// Simpan di DOM (Document Object Model)
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlMateri = materi.filter(video => video.textContent.includes('Belajar Javascript')).length;
const pJmlMateri = document.querySelector('.jumlah-materi');
pJmlMateri.textContent = `${jmlMateri} Materi.`;
console.log(jmlMateri);