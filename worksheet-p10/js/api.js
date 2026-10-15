const ALAMAT = 'data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    console.log('status', respons.status, 'ok', respons.ok);
    console.log('Content-Type:', respons.headers.get('content-type'));

    // fetch tidak melempar galat pada 404/500, jadi periksa sendiri
    if (!respons.ok) throw new Error('status ' + respons.status);

    const data = await respons.json(); // teks -> larik/objek
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat; // diteruskan ke app.js, di sana try/catch kedua menampilkannya
  }
}