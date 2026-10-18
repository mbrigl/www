// Theme switch: System (follow OS), Light, Dark. The choice is kept in localStorage.
(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-theme-set]");

  function current() {
    var t = root.dataset.theme;
    return t === "light" || t === "dark" ? t : "system";
  }
  function paint() {
    var c = current();
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.themeSet === c));
    });
  }
  function set(mode) {
    if (mode === "system") {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = mode;
    }
    try {
      if (mode === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", mode);
    } catch (e) {}
    paint();
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { set(b.dataset.themeSet); });
  });
  paint();
})();
