(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var btn = document.querySelector(".mast-toggle");
  var nav = document.getElementById("mast-nav");
  if (!btn || !nav) return;

  function set(open) {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
  }

  btn.addEventListener("click", function () {
    set(btn.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") set(false);
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) set(false);
  });
})();
