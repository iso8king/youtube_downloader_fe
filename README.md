📺 Youtube Downloader – Frontend
Website sederhana untuk menampilkan preview video YouTube dan menyediakan opsi download MP3/MP4 secara praktis dan cepat. Dibangun dengan HTML, CSS, Bootstrap, dan JavaScript vanilla, serta siap diintegrasikan dengan backend Node.js..


🖥️ Fitur
Embed otomatis video dari link YouTube

Validasi input yang UX-friendly (alert dan feedback visual)

Tombol download MP3 dan MP4 yang muncul dinamis sesuai link

Preloader untuk pengalaman pengguna yang lebih smooth

Responsive UI dengan Bootstrap 5

🛠️ Tech Stack
Bagian	Teknologi
Frontend	HTML, CSS, Bootstrap 5, JavaScript Vanilla
Ikon	Font Awesome
Hosting	Vercel
📦 Struktur Project
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
├── index.html
⚙️ Cara Penggunaan
Paste link video YouTube ke input field.

Klik tombol Search, video akan otomatis di-embed.

Tombol Download MP3 / MP4 akan muncul.

Klik sesuai format yang kamu butuhkan.

Pastikan backend sudah aktif dan route download terhubung.

🔌 Integrasi dengan Backend
Frontend ini dirancang untuk terhubung dengan backend YouTube Downloader Node.js yang menangani:

GET /download/mp3?url=...

GET /download/mp4?url=...

Pastikan backend menggunakan ytdl-core dan ffmpeg untuk konversi format.
