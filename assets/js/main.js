SUBJECTS = ["Uber para", "Pastelería para", "Uber Eats con", "Reparto a domicilio de", "Tinder para", "Fonda de", "Drones para", "Generador de", "Crowdsourcing para", "Blockchain para", "Machine Learning de", "Subway, pero de", "Facebook, pero para", "Pokémon Go, pero con", "Snapchat, pero para", "Instagram, pero para", "Criptomoneda para", "Cloud Computing para", "Hackeo a", "Una nueva red social, pero solo con", "Deep Learning sobre", "Votación electrónica para", "Mall para", "U-Cursos, pero con", "WhatsApp, pero para", "Fotolog, pero con", "MSN Messenger, pero de", "Agencia de Viajes para", "Organizadora de Eventos para", "Netflix, pero de", "Pago electrónico para", "Tienda 24/7 de", "Feria Empresarial enfocada en", "Impresora 3D de", "Viajes internacionales para", "Airbnb, pero para", "Fintech enfocada en", "App de trueque de", "Mayonesa de", "Pasapalabra de", "Videotutoriales de", "Un CHATBOT de", "Waze para", "Funeraria con", "Contact tracing para", "Tiktok para"];

CONTEXTS = ["apuntes de ramos", "proyectos de Evalua", "comida rápida", "perritos callejeros", "pastelerías", "fondas", "emojis", "la nube", "comida de cocktail", "gatitos", "videojuegos", "juegos de mesa", "café de grano", "té", "choripanes", "marchas estudiantiles", "músicos independientes", "dibujantes de webcomics", "libros usados", "ropa de Halloween", "electrodomésticos", "papel higiénico", "empresas coludidas", "GIFs de internet", "memes", "tarreos", "artistas callejeros", "networking", "pizzas familiares", "innovación y emprendimiento", "el año 2030", "Tarjetas Bip!", "Realidad Virtual", "Realidad Aumentada", "sustentabilidad", "alimentos cruelty free", "millenials", "gamers", "cumpleaños infantiles", "funerarias", "detectar contagios"];

BACKGROUNDS = 5;

function getRandom(list) {
  var randomNumber = Math.floor(list.length*Math.random())
  return randomNumber;
}

function swapBackground() {
  var randFondo = Math.ceil(BACKGROUNDS * Math.random())
  $("#background").css('background-image', "url(assets/img/evalua" + randFondo + ".jpg");
}

function loadIdea(number, onPop=false) {
  var subject = typeof SUBJECTS[Math.floor(number / 100)] === "undefined" ? SUBJECTS[0] : SUBJECTS[Math.floor(number / 100)];
  var context = typeof CONTEXTS[number % 100] === "undefined" ? CONTEXTS[0] : CONTEXTS[number % 100];
  var ideaNumber = (Number.isInteger(number)) ? number : 0;
  $("#idea-number").text(ideaNumber)
  var idea = subject + " " + context;
  $("#idea").text(idea);
  swapBackground();
  if (!onPop) {
    history.pushState(null, null, '#'+number);    
  }
}

function randomIdea(e) {
  if (e != null) e.preventDefault();
  var subject = getRandom(SUBJECTS);
  var context = getRandom(CONTEXTS);
  var ideaNumber = 100*subject + context;
  loadIdea(ideaNumber)
}

function loadUrlIdea(onPop=false) {
  if (window.location.hash.length > 1) {
    var ideaNumber = parseInt(window.location.hash.substring(1));
    loadIdea(ideaNumber, onPop);
  } else if (!onPop) {
    randomIdea();
  }
}

(function($) {
  window.onpopstate = function() {
    loadUrlIdea(true);
  };
  "use strict";  

  $(window).on('load', function() {
    loadUrlIdea(false)
     /* Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();
    $("#otra").click(randomIdea);
  });      
}(jQuery));
