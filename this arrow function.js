// Konsep This pada Arrow Function

// constructor function
/*const Murid = function () {
  this.nama = 'Adi';
  this.umur = 21;
  this.sayHello = function() {
    console.log(`Halo, nama saya ${this.nama}, dan saya umur ${this.umur} tahun`);
  }
  setInterval(() => {
    console.log(this.umur++);
  }, 1000);
}
const adi = new Murid();*/


// Contoh Kasus Nyata this Arrow Function

const box = document.querySelector('.box');
box.addEventListener('click', function() {
  let satu = 'size';
  let dua = 'caption';
  
  if(this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});







