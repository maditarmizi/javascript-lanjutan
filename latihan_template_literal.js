// HTML Fragments
/*const mhs = {
    nama: 'Adi',
    umur: 22,
    agama: 'islam'
};
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="umur">${mhs.umur}</span>
</div>`;*/


// Looping 
/*const mhs = [
    {
    nama: 'Mukhamad Adi Tarmizi',
    umur: 22
    },
    {
    nama: 'Afrigh Ilmin Navy W',
    umur: 20
    }
];
const el = `<div class="mhs">
    ${mhs.map(siswa => `<ul>
        <li>${siswa.nama}</li>
        <li>${siswa.umur}</li>
    </ul>`).join('')}

</div>`*/


// pengkodisian ternary
/*const lagu = {
    judul: 'My Cange',
    penyanyi: 'westlife',
    feat: 'noah'
}
const el = `<div class="lagu">  
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
    </ul>

</div>`*/


const mhs = {
    nama: 'Mukhamad Adi Tarmizi',
    semester: 5,
    mataKuliah: [
        'Programming Web',
        'Data Analys',
        'Database System',
        'Rekayasa Web'
    ]
};


function cetakMataKuliah(mataKuliah) {
    return `
    <ol> 
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `
}
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah: 
        ${cetakMataKuliah(mhs.mataKuliah)}
    </h4>
</div>`











document.body.innerHTML = el;