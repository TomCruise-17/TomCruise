const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = navMenu.querySelectorAll('li a'); // Termasuk link Dark Mode yang kini dibungkus <li>

// 1. Event Listener untuk ikon Hamburger
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('open'); // Opsional: untuk animasi ikon X
});

// 2. Event Listener untuk menutup menu saat link diklik (di mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Tutup menu setelah link navigasi diklik
    navMenu.classList.remove('show');
    hamburger.classList.remove('open');
  });
});

const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const body = document.body;

// 1. Cek preferensi sistem saat halaman dimuat
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleDarkModeBtn.textContent = '🌙';
} else if (currentTheme === 'light') {
  body.classList.remove('dark-mode');
  toggleDarkModeBtn.textContent = '☀️';
} else if (prefersDarkScheme.matches) {
  // Jika tidak ada preferensi di localStorage, ikuti preferensi sistem
  body.classList.add('dark-mode');
  toggleDarkModeBtn.textContent = '🌙';
} else {
  toggleDarkModeBtn.textContent = '☀️';
}


// 2. Event Listener untuk tombol
toggleDarkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Perbarui ikon dan simpan preferensi di localStorage
  let theme = 'light';
  if (body.classList.contains('dark-mode')) {
    theme = 'dark';
    toggleDarkModeBtn.textContent = '🌙';
  } else {
    toggleDarkModeBtn.textContent = '☀️';
  }

  localStorage.setItem('theme', theme);
});

// --- D. IMPLEMENTASI MODAL REVIEW PROYEK BARU ---

const reviewModal = document.getElementById('review-modal');
const closeReviewBtn = document.querySelector('.close-review');
const reviewTitle = document.getElementById('review-title');
const reviewDescription = document.getElementById('review-description');
const githubLink = document.getElementById('github-link');
const reviewButtons = document.querySelectorAll('.review-btn');

// 1. Membuka Modal Review
document.querySelectorAll('.review-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const url = this.getAttribute('data-github');
    if (url) {
      window.open(url, '_blank'); // buka tab baru
    }
  });
});

reviewButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Ambil data dari atribut data- di tombol
    const title = this.getAttribute('data-title');
    const description = this.getAttribute('data-description');
    const githubUrl = this.getAttribute('data-github');

    // Isi konten modal
    reviewTitle.textContent = title;
    reviewDescription.textContent = description;
    githubLink.href = githubUrl;

    // Tampilkan modal
    reviewModal.style.display = 'flex';
  });
});

// 2. Menutup Modal Review (Tombol X)
closeReviewBtn.addEventListener('click', () => {
  reviewModal.style.display = 'none';
});

// 3. Menutup Modal Review (Klik di luar area modal)
reviewModal.addEventListener('click', (e) => {
  // Pastikan yang diklik adalah latar belakang modal, bukan konten di dalamnya
  if (e.target === reviewModal) {
    reviewModal.style.display = 'none';
  }
});
// ===============================================
// 6. LOGIKA FORMULIR KONTAK (MENGGUNAKAN FORMSPREE)
// ===============================================

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Mencegah reload halaman default

    // Tampilkan status loading
    formStatus.textContent = 'Mengirim pesan...';
    formStatus.style.color = '#ffc107'; // Warna kuning (accent)

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Sukses
        formStatus.textContent = 'Pesan berhasil terkirim! Terima kasih. 🎉';
        formStatus.style.color = '#007bff'; // Warna biru (primary)
        contactForm.reset(); // Kosongkan formulir
      } else {
        // Gagal (biasanya error server atau validasi Formspree)
        const data = await response.json();
        if (data.error) {
          formStatus.textContent = `Gagal mengirim: ${data.error}`;
        } else {
          formStatus.textContent = 'Gagal mengirim pesan. Coba lagi.';
        }
        formStatus.style.color = 'red';
      }
    } catch (error) {
      // Error koneksi/jaringan
      formStatus.textContent = 'Terjadi kesalahan jaringan. Cek koneksi Anda.';
      formStatus.style.color = 'red';
      console.error('Network Error:', error);
    }

    // Sembunyikan pesan status setelah beberapa detik
    setTimeout(() => {
      formStatus.textContent = '';
    }, 8000);
  });
}