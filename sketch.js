var landscape; 
var logo1;
let generatorFont;
let inputElement;
let userImage;

function preload(){
  landscape = loadImage ('images/banner5.png');
  Garnett = loadFont("font/Garnett-Regular.otf");
  logo1 = loadImage ('images/logo_1.png');
}

function setup() {
  pixelDensity(5);
  createCanvas(1200, 675);
  background (landscape);
  noSmooth();
  landscape.resize(1200, 675);
  inputElement = createFileInput(handleFile);
  inputElement.position(0, 0);
}

function draw() {
  textFont(Garnett);
  
  // Datum und Event Typ
  textSize(30);
  fill('white');
  textAlign(LEFT, TOP);
  textWrap(WORD);
  text("Monday March 21st: From 11.00-11.45 Webinar", 30, 30, 600);
  
  // Event Titel
  textSize(72);
  fill('white');
  textAlign(LEFT, CENTER);
  textWrap(WORD);
  text("Guidelines for Blockchain and DLT Governance", 30, height/2, 1000);
  
  // Datum und Event Typ
  textSize(30);
  fill('white');
  textAlign(LEFT, BOTTOM);
  textWrap(WORD);
  text("- the new standard explained", 30, 645, 600);
  
  // image(logo1, 945, 30);
  
  
  // image(img, mouseX, mouseY, 422, 320);
  
  if (userImage != null) {
    image(userImage, 500, 603, 200, 36 );
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

function keyTyped() {
  if (key === 's') {
    saveCanvas('myCanvas', 'jpg');
  }
}