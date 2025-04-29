document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav .nav a");
    const sections = Array.from(links)
      .map(link => document.querySelector(new URL(link.href).hash))
      .filter(Boolean); // remove null caso algum id não exista
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // pelo menos 60% visível para ativar
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(link => {
            const hash = new URL(link.href).hash;
            if (hash === `#${id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);
  
    sections.forEach(section => observer.observe(section));
    
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
      
  });  