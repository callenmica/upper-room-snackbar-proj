function scrollToSection(id) {
  const element = document.getElementById(id);
  const headerHeight = 80; // adjust to your sticky header height
  const position =
    element.getBoundingClientRect().top + window.scrollY - headerHeight;

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}
