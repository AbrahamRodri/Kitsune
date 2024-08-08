window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const hero = document.getElementById("hero");
  const section2 = document.getElementById("section2");
  const section2Position = section2.getBoundingClientRect().top;

  // Parallax effect
  const scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = scrollPosition * 0.5 + "px";

  // Navbar background transition
  if (scrollPosition + 250 >= section2Position) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-solid");
  } else {
    navbar.classList.remove("bg-solid");
    navbar.classList.add("bg-transparent");
  }
  MediaStreamAudioDestinationNode;
});
