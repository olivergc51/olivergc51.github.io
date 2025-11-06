// La función setup() se ejecuta UNA sola vez al iniciar el programa
function setup() {
  createCanvas(400, 400); // crea un lienzo de 400x400 píxeles
}

// La función draw() se ejecuta MUCHAS veces por segundo (bucle automático)
function draw() {
  background(138, 58, 210);        // pinta el fondo blanco en cada frame
  // aquí irán las órdenes para dibujar tus figuras 
    ellipse(200, 200, 100, 100); // círculo en el centro
}
