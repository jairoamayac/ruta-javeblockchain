// Comportamiento compartido: marca la página actual, botones de copiar y la próxima fecha.
(function () {
  var ruta = location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll(".site nav a").forEach(function (a) {
    var href = a.getAttribute("href").replace(/\/$/, "") || "/";
    if (href === ruta || (href !== "/" && ruta.indexOf(href) === 0)) a.setAttribute("aria-current", "page");
  });

  document.querySelectorAll("button.copy").forEach(function (b) {
    b.addEventListener("click", function () {
      var pre = b.parentElement.querySelector("pre");
      if (!pre) return;
      var texto = pre.innerText;
      var listo = function () { b.textContent = "Copiado"; setTimeout(function () { b.textContent = "Copiar"; }, 1600); };
      var seleccionar = function () {
        var r = document.createRange(); r.selectNodeContents(pre);
        var s = getSelection(); s.removeAllRanges(); s.addRange(r);
        b.textContent = "Texto seleccionado";
      };
      try { navigator.clipboard.writeText(texto).then(listo, seleccionar); } catch (e) { seleccionar(); }
    });
  });

  // Resalta la próxima fecha de la línea de tiempo (hora de Bogotá).
  var fechas = document.querySelectorAll(".fecha[data-fecha]");
  if (fechas.length) {
    var hoy = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }));
    hoy.setHours(0, 0, 0, 0);
    for (var i = 0; i < fechas.length; i++) {
      var p = fechas[i].getAttribute("data-fecha").split("-");
      var f = new Date(+p[0], +p[1] - 1, +p[2]);
      if (f >= hoy) { fechas[i].classList.add("proxima"); break; }
    }
  }
})();
