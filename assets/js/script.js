// Smooth scroll saat mengklik link navigasi
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah default behavior (scroll langsung)

    // Scroll ke target dengan behavior smooth
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


window.addEventListener("load", function () {
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  }, 2000); // Menghilangkan preloader setelah 2 detik
});


window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // Simulasi jika halaman memerlukan waktu loading yang lama
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1000); // Coba tampilkan preloader selama 1 detik

  // Gunakan Performance API untuk memeriksa waktu loading
  const timeSinceLoad =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;
  if (timeSinceLoad < 100) {
    // Jika halaman memuat terlalu cepat
    setTimeout(function () {
      preloader.style.display = "none";
    }, 1000 - timeSinceLoad);
  }
});


