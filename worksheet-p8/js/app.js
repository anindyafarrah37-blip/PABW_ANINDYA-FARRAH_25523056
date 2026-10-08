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

function buatPerkenalan({ nama, peran }) {
  return `${nama} - ${peran}`;
}


const formatKeahlian = (daftar) => daftar.join(" · ");


console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


console.log(profil);
console.log(jumlahProyek);
console.log(typeof profil.nama);
console.log(typeof jumlahProyek);

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat)

const daftarProyek = [
  {
    judul: "Website Daftar Minuman Favorit",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Sistem Pesan Minum",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Sistem Informasi KosKita",
    tahun: 2026,
    selesai: false,
  },
];


console.table(daftarProyek);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);


console.table(judulProyek);


const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);


console.table(proyekSelesai);


const proyekKosKita = daftarProyek.find(
  (proyek) => proyek.judul === "Sistem Informasi KosKita"
);


console.log(proyekKosKita);

const urut = [...daftarProyek].sort((a, b) =>
  a.judul.localeCompare(b.judul)
);


console.table(urut);
console.table(daftarProyek);