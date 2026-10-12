// ============================================
// js/dom.js — Lembar A.3
// Pertemuan 9 — DOM, Event, dan Interaktivitas
// ============================================

// -------------------------------------------------
// LANGKAH 1: Ambil elemen yang sudah ada di HTML
// -------------------------------------------------
const form     = document.querySelector("#Tambah-Minuman-Favorit");
const kolom    = document.querySelectorAll("input[required]");
const pesan    = document.querySelectorAll(".pesan-galat");

// -------------------------------------------------
// UJI CEPAT: pastikan semuanya ketemu (bukan null)
// -------------------------------------------------
console.log("form  :", form);
console.log("kolom :", kolom);
console.log("pesan :", pesan);