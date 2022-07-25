function tugas(mataKuliah, selesai) {
  console.log(`mulai mengerjakan tugas ${mataKuliah}`);
  selesai();
}
function selesai() {
  alert('selesai mengerjakan tugas!');
}
tugas('Pemrograman Web', selesai);