// Preloader (single instance)
window.addEventListener("load", function() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('opacity-0');
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 1000);
  }
});

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) {
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // Smooth scroll to top
  backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Navigation System
const nav = document.querySelector(".nav");
if (nav) {
  const navList = nav.querySelectorAll("li");
  const totalNavList = navList.length;
  const allSection = document.querySelectorAll(".section");
  const totalSection = allSection.length;
  
  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(e) {
      e.preventDefault();
      
      // Reset all sections
      for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
      }
      
      // Update active navigation
      for (let j = 0; j < totalNavList; j++) {
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      
      // Show target section
      showSection(this);
      
      // Close mobile menu if open
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
      
      // Reset scroll position to top
      window.scrollTo(0, 0);
    });
  }
  
  function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
      if (allSection[i].id === target) {
        allSection[i].classList.add("active");
      }
    }
  }
}

// Mobile Menu Toggle
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

if (navTogglerBtn && aside) {
  navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
  });
  
  function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    
    // Toggle open class on all sections
    const allSection = document.querySelectorAll(".section");
    for (let i = 0; i < allSection.length; i++) {
      allSection[i].classList.toggle("open");
    }
  }
}