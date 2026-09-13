const hamburger = document.getElementById("hamburger");
const headerNav = document.getElementById("header-nav");

hamburger.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  hamburger.classList.toggle("active");
  document.body.classList.toggle("no-scroll"); // メニュー開いている間は背景スクロール停止
});
