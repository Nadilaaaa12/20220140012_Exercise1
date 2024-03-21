const tombolAnjing = document.querySelector(".konten-kiri button");
const tombolKucing = document.querySelector(".konten-kanan button");

tombolAnjing.addEventListener("click", () => {
    alert("Anjing adalah sahabat terbaik manusia!");
});

tombolKucing.addEventListener("click", () => {
    alert("Kucing adalah hewan yang lucu dan menggemaskan!");
});

// Improvisasi: Menambahkan animasi pada gambar saat diklik

const gambarAnjing = document.querySelector(".konten-kiri img");
const gambarKucing = document.querySelector(".konten-kanan img");

gambarAnjing.addEventListener("click", () => {
    gambarAnjing.classList.add("animasi-anjing");
    setTimeout(() => {
        gambarAnjing.classList.remove("animasi-anjing");
    }, 1000);
});

gambarKucing.addEventListener("click", () => {
    gambarKucing.classList.add("animasi-kucing");
    setTimeout(() => {
        gambarKucing.classList.remove("animasi-kucing");
    }, 1000);
});
