const whole_faq = document.querySelectorAll(".whole_faq");
const answer = document.querySelectorAll(".answer");
const header = document.querySelector(".header");
const menu_icon = document.querySelector(".menu_icon");
const nav_bar = document.querySelector(".nav_bar");
const x_mark = document.querySelector(".x_mark");

// for actions
const actions = document.querySelectorAll(".action");
const form_btn = document.querySelector(".form_btn");

actions.forEach((action) => {
  action.addEventListener("click", (e) => {
    actions.forEach((action) => {
      action.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.classList.contains("send")) {
      form_btn.innerHTML = "Send Money";
    } else {
      form_btn.innerHTML = "Receive Money";
    }
  });
});
// selections for dropdown menu

const action_btn = document.querySelectorAll(".action_btn");
const drop_down_content = document.querySelector(".drop_down_content");
const list_item = document.querySelectorAll(".drop_down_content li");

whole_faq.forEach((faq) => {
  faq.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("showText");
  });
});

menu_icon.addEventListener("click", () => {
  nav_bar.classList.toggle("mobile_nav");
  header.classList.toggle("ipad_nav");
  menu_icon.classList.toggle("close");
});

x_mark.addEventListener("click", () => {
  nav_bar.classList.toggle("mobile_nav");
  header.classList.toggle("ipad_nav");
  menu_icon.classList.toggle("close");
});

// dropdown listeners
action_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.toggle("show_drop_down");
  });
});

list_item.forEach((li) => {
  li.addEventListener("click", (e) => {
    const drop_down = e.target.parentElement.parentElement.parentElement;

    drop_down.firstElementChild.firstElementChild.innerText =
      e.target.innerText;

    // drop_down.classList.toggle("show_drop_down");
    if (
      e.target.parentElement.parentElement.parentElement.classList.contains(
        "drop_down"
      )
    ) {
      drop_down.classList.toggle("show_drop_down");
    }
  });
});
