# 📺 Youtube Downloader – Frontend

Website sederhana yang memungkinkan pengguna untuk meng-embed preview video YouTube dan mengunduhnya dalam format MP3 atau MP4. Dibangun dengan HTML, CSS, Bootstrap 5, dan JavaScript Vanilla, serta dirancang untuk terintegrasi dengan backend Node.js.

## 🚀 Fitur

- Embed otomatis video YouTube berdasarkan link
- Validasi input dan tampilan alert yang UX-friendly
- Tombol Download MP3 / MP4 muncul secara dinamis
- Preloader untuk pengalaman pengguna yang halus

## 🧰 Tech Stack

| Bagian     | Teknologi                             |
|------------|----------------------------------------|
| Frontend   | HTML, CSS, Bootstrap 5, JavaScript , Axiom    |
| Ikon       | Font Awesome                          |


## 📦 Struktur Project
├── public/ │ ├── css/ │ │ └── style.css │ ├── js/ │ │ └── script.js ├── index.html


## ⚙️ Cara Penggunaan

1. Paste link video YouTube ke input field.
2. Klik tombol **Search**, video akan otomatis di-embed.
3. Tombol **Download MP3 / MP4** akan muncul.
4. Klik sesuai format yang kamu butuhkan.

> Pastikan backend aktif dan rute download tersedia.

## 🔗 Integrasi dengan Backend

Frontend ini dirancang untuk terhubung dengan backend Node.js yang menangani:
GET /download/mp3?url=<video_url> 
GET /download/highestmp4?url=<video_url>

💬 Feedback dan ide sangat terbuka terima kasih sudah berkunjung
