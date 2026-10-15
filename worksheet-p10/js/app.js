
import { ambilProyek } from "./api.js";
import { render, tampilkanGalat, aturMemuat, pasangFilter } from "./dom.js";
 

export const profil = {
  nama: "Anindya Farrah",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};
 
function buatPerkenalan({ nama, peran }) {
  return `${nama} - ${peran}`;
}
 
const formatKeahlian = (daftar) => daftar.join(" · ");
 
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log(`Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`);
 

async function muat() {
  aturMemuat(true);

  try {
    const data = await ambilProyek();

    render(data);
    pasangFilter(data);
  } catch (galat) {
    tampilkanGalat(
      "Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman."
    );
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();