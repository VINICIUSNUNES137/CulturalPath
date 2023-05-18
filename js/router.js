"use strict";

const routes = {
  "/": "/index.html",
  "/encontros": "/pages/encontros.html",
  "/parceiro": "/pages/parceiro.html",
  "/calendario": "/pages/calendario.html",
  "/voluntario": "/pages/voluntario.html",
};

const route = async () => {
  window.event.preventDefault();
  window.history.pushState({}, "", window.event.target.href);
  const path = window.location.pathname;
  const route = routes[path];

  const response = await fetch(route);
  const html = await response.text();

  document.getElementById("root").innerHTML = html;

  if (path == "/" || path == "/index.html") {
    loadBannerFilm();
  }
};

window.route = route;
