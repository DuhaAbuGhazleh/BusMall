'use strict';

/*
let galaryArray =[
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'water-can.jpg',
  'wine-glass.jpg'

];
let allclike=[];
let allImg =[];
let counter = 0;
let Round = 25;
const sectionOfImg=document.getElementById('sectionOfImg');
let image1=document.getElementById('image1');
let image2=document.getElementById('image2');
let image3=document.getElementById('image3');

function ImgSrc( name , srcOfImg){

  this.name = name;
  this.img= `./img/${srcOfImg}`;
  this.show=0;
  this.timeClike=0;
  ImgSrc.allImg.push(this);
  ImgSrc.allclike.push(this);
}

ImgSrc.allImg=[];
ImgSrc.allclike=[];

for(let i=0 ; i<galaryArray.length ; i++){
  new ImgSrc(galaryArray[i].split('.')[0], galaryArray[i]);
}




function getRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

let image1random ;
let image2random ;
let image3random ;

function render(){
  image1random = getRandomNumber(0 , galaryArray.length-1);
  image2random = getRandomNumber(0 , galaryArray.length-1);
  image3random = getRandomNumber(0 , galaryArray.length-1);


  image1.src = ImgSrc.allImg[image1random].img;
  image2.src = ImgSrc.allImg[image2random].img;
  image3.src = ImgSrc.allImg[image3random].img;

  ImgSrc.allImg[image1random].show++;
  ImgSrc.allImg[image2random].show++;
  ImgSrc.allImg[image3random].show++;

  console.log(ImgSrc.allImg);

}
render();

sectionOfImg.addEventListener('click', clickOnimg);
function clickOnimg(e) {
  if((e.target.id === 'image1' || e.target.id === 'image2' || e.target.id === 'image3') && counter < Round) {
    if (e.target.id === 'image1'){
      //ImgSrc.allImg[image1random].timeClike++;
      ImgSrc.allclike[image1random].timeClike++;
      console.log(ImgSrc.allclike);
    }
    else if ( e.target.id === 'image2') {
      // ImgSrc.allImg[image2random].timeClike++;
      ImgSrc.allclike[image2random].timeClike++;
    }
    else if ( e.target.id === 'image3') {
      // ImgSrc.allImg[image3random].timeClike++;
      ImgSrc.allclike[image3random].timeClike++;
    }


  }
  else
  {

    let result =document.getElementById('result');
    let resultEle = document.createElement('button');
    for(let i =0; i<galaryArray.length ; i++){
      resultEle.textContent= `${this.name} had ${ImgSrc.allclike[i].show} votes, and ${ImgSrc.allImg[i].timeClike}was seen times.`;
    }
    result.appendChild(resultEle);
  }
  console.log(ImgSrc.allImg);
  render();
  counter++;
}
clickOnimg();



//document.getElementById('sectionOfImg').removeEventListener('click', clickOnimg);
*/


let galaryArray =[
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'water-can.jpg',
  'wine-glass.jpg'

];
let allclike=[];
let allImg =[];
let counter = 0;
let numberOfRound = 25;
const sectionOfImg=document.getElementById('sectionOfImg');
let image1=document.getElementById('image1');
let image2=document.getElementById('image2');
let image3=document.getElementById('image3');

function ImgSrc( name , srcOfImg){

  this.name = name;
  this.img= `./img/${srcOfImg}`;
  this.show=0;
  this.timeClike=0;
  ImgSrc.allImg.push(this);
  ImgSrc.allclike.push(this);
}

ImgSrc.allImg=[];
ImgSrc.allclike=[];

for(let i=0 ; i<galaryArray.length ; i++){
  new ImgSrc(galaryArray[i].split('.')[0], galaryArray[i]);
}




function getRandomNumber( min, max ) {
  return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

let image1random ;
let image2random ;
let image3random ;

function render(){
  image1random = getRandomNumber(0 , galaryArray.length-1);
  image2random = getRandomNumber(0 , galaryArray.length-1);
  image3random = getRandomNumber(0 , galaryArray.length-1);


  image1.src = ImgSrc.allImg[image1random].img;
  image2.src = ImgSrc.allImg[image2random].img;
  image3.src = ImgSrc.allImg[image3random].img;

  ImgSrc.allImg[image1random].show++;
  ImgSrc.allImg[image2random].show++;
  ImgSrc.allImg[image3random].show++;

  console.log(ImgSrc.allImg);

}
render();

sectionOfImg.addEventListener('click', clickOnimg);
function clickOnimg(e) {
  //   if((e.target.id === 'image1' || e.target.id === 'image2' || e.target.id === 'image3') && counter < numberOfRound) {
  if (e.target.id === 'image1' && counter < numberOfRound){
    //ImgSrc.allImg[image1random].timeClike++;
    ImgSrc.allclike[image1random].timeClike++;
    console.log(ImgSrc.allclike);
    render();

  }
  else if ( e.target.id === 'image2' && counter < numberOfRound) {
    // ImgSrc.allImg[image2random].timeClike++;
    ImgSrc.allclike[image2random].timeClike++;
    render();

  }
  else if ( e.target.id === 'image3' && counter < numberOfRound) {
    // ImgSrc.allImg[image3random].timeClike++;
    ImgSrc.allclike[image3random].timeClike++;
    render();

  }


  counter++;

  // else
  //{

  //  let result =document.getElementById('vote');
  // let resultEle = document.createElement('button');

  // resultEle.textContent= `${ImgSrc.allclike[1].name} had ${ImgSrc.allclike[1].timeClike} votes, and ${ImgSrc.allclike[1].show} was seen times.`;
  // result.appendChild(resultEle);

  //}

}





let resultElement = document.getElementById('showResult');
let button =document.createElement('button');
button.textContent= 'show result';
resultElement.appendChild(button);

button.addEventListener('submit',renderR);

function renderR (event){
  let ulElement =document.createElement('ul');

  for(let i=0 ; i <galaryArray.length ;i++){

    let liElement = document.createElement('li');
    liElement.textContent= `${ImgSrc.allclike[i].name} had ${ImgSrc.allclike[i].timeClike} votes, and ${ImgSrc.allclike[i].show} was seen times.`;
    ulElement.appendChild(liElement);

  }


}


render();
renderR();




