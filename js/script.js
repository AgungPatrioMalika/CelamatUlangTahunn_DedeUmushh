const btnUcapan = document.getElementById('btnUcapan');
const kueClick = document.getElementById('kueClick');
const fallingObjects = document.querySelector('.falling-objects');
const audioGlit = document.getElementById("myAudioGlit");
const audio = document.getElementById("myAudio");

// showCard();
btnUcapan.addEventListener('click', () => {
    let timerInterval;
    audioGlit.play();
    audioGlit.volume = 0.1; 
    document.getElementById('containerUcapan').style.display = 'none';
    Swal.fire({
      title: "Eumhhhhh apaa yaaaaa <br> Ngga jadi dehh heheh <br> &#128518; <br> Becanda! wkwkkwkw <br> Siap - Siap ya! <br>",      
      timer: 10000,
      timerProgressBar: FinalizationRegistry,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {          
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);        
      }
    }).then((result) => {      
      if (result.dismiss === Swal.DismissReason.timer) {
          Swal.fire({
            title: "This Is So Special<br> 😉 For You Beib 😉",
            confirmButtonText: "Ayo!",            
            width: 420,
            padding: "2em",
            color: "#716add",
            allowOutsideClick: false,
            background: "#fff url(images/yellow-dragon-nailong.gif)",
            backdrop: `
              rgba(0,0,123,0.4)
              `
          }).then((result) => {
            Swal.fire({
              title : "Udah Siap Sayang??!<br> 😂😂 <br> Teken Ok kalo udah siap",              
              confirmButtonText: "OK SAYANG",
              timerProgressBar: FinalizationRegistry,
              allowOutsideClick: false
            }).then((result) => {
              if (result.isConfirmed) {
                audioGlit.muted = true ;
                document.getElementById('hitungMundur').style.display = 'block'; // Ubah ke 'block' untuk menampilkan
                countdown();
                audio.play();
                audio.volume = 1.0;
              }
            });
          });
      }      
    });    
  });

