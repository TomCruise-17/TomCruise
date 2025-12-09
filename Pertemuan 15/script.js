// --- 1. SEGITIGA SAMA KAKI ---
        
let tinggiSegitiga = 10;
let segitiga = '';

for (let i = 1; i <= tinggiSegitiga; i++) {
    // 1. Spasi (Untuk membuat bintang di tengah)
    for (let j = 1; j <= tinggiSegitiga - i; j++) {
        segitiga += ' ';
    }
    // 2. Bintang (2*i - 1 menghasilkan angka ganjil: 1, 3, 5, ...)
    for (let k = 1; k <= 2 * i - 1; k++) {
        segitiga += '*';
    }
    // 3. Pindah baris
    segitiga += '\n';
}

// Tampilkan hasil ke elemen HTML dengan ID 'outputSegitiga'
document.getElementById('outputSegitiga').textContent = segitiga;


// --- 2. KETUPAT (DIAMOND) ---

let setengahTinggi = 7; // Mengatur lebar dan tinggi ketupat
let ketupat = '';

// BAGIAN ATAS (Termasuk baris tengah)
for (let i = 1; i <= setengahTinggi; i++) {
    // Spasi
    for (let j = 1; j <= setengahTinggi - i; j++) {
        ketupat += ' ';
    }
    // Bintang
    for (let k = 1; k <= 2 * i - 1; k++) {
        ketupat += '*';
    }
    ketupat += '\n';
}

// BAGIAN BAWAH (Tanpa mengulang baris tengah)
for (let i = setengahTinggi - 1; i >= 1; i--) {
    // Spasi
    for (let j = 1; j <= setengahTinggi - i; j++) {
        ketupat += ' ';
    }
    // Bintang
    for (let k = 1; k <= 2 * i - 1; k++) {
        ketupat += '*';
    }
    ketupat += '\n';
}

// Tampilkan hasil ke elemen HTML dengan ID 'outputKetupat'
document.getElementById('outputKetupat').textContent = ketupat;