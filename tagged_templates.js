// tagged Templates

/*const nama = 'Adi';
const umur = '22';

function coba(strings, ...values) {
    /*let hasil = '';
    strings.forEach((str, i) => {
        hasil += `${str}${values[i] || ''}`;
    });
    return hasil;*/

    // cara pakai reduce
    /*return strings.reduce((hasil, str, i) => `${hasil}${str}${values[i] || ''}`, '');
    
}
const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);*/


// Highlight

const nama = 'Adi';
const umur = '22';
const email = 'aditarmizi795@gmail.com'

function highlight(strings, ...values) {
    
    // cara pakai reduce
    return strings.reduce((hasil, str, i) => `${hasil}${str}<span class="hl">${values[i] || ''}</span>`, '');
    
}
const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun. dan email saya adalah : ${email}.`;
document.body.innerHTML = str;






