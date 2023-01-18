window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll);
  let navbar = document.getElementById("navbar");
  if (scroll > 50) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});
