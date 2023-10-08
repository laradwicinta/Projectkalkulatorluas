// Fungsi untuk menampilkan dan menyembunyikan kartu sesuai dengan tombol yang diklik
function show(shape) {
    document.querySelectorAll('.card').forEach((card) => {
        card.style.display = 'none';
    });

    document.getElementById(`luas-${shape.toLowerCase()}`).style.display = 'block';
}

// Fungsi untuk menghitung luas segitiga, lingkaran, atau jajar genjang sesuai dengan bentuk yang dipilih
function hitung(shape) {
    const hasilElement = document.querySelector(`#luas-${shape.toLowerCase()} .jawaban`);
    hasilElement.innerHTML = '';

    if (shape === 'Segitiga') {
        const alas = parseFloat(document.querySelector('.input-alas').value);
        const tinggi = parseFloat(document.querySelector('.input-tinggi').value);

        const luas = 0.5 * alas * tinggi;
        hasilElement.textContent = `Luas Segitiga: ${luas}`;
    } else if (shape === 'Lingkaran') {
        const ruas = parseFloat(document.querySelector('.input-lingkaran').value);

        const luas = Math.PI * ruas * ruas;
        hasilElement.textContent = `Luas Lingkaran: ${luas.toFixed(2)}`;
    } else if (shape === 'JajarGenjang') {
        const base = parseFloat(document.querySelector('.input-alas').value);
        const height = parseFloat(document.querySelector('.input-tinggi').value);

        const luas = base * height;
        hasilElement.textContent = `Luas Jajar Genjang: ${luas}`;
    }
}

// Fungsi untuk mereset input dan hasil perhitungan
function reset(shape) {
    if (shape === 'Segitiga' || shape === 'JajarGenjang') {
        document.querySelector('.input-alas').value = '';
        document.querySelector('.input-tinggi').value = '';
    } else if (shape === 'Lingkaran') {
        document.querySelector('.input-lingkaran').value = '';
    }

    const hasilElement = document.querySelector(`#luas-${shape.toLowerCase()} .jawaban`);
    hasilElement.innerHTML = '';
}