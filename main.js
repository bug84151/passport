const whole_faq = document.querySelectorAll(".whole_faq");
const answer = document.querySelectorAll(".answer");
const menu_icon = document.querySelector(".menu_icon");
const nav_bar = document.querySelector(".nav_bar");
const x_mark = document.querySelector(".x_mark");

whole_faq.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("showText");
  });
});

menu_icon.addEventListener("click", () => {
  nav_bar.classList.toggle("mobile_nav");
  menu_icon.classList.toggle("close");
});

x_mark.addEventListener("click", () => {
  nav_bar.classList.toggle("mobile_nav");
  menu_icon.classList.toggle("close");
});
