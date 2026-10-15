
 
const wadah     = document.querySelector("#daftar");
const kosong    = document.querySelector("#kosong");
const memuat    = document.querySelector("#muat");
const galat     = document.querySelector("#galat");
const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
 
  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = proyek.judul;      
 
  const info = document.createElement("p");
  info.textContent = `${proyek.tahun} · ${proyek.selesai ? "Selesai" : "Proses"}`;
 
  li.append(judul, info);
  return li;
}
 

export function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.textContent = "Belum ada proyek untuk ditampilkan.";
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

 

export function aturMemuat(sedangMemuat) {
  memuat.hidden = !sedangMemuat;
}
 

export function tampilkanGalat(pesan) {
  wadah.textContent = "";
  kosong.hidden = true;
  galat.textContent = pesan;
  galat.hidden = false;
}

 
export function pasangFilter(daftar) {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;                 
 
    const kategori = tombol.dataset.kategori;
    const terpilih = daftar.filter(
      (proyek) => kategori === "semua" || proyek.kategori === kategori
    );
 
    render(terpilih);
    tandaiTombolAktif(tombol);
  });
}
 
function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}
 

const formProyek = document.querySelector("#form-proyek");
 
if (formProyek) {
  formProyek.addEventListener("submit", (event) => {
    event.preventDefault();              
 
    const semuaKolom = Array.from(formProyek.querySelectorAll("input[required]"));
    let adaMasalah = false;
    let kolomPertamaBermasalah = null;
 
    semuaKolom.forEach((input) => {
      const pesan = input.parentElement.querySelector(".pesan-galat");
      const sah = input.value.trim() !== "";
 
      input.setAttribute("aria-invalid", sah ? "false" : "true");
      if (pesan) pesan.hidden = sah;
 
      if (!sah) {
        adaMasalah = true;
        if (!kolomPertamaBermasalah) kolomPertamaBermasalah = input;
      }
    });
 
    if (adaMasalah) {
      kolomPertamaBermasalah.focus();
      return;
    }
 
    console.log("✅ Form valid, siap dikirim");
    formProyek.reset();
  });
 
  // Sembunyikan pesan galat saat pengguna mengetik
  formProyek.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      const pesan = input.parentElement.querySelector(".pesan-galat");
      if (pesan && input.value.trim() !== "") {
        pesan.hidden = true;
        input.setAttribute("aria-invalid", "false");
      }
    });
  });
}
 