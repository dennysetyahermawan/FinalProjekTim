function handleButtonNav(event) {
  // Mengganti ikon tombol navigasi antara menu hamburger dan X
  event.target.className =
    event.target.className ===
    "fa-solid fa-bars sm:hidden text-neutral-100 text-3xl"
      ? "fa-solid fa-xmark sm:hidden text-neutral-100 text-3xl"
      : "fa-solid fa-bars sm:hidden text-neutral-100 text-3xl";

  // Mengalihkan antara kelas "hidden" dan "block" pada elemen dengan ID "navMobile"
  navMobile.classList.toggle("hidden");
  navMobile.classList.toggle("block");
}
