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