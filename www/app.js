const $ = id => document.getElementById(id);
$('send').onclick = () => {
  const msg = $('message').value.trim();
  $('status').textContent = msg ? 'Demo: pesan siap. Konfigurasi Firebase dan autentikasi belum dipasang.' : 'Isi pesan terlebih dahulu.';
};
$('save').onclick = () => $('status').textContent = `Demo: jadwal ${$('time').value} disimpan di tampilan ini.`;
if (window.FIREBASE_CONFIG) $('connection').textContent = 'Konfigurasi ditemukan; integrasi autentikasi/database perlu diaktifkan.';
