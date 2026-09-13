// 、URLのパラメータを読んでセレクトボックスの値を自動でセットする
window.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  if (type) {
    const select = document.getElementById("inquiry_type");
    if (select.querySelector('option[value="' + type + '"]')) {
      select.value = type;
    }
  }
});
