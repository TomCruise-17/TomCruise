/**
 * Fungsi untuk melakukan perhitungan kalkulator
 * Dipanggil saat tombol 'Submit' diklik (lihat onclick="hitung()" di HTML)
 */
function hitung() {
    const nilai1 = parseFloat(document.getElementById('nilai1').value);
    const nilai2 = parseFloat(document.getElementById('nilai2').value);
    const operator = document.getElementById('operator').value;
    
    let hasil = 0; 
    
    if (isNaN(nilai1) || isNaN(nilai2)) {
        alert("Mohon masukkan angka yang valid untuk kedua nilai.");
        document.getElementById('hasil').textContent = "ERROR: Input Tidak Valid";
        return; 
    }

    switch (operator) {
        case '+':
            hasil = nilai1 + nilai2;
            break;
        case '-':
            hasil = nilai1 - nilai2;
            break;
        case '*':
            hasil = nilai1 * nilai2;
            break;
        case '/':
            if (nilai2 === 0) {
                alert("Tidak dapat melakukan pembagian dengan nol!");
                document.getElementById('hasil').textContent = "ERROR: Pembagian dengan Nol";
                return;
            }
            hasil = nilai1 / nilai2;
            break;
        case '%': 
            hasil = nilai1 % nilai2;
            break;
        default:
            hasil = "Operator Tidak Dikenal";
            break;
    }

    document.getElementById('hasil').textContent = hasil.toFixed(2);
}