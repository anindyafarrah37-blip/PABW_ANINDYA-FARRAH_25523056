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

    console.log(data[0].judul);
    const badan = JSON.stringify({
      judul: 'Judul contoh',
     kategori: 'web'
});

console.log(typeof badan);
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat; 
  }
}