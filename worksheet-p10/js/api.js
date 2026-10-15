
const ALAMAT =
  'https://raw.githubusercontent.com/' +
  'anindyafarrah37-blip/PABW_ANINDYA-FARRAH_25523056/main/worksheet-p10/data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);

    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }

    const data = await respons.json();

    // C.3: Memeriksa data sebelum ditampilkan
    console.log(data);

    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}