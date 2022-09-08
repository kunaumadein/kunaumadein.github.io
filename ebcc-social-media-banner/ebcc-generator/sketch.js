// verschiedene Variablen deklarieren zum späteren benutzen
var landscape; 
let garnett;
let inputElement;
let userImage;
var canvas;

let inputElem1;
let inputElem2;
let inputElem3;


// Hintergrundbild und Custom Schriftart vorab laden damit es sauber ist
function preload(){ 
  garnett = loadFont('font/Garnett-Regular.ttf');
  landscape = loadImage ('images/banner.jpg');
}

// viele Sachen die vorab definiert werden
function setup() {
  canvas = createCanvas(1200, 675);
  canvas.position(535,35);
  pixelDensity(3);
  background (landscape); 
  landscape.resize(1200, 675);
  
  h1 = createElement('h1', 'Upload Sponsor Logo (PNG)');
  inputElement = createFileInput(handleFile);
  inputElement.size(250, 30);
  
  h1 = createElement('h1', 'Type of Event:');
  inputElem1 = createInput('Here is your Event');
  inputElem1.input(draw);
  inputElem1.size(350, 15);
  
  h2 = createElement('h2', 'Title:');
  inputElem2 = createInput('Here is your Title');
  inputElem2.input(draw);
  inputElem2.size(350, 15);
  
  h2 = createElement('h3', 'Subtitle:');
  inputElem3 = createInput('...and maybe your Subtitle');
  inputElem3.input(draw);
  inputElem3.size(350, 15);
  
  h3 = createElement('h3', 'Download as PNG');
  button1 = createButton('Bild runterladen');
  button1.position(35, 480);
  button1.mousePressed(saveDrawing1);
  
  // h4 = createElement('h4', 'Hier kann das Bild als JPG runtergeladen werden:');
  // h4.position(0, 510);
  // button2 = createButton('Bild runterladen');
  // button2.position(35, 575);
  // button2.mousePressed(saveDrawing2);
}

function draw() {
  // Custom Schriftart
  textFont(garnett);
  
  image(landscape, 0, 0);
  noFill();
  rect(0, 0, 1200, 675);
  
  // Datum und Event Typ
  fill("white")
  textSize(30);
  textAlign(LEFT, TOP);
  text(inputElem1.value(), 30, 30, 600);
  
  // Event Titel
  fill("white")
  textSize(72);
  textAlign(LEFT, CENTER);
  text(inputElem2.value(), 30, height/2, 1100);
  
  // Sponsoring und andere Sachen
  fill("white")
  textSize(30);
  textAlign(LEFT, BOTTOM);
  text(inputElem3.value(), 30, 645, 600);
  
  if (userImage != null) {
    var scale = 0.2;
    image(userImage, 500, 590, scale*width, scale*userImage.height*width/userImage.width);
  }
}


function handleFile(file) {
  print(file);

  if (file.type === 'image') {
    userImage = createImg(file.data, '');
    userImage.hide();
  } else {
    userImage = null;
  }
}

function saveDrawing1() {
  saveCanvas('ebcc-veranstaltung', 'png');
}

// function saveDrawing2() {
//   saveCanvas('ebcc-veranstaltung', 'jpg');
// }

// Speicher Methode durch einen Tastendruck
//function keyTyped() {
//  if (key === '-') {
//    saveCanvas('ebcc-veranstaltung', 'jpg');
//  }
//}