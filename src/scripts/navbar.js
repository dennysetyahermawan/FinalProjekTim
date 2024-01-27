function handleButtonNav(event) {
  // Mengganti ikon tombol navigasi antara menu hamburger dan
  event.target.classList.toggle("fa-xmark");
  event.target.classList.toggle("fa-bars");

  // Mengalihkan antara kelas "hidden" dan "block" pada elemen dengan ID "navMobile"
  const navMobile = document.getElementById("navMobile");
  navMobile.classList.toggle("hidden");
  navMobile.classList.toggle("block");
}
