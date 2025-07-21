 function src() {
    const iframe = document.getElementById('yt');
     const link = document.getElementById('search').value;
     const button = document.getElementById('buttonD');

     if(link.length <=41) {
    alert("Masukan Link Yang Valid!");
    return; 
    }

    var linkEmbed;
    if(link.includes("watch?v=")){
      linkEmbed = link.replace('watch?v=' , "embed/").slice(0,41);
    }else if(link.includes("youtu.be/")){
      linkEmbed = link.replace('youtu.be/' , "www.youtube.com/embed/").slice(0,41);
      console.log(linkEmbed)
    }
    iframe.src = linkEmbed;
    button.classList.remove("hilang");
    button.classList.add("d-flex");
    iframe.classList.remove("hilang");
     }

   
  




function downloadMP3() {
  const link = document.getElementById('search').value;
  const preloader = document.getElementById('preloader');
  const iframe = document.getElementById('yt');
  if(!link) return "Masukan Link Terlebih Dahulu";

  preloader.style.display = 'block'; 


  axios.get(`http://192.168.1.100:7888/mp3?url=${encodeURIComponent(link)}`, {
    responseType: 'blob'
  })
  .then(res => {
    const blob = new Blob([res.data], {
      type: res.headers['content-type'] || 'audio/mpeg'
    });
    const downloadURL = URL.createObjectURL(blob);
    const filename = res.headers['x-filename'] || 'download.mp3';

    const a = document.createElement('a');
    a.href = downloadURL;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
  .catch(err => {
    console.error('Gagal download:', err.message);
    alert('Terjadi kesalahan saat mendownload');
  })
  .finally(() => {
    preloader.style.display = 'none'; 
  });
}

function downloadMP4() {
  const link = document.getElementById('search').value;
  const preloader = document.getElementById('preloader');
  const iframe = document.getElementById('yt');
  if(!link) return "Masukan Link Terlebih Dahulu";

  preloader.style.display = 'block'; 


  axios.get(`http://192.168.1.100:7888/highestmp4?url=${encodeURIComponent(link)}`, {
    responseType: 'blob'
  })
  .then(res => {
    const blob = new Blob([res.data], {
      type: res.headers['content-type'] || 'video/mp4'
    });
    const downloadURL = URL.createObjectURL(blob);
    const filename = res.headers['x-filename'] || 'download.mp4';

    const a = document.createElement('a');
    a.href = downloadURL;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
  .catch(err => {
    console.error('Gagal download:', err.message);
    alert('Terjadi kesalahan saat mendownload');
  })
  .finally(() => {
    preloader.style.display = 'none'; 
  });
}



 //preload
 window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    loader.style.display = 'none';
  });

 