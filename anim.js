// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "When we're out in a crowd, laughing loud, and nobody knows why", time: 10 },
  { text: "When we're lost at a club, getting drunk, and you give me that smile", time: 17 },
  { text: "Going home in the back of a car and your hand touches mine", time: 25 },
  { text: "When we're done making love and you look up and give me those eyes", time: 33 },

  { text: "'Cause all of the small things that you do", time: 43 },
  { text: "Are what remind me why I fell for you", time: 49 },
  { text: "And when we're apart and I'm missing you", time: 56 },
  { text: "I close my eyes and all I see is you", time: 63 },
  { text: "And the small things you do", time: 70 },

  { text: "When you call me at night while you're out getting high with your friends", time: 80 },
  { text: "Out with your friends", time: 87 },
  { text: "Every hi, every bye, every I love you you've ever said", time: 94 },
  { text: "You've ever said", time: 101 },

  { text: "'Cause all of the small things that you do", time: 109 },
  { text: "Are what remind me why I fell for you", time: 116 },
  { text: "And when we're apart and I'm missing you", time: 123 },
  { text: "I close my eyes and all I see is you", time: 130 },
  { text: "And the small things you do", time: 137 },

  { text: "When we're done making love and you look up and give me those eyes", time: 151 },

  { text: "'Cause all of the small things that you do", time: 162 },
  { text: "Are what remind me why I fell for you", time: 169 },
  { text: "And when we're apart and I'm missing you", time: 176 },
  { text: "I close my eyes and all I see is you", time: 183 },
  { text: "And the small things you do", time: 190 },
  { text: "All the small things you do", time: 197 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