kueClick.addEventListener('click', () => {
  Swal.fire({
    title: " 😗HAPPY BIRTHDAY DEDE UMUSH😗 <br> 😁 Kado Dari Mas Nyusul Ya Cantik 😁",
    width: 600,
    allowOutsideClick: false,
    confirmButtonText: 'Oke Mass',
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  }).then((result) => {
    Swal.fire({
      title : "LAPYUU 😗😗😋😋",      
      timer: 2000,
      timerProgressBar: FinalizationRegistry,
      allowOutsideClick: false,
      showConfirmButton:false
    });
  });
});

  let count = 10; // Durasi hitung mundur
  const countdownElement = document.getElementById('countdown');
  
  function countdown() {
    countdownElement.textContent = count;
    countdownElement.classList.add('zoomOut');
  
    setTimeout(function() {
      countdownElement.classList.remove('zoomOut');
      count--;
  
      if (count >= 0) {
        setTimeout(countdown, 1000); // Ulangi setiap 1 detik
      } else {
        document.getElementById('hitungMundur').style.display = 'none';
        Swal.fire({
          title: "HAPPY BIRTHDAY HONEYYY <br> 🎉❤️❤️❤️🎉",
          text: "😭😭ayangg makin gede gess 😭😭",
          imageUrl: "images/ayang1.jpg",
          imageWidth: 400,
          imageHeight: 400,
          imageAlt: "Custom image",
          showConfirmButton:false,
          timer: 5000,
          timerProgressBar: FinalizationRegistry,
          allowOutsideClick: false
        }).then((result)=> {
          Swal.fire({            
            title: "",
            didOpen: () => {
              const content = Swal.getPopup().querySelector('.swal2-html-container');
              const text = "Sehat Selalu 🤲🏻,Berkah Umur Nya 🤲🏻,Jadi Anak Yang Berbakti Sama Orang Tua 🤲🏻,Banyak Rezekinya 🤲🏻 🥰🥰😘";
              let i = 0;
          
              function typeWriter() {
                if (i < text.length) {
                  content.innerHTML += text.charAt(i);
                  i++;
                  setTimeout(typeWriter, 100); // Kecepatan mengetik
                }
              }          
              typeWriter(); // Mulai animasi
            },          
            imageUrl: "images/ayang4.jpg",
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: "Custom image",
            showConfirmButton:false,
            timer: 15000,
            timerProgressBar: FinalizationRegistry,
            allowOutsideClick: false
          }).then((result) => {
            Swal.fire({            
              title: "",
              didOpen: () => {
                const content = Swal.getPopup().querySelector('.swal2-html-container');
                const text = "Jadi anak yang shalehah 🤲🏻,Cita - cita nya cepet terwujud 🤲🏻,Berkah rezekinya 🤲🏻,yang terbaik semua deh pokok nya 🤲🏻 🥰🎉😍😍";
                let i = 0;
            
                function typeWriter() {
                  if (i < text.length) {
                    content.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100); // Kecepatan mengetik
                  }
                }          
                typeWriter(); // Mulai animasi
              },          
              imageUrl: "images/ayang3.jpg",
              imageWidth: 400,
              imageHeight: 400,
              imageAlt: "Custom image",
              showConfirmButton:false,
              timer: 17000,
              timerProgressBar: FinalizationRegistry,
              allowOutsideClick: false
            }).then((result) => {
              Swal.fire({            
                title: "",
                didOpen: () => {
                  const content = Swal.getPopup().querySelector('.swal2-html-container');
                  const text = "Sayang sama orang tua,dan tentunya harus makin makinnnnnn sayang sama mass ocehhh 😋😋";
                  let i = 0;
              
                  function typeWriter() {
                    if (i < text.length) {
                      content.innerHTML += text.charAt(i);
                      i++;
                      setTimeout(typeWriter, 100); // Kecepatan mengetik
                    }
                  }          
                  typeWriter(); // Mulai animasi
                },          
                imageUrl: "images/ayang2.jpg",
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: "Custom image",
                showConfirmButton:false,
                timer: 13000,
                timerProgressBar: FinalizationRegistry,
                allowOutsideClick: false
              }).then((result) => {                
                  showCard();                
              });
            });
          });
        });
      }
    }, 500); // Jeda 500ms untuk menampilkan angka sebelum zoom out
  }

function showCard() {
  const card = document.getElementById('cardUcapan');
  card.style.display = 'block'; // Tampilkan card
  setTimeout(() => {
    card.classList.add('zoomOut'); // Tambahkan class zoomOut setelah delay
  }, 100); // Delay 100ms agar transisi terlihat
}

function createFallingObject(type) {
  const object = document.createElement('div');
  object.classList.add('falling-object', type);  

  if (type === 'love') {
    object.style.left = `${Math.random() * 100}%`;
    object.style.animationDuration = `${Math.random() * 5 + 3}s`; // Durasi jatuh antara 3-8 detik
  }else if (type === 'loveMerah') {
    object.style.left = `${Math.random() * 100}%`;
    object.style.animationDuration = `${Math.random() * 6 + 4}s`; // Durasi jatuh antara 3-8 detik
  } else if (type === 'balloon') {
    object.style.left = `${Math.random() * 100}%`;
    object.style.animationDuration = `${Math.random() * 8 + 5}s`; // Durasi jatuh antara 5-13 detik      
  } else if (type === 'loveArt') {
    object.style.left = `${Math.random() * 100}%`;
    object.style.animationDuration = `${Math.random() * 11 + 7}s`; // Durasi jatuh antara 5-13 detik      
  }

  fallingObjects.appendChild(object);

  // Hapus objek setelah animasi selesai
  object.addEventListener('animationiteration', () => { 
    fallingObjects.removeChild(object); 
  });
}

setInterval(() => {  
  createFallingObject('love');    
  createFallingObject('loveMerah');    
  createFallingObject('balloon');
  createFallingObject('loveArt');
}, 350); // Membuat objek baru setiap 300ms