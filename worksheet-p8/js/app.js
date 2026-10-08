const profil = {
  nama: "Anindya Farrah",
  peran: "Mahasiswa Informatika",
  keahlian: [
    "HTML",
    "CSS",
    "JavaScript"
  ],
};


const jumlahProyek = 1;


console.log(profil);
console.log(jumlahProyek);
console.log(typeof profil.nama);
console.log(typeof jumlahProyek);

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat)