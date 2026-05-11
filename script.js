let display = document.getElementById('display');

// Menambah angka/operator ke layar
function appendToDisplay(input) {
    if (display.value === "0" && input !== ".") {
        display.value = input;
    } else {
        display.value += input;
    }
}

// Menghapus semua (Clear)
function clearDisplay() {
    display.value = "0";
}

// Menghapus satu karakter terakhir (Delete)
function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}

// Fungsi hitung (Validasi menggunakan try-catch)
function calculate() {
    try {
        let expression = display.value;
        
        // Menangani persen: mengganti X% menjadi (X/100)
        expression = expression.replace(/(\d+)%/g, "($1/100)");

        // Menghitung hasil
        let result = eval(expression);

        // Menangani desimal agar tidak terlalu panjang (max 10 digit)
        display.value = Number(result.toFixed(10)); 
    } catch (error) {
        display.value = "Error";
        setTimeout(() => clearDisplay(), 1500); // Reset otomatis jika error
    }
}