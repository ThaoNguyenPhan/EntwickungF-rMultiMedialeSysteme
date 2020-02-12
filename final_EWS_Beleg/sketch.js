let backgroundImg;
let styleImg, leftImg, backImg, musicImg, handwrImg, typeImg;
let picArr = []; //array erstellt
let pfeilImg;

let schrift1, schrift2;
let fontbold; 
var back1 = true;
let back2;
let backyellow, backvogel; 
let block1, block2;
let music1,music2;
let style1;
var clickpic;
var bubbles;
var loadagain = true; 

var song1;

let typeClicked,cssClicked,blockClicked,backClicked, musicClicked,handClicked;

let yellowClicked = false;
let vogelClicked = false; 

function preload() {
  backgroundImg = loadImage('background1.PNG');

  typeImg = loadImage('tside.png');
  schrift1 = loadImage('images/font2.PNG');

  styleImg = loadImage('tcss.png');
  style1 = loadImage('images/big.png');
  
  leftImg = loadImage('tleft.png');
  block1 = loadImage('images/t right.png');
  block2 = loadImage('images/tcenter.png');

  backImg = loadImage('tbackground1.png');
  back1 = loadImage('images/yellow.png');
  back2 = loadImage('images/backgroundvogel.png');
  backyellow= loadImage('images/by.jpg');
  backvogel = loadImage('images/vogel.jpg');

  musicImg = loadImage('tmusic.png');
  music1 = loadImage('images/lotus-flower.png');
  music2 = loadImage('images/no-sound.png');

  handwrImg = loadImage('thandwriting.png');

  pfeilImg = loadImage('pfeil.png');

  song1 = loadSound('sound/Indigo.mp3');
}

function setup() {


  createCanvas(1024, 768);

  picArr.push(typeImg);
  picArr.push(styleImg); //schrift
  picArr.push(leftImg); //zentrierung
  picArr.push(backImg); //Hintergrundbild ändern
  picArr.push(musicImg); //sound
 // picArr.push(handwrImg); //handschreiben


 /* var area = createElement('textarea');
  area.elt.placeholder = 'schreibe deine Gedanken auf...';
  area.position(400, 50);
  area.size(); //area.style('z-index', -1);
  area.id('textarea'); */
  
  //area.position(400, 50);
}


function mouseClicked() {

  console.log('confirmation that the mouse got clicked!');
  console.log(mouseX, mouseY); //where is the mouse anyway?
  var font = document.getElementById("textarea"); 
  //Type
  if ((mouseX >= 0) && (mouseX < 130) && (mouseY > 0) && (mouseY < 110)) {
    typeClicked = true;
    font.style.fontFamily = "Courier New"; 
    
  } else
    typeClicked = false;
  if ((mouseX > 160) && (mouseX < 258) && (mouseY > 0) && (mouseY < 81)){
    /**font2 type */
    font.style.fontFamily = "French Script MT";
    font.style.fontSize ="40px"
  }
    //typeClicked = false;

  //Css
  if (mouseX >= 0 && mouseX < 130 && mouseY > 110 && mouseY < 250) {
    cssClicked = true;
    font.style.fontWeight= "10"; 
  }else if (mouseX > 168 && mouseX < 242 &&  mouseY > 134 && mouseY <207 ){
   /*big*/
    font.style.fontWeight= "900"; 
  } 
  else
    cssClicked = false;

  //block
  if (mouseX >= 0 && mouseX < 130 && mouseY > 250 && mouseY < 360) {
    blockClicked = true;
    font.style.textAlign ="left"; 
  } else if(mouseX > 146 && mouseX < 230 && mouseY >282 && mouseY < 330){
    /*center*/ 
    font.style.textAlign ="center"; 

  } else if(mouseX > 270 && mouseX < 334 && mouseY >282 && mouseY < 330){
    /*right */
    font.style.textAlign ="right";
  }else
    blockClicked = false;

  //background
  if ((mouseX >= 0) && mouseX < 130 && mouseY > 381 && (mouseY < 490))  {
    backClicked = true;
   /*if ((mouseX >150) && (mouseX <440) && (mouseY > 400) && (mouseY < 465)){
       yellowClicked = true;
    }  */
  } 
  else
    backClicked = false;

    if ((mouseX >150) && (mouseX <236) && (mouseY > 400) && (mouseY < 462)){
      yellowClicked = true;
   } 
   if (mouseX > 270 && mouseX <353 && (mouseY > 400) && (mouseY < 462)){
      /**vogel */
      vogelClicked = true; 

   }
  //music
  if ((mouseX >= 0) && mouseX < 130 && mouseY > 515 && (mouseY < 630)) {
    musicClicked = true;
  } 
  else
    musicClicked = false;
  if (mouseX >158 && mouseX <288 && mouseY>537 && mouseY<601){
      //music1
      song1.play();
  }
  if(mouseX > 304 && mouseX <420 && mouseY > 531 && mouseY <607){
    //music stop
    song1.stop(); 
  }
    /*kategorie wird weggel*/
    // handwriting
  if ((mouseX >= 0) && mouseX < 130 && mouseY > 650 && mouseY < 1100) {
    handClicked = true;
  } else handClicked = false;


}


function draw() {
  
  image(backgroundImg, 0, 0,1024, 768);
  //loadagain.backyellow; 
  if (vogelClicked == true){
    image (backvogel, 0,0, 1024, 768); 
  }else if(yellowClicked == true ){
    image(backyellow, 0,0, 1024, 768);
    //back1.style('z-index', 0);
  }else if (vogelClicked == true){
    image (backvogel, 0,0, 1024, 768); 
  }
  //sidebar  
  noStroke();
  fill(255, 255, 255, 170);
  //rect(x,y,b,h,tl,tr,br,bl)
  rect(0, 0, 130, 650, 0, 30, 30, 0);

  //horizont


  //typeImg
  if (typeClicked == true) {

    pullout = fill(255, 255, 255, 170);
    pullout.rect(0, 0, 250, 110, 0, 30, 30, 0); //pullout
      image(schrift1, 100, -7, width / 7, height / 7);
  }

  //CssImg
  if (cssClicked == true) {
    pullout = fill(255, 255, 255, 170);
    pullout.rect(0, 120, 300, 110, 0, 30, 30, 0); //pullout
        image(style1, 140, 125, width / 8, height / 8);

  }

  //position
  if (blockClicked == true) {
    pullout = fill(255, 255, 255, 170);
    pullout.rect(0, 250, 400, 110, 0, 30, 30, 0); //pullout
    image(block1, 260, 270, width / 10, height / 10);
      image(block2, 140, 270, width / 10, height / 10);

  }

  //background 
  if (backClicked == true) {
    pullout = fill(255, 255, 255, 170);
    pullout.rect(0, 380, 400, 110, 0, 30, 30, 0); //pullout
    image(back1, 140, 400, width / 10, height / 11)
    image(back2, 260, 395, width / 10, height / 10)
    
      
  }
  
  //Music
  if (musicClicked == true) {
    pullout = fill(255, 255, 255, 170);
    pullout.rect(0, 515, 450, 110, 0, 30, 30, 0); //pullout
        image(music1, 150, 515, width / 8, height / 7);
        image(music2, 300, 530, width / 9, height / 9);

  }

  let x = 25;
  let y = 0;

  for (let i = 0; i < picArr.length; i++) {
    image(picArr[i], x, y, picArr[i].width / 6, picArr[i].height / 6);

    if (x < 13 + picArr[i].width / 6 + 40) {
      y += picArr[i].height / 5 + 30;
    }
  }


  image(pfeilImg, 940, 700, width / 10, height / 10);
}