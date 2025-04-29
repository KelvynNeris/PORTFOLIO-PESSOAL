document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  console.log("Current Path:", currentPath);

  const links = document.querySelectorAll("nav .nav a");

  links.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    console.log("Link:", link.href, "=> Path:", linkPath);

    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});