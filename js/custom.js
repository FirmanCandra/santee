// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// slick slider
$('.product_container').slick({
    infinite: true,
    center: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function sendMessage1(event) {
    event.preventDefault(); 
  
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const whatsappNumber = "6288221401935"; // Ganti dengan nomor WhatsApp admin
    const whatsappMessage = `Nama: ${name}%0ANomor HandPhone: ${phone}%0AEmail: ${email}%0APesan: ${message}`;
  
    // Buat URL WhatsApp 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
    // Buka WhatsApp Web dengan pesan yang sudah terisi
    window.open(whatsappUrl, "_blank");
  }


    // Mendapatkan modal
    var modal = document.getElementById("myModal");

    // Mendapatkan elemen <span> yang menutup modal
    var span = document.getElementsByClassName("close")[0];

    // Mendapatkan semua tombol "Beli Sekarang"
    var buttons = document.querySelectorAll('.detail-box a');

    // Menambahkan event listener ke setiap tombol
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah tindakan default dari link
            modal.style.display = "block";
        });
    });

    // Ketika <span> diklik, tutup modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Ketika pengguna mengklik di luar modal, tutup modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

function sendMessage(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

        // Ambil data dari input
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const locationLink = document.getElementById('location-link').value;


        // Buat pesan WhatsApp
        const whatsappNumber = '6281234567890'; // Ganti dengan nomor WhatsApp admin
        const whatsappMessage = `Nama: ${name}%0ANomor HandPhone: ${phone}%0AEmail: ${email}%0ALink Share Location: ${locationLink}%0ATambahkan foto KTP dan lokasi.`;

        // Buat URL WhatsApp
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        // Buka WhatsApp Web dengan pesan yang sudah terisi
        window.open(whatsappUrl, '_blank');
    }


