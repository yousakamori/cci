document.addEventListener("DOMContentLoaded", () => {
  // textareaタグを全て取得
  const textareaEls = document.querySelectorAll("textarea");

  textareaEls.forEach((textareaEl) => {
    // デフォルト値としてスタイル属性を付与
    textareaEl.setAttribute("style", `height: ${textareaEl.scrollHeight}px;`);
    // inputイベントが発生するたびに関数呼び出し
    textareaEl.addEventListener("input", setTextareaHeight);
  });

  // textareaの高さを計算して指定する関数
  function setTextareaHeight() {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
  }
});

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs ul li");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = tab.dataset.target;
      tabContents.forEach((content) => {
        if (content.id === target) {
          content.classList.add("is-active");
        } else {
          content.classList.remove("is-active");
        }
      });

      tabs.forEach((t) => {
        if (t === tab) {
          t.classList.add("is-active");
        } else {
          t.classList.remove("is-active");
        }
      });
    });
  });
});
