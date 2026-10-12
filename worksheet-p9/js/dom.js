// ============================================
// js/dom.js — Lembar A.3
// Pertemuan 9 — DOM, Event, dan Interaktivitas
// ============================================

import { daftarProyek } from "./app.js";

const form     = document.querySelector("#Tambah-Minuman-Favorit");
const kolom    = document.querySelectorAll("input[required]");
const pesan    = document.querySelectorAll(".pesan-galat");

// -------------------------------------------------
// UJI CEPAT: pastikan semuanya ketemu (bukan null)
// -------------------------------------------------
console.log("form  :", form);
console.log("kolom :", kolom);
console.log("pesan :", pesan);

// -------------------------------------------------
// LANGKAH 2: Ambil wadah daftar & pesan kosong
// -------------------------------------------------
const wadah  = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");

console.log("wadah :", wadah);
console.log("kosong:", kosong);

// -------------------------------------------------
// Fungsi buatKartu: satu proyek → satu <li>
// -------------------------------------------------
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = proyek.judul;      // pakai textContent = aman dari XSS

  const info = document.createElement("p");
  info.textContent = `${proyek.tahun} · ${proyek.selesai ? "Selesai" : "Proses"}`;

  li.append(judul, info);
  return li;
}

// -------------------------------------------------
// Fungsi render: kosongkan → cek kosong → isi ulang
// -------------------------------------------------
function render(daftar) {
  wadah.textContent = "";               // 1. KOSONGKAN lebih dulu

  if (daftar.length === 0) {            // 2. cek keadaan kosong
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;                 // 3. isi ulang
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
}

// Render awal: semua proyek
render(daftarProyek);

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;
  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );
  render(terpilih);
  tandaiTombolAktif(tombol);
});

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((t) => {
    t.classList.toggle("aktif", t === tombolAktif);
  });
}

render(daftarProyek); 

// ============================================
// LEMBAR C — Filter dengan satu pendengar di induk
// ============================================
const barisFilter = document.querySelector("#filter");
console.log("barisFilter:", barisFilter);

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; // klik di luar tombol, abaikan

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);           // gambar ulang daftar
  tandaiTombolAktif(tombol);  // tandai tombol yang aktif
});

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// ============================================
// LEMBAR D — Validasi form
// ============================================
const formProyek = document.querySelector("#form-proyek");
console.log("formProyek:", formProyek);

formProyek.addEventListener("submit", (event) => {
  event.preventDefault();     // halaman TIDAK reload

  const semuaKolom = Array.from(formProyek.querySelectorAll("input[required]"));
  let adaMasalah = false;
  let kolomPertamaBermasalah = null;

  semuaKolom.forEach((input) => {
    const pesan = input.parentElement.querySelector(".pesan-galat");
    const sah = input.value.trim() !== "";

    input.setAttribute("aria-invalid", sah ? "false" : "true");
    if (pesan) pesan.hidden = sah;    // sembunyikan bila sah

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