const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,

  // Responsive
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.pricing-section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // remove active from all
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        // activate clicked
        tab.classList.add('active');
        sections[tab.dataset.tab].classList.add('active');
    });
});


document.querySelectorAll(".service-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const index = button.dataset.tab;

        tabs.forEach(t => t.classList.remove("active"));
        sections.forEach(s => s.classList.remove("active"));

        tabs[index].classList.add("active");
        sections[index].classList.add("active");

        sections[index].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});











 const burger = document.querySelector('.burger-menu');
 const close = document.querySelector('.close');
 const mobile = document.querySelector('.mobile-nav');
 const navLinks = document.querySelectorAll('.nav-links a ');
 const navMenu = document.querySelector('.nav-links');

 burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    mobile.classList.toggle('active');
    
 })

 close.addEventListener('click',()=>{
    mobile.classList.remove('active')
    burger.classList.toggle('active');
 })


 navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active'); // close menu
        burger.classList.remove('active');  // reset burger icon
    });
});



 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }else{
             entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".fade").forEach((section) => {
    observer.observe(section);
});