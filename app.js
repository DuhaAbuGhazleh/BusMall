'use strict';

let galaryArray = [
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
let allImg = [];
let counter = 0;
let Round = 25;
let previousImg =[];
const sectionOfImg = document.getElementById('sectionOfImg');
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');

function ImgSrc(name, srcOfImg) {

  this.name = name;
  this.img = `./img/${srcOfImg}`;
  //this.img=srcOfImg;
  this.show = 0;
  this.timeClike = 0;
  ImgSrc.allImg.push(this);
}
localStorage.data = JSON.stringify( galaryArray);

ImgSrc.allImg = [];

getData();
/*
for (let i = 0; i < galaryArray.length; i++) {
  new ImgSrc(galaryArray[i].split('.')[0], galaryArray[i]);
}
*/



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let image1random;
let image2random;
let image3random;

function render() {

  getData();

  image1random = getRandomNumber(0, galaryArray.length - 1);
  image2random = getRandomNumber(0, galaryArray.length - 1);
  image3random = getRandomNumber(0, galaryArray.length - 1);

  console.log(image1random);
  do {
    image1random = getRandomNumber(0, galaryArray.length - 1);
    image2random = getRandomNumber(0, galaryArray.length - 1);
    image3random = getRandomNumber(0, galaryArray.length - 1);
  } while (image1random === image2random || image1random === image3random || image3random === image2random || previousImg.includes(image1random) ||previousImg.includes(image2random)||previousImg.includes(image3random));

  previousImg=[image1random,image2random,image3random];
  image1.src = ImgSrc.allImg[image1random].img;
  image2.src = ImgSrc.allImg[image2random].img;
  image3.src = ImgSrc.allImg[image3random].img;

  // image1.src = `img/${ImgSrc.allImg[image1random].img} `;
  // image2.src = `img/${ImgSrc.allImg[image2random].img} `;
  // image3.src = `img/${ImgSrc.allImg[image3random].img}`;
  // console.log(ImgSrc.allImg[image3random].img);
  console.log(ImgSrc.allImg[image2random].img);


  ImgSrc.allImg[image1random].show++;
  ImgSrc.allImg[image2random].show++;
  ImgSrc.allImg[image3random].show++;

  console.log(ImgSrc.allImg);

  // let data = JSON.stringify( ImgSrc.allImg );
  //  localStorage.setItem('product',data);


}
render();

sectionOfImg.addEventListener('click', clickOnimg);
function clickOnimg(e) {
  getData();


  if ((e.target.id === 'image1' || e.target.id === 'image2' || e.target.id === 'image3') && counter < Round) {
    if (e.target.id === 'image1') {
      ImgSrc.allImg[image1random].timeClike++;
      console.log(ImgSrc.allclike);
    }
    else if (e.target.id === 'image2') {
      ImgSrc.allImg[image2random].timeClike++;
    }
    else if (e.target.id === 'image3') {
      ImgSrc.allImg[image3random].timeClike++;
    }
    render();
    counter++;
  }
  else{
    createChart();
  }
}
if (counter >= Round) {
  sectionOfImg.removeEventListener('click', clickOnimg);
}
//console.log(ImgSrc.allImg);
//clickOnimg();
const showResult = document.getElementById('showResult');
const buttonOfResult = document.getElementById('buttonOfResult');

buttonOfResult.addEventListener('click', clickOnButton);
function clickOnButton() {

  const ul = document.createElement('ul');
  showResult.appendChild(ul);

  for (let i = 0; i < galaryArray.length; i++) {

    let li = document.createElement('li');
    li.textContent = `- ${ImgSrc.allImg[i].name} had ${ImgSrc.allImg[i].timeClike} votes, and ${ImgSrc.allImg[i].show} was seen times.`;
    ul.appendChild(li);

  }

}





// createChart();
function createChart() {

  let nameArr = [];
  let shownArr = [];
  let clickArr =[];

  for(let i = 0; i < galaryArray.length; i++) {
    nameArr.push(ImgSrc.allImg [i].name);
    shownArr.push(ImgSrc.allImg[i].show);
    clickArr.push(ImgSrc.allImg[i].timeClike);
  }
  let ctx = document.getElementById( 'myChart' ).getContext( '2d' );

  let myChart = new Chart( ctx, {
    type: 'bar',
    data: {
      labels: nameArr,
      datasets: [{
        label: '# shown',
        data: shownArr,
        backgroundColor:[
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],

        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
      },{
        label: '# click',
        data: clickArr,
        backgroundColor:[
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],

        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
      }]

    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  } );
}

/*
function getData() {
  let data1=localStorage.getItem('product');
  if( data1 ) {
    let data = JSON.parse(data1 );
    for( let i = 0; i < data.length; i++ ) {
      new ImgSrc( data[i].name, data[i].show ,data[i].timeClike );
      console.log(data);
    }
  } else {
    for( let i = 0; i < galaryArray.length; i++ ) {
      new ImgSrc( galaryArray[i].split( '.' )[0], galaryArray[i] );
    }
  }
}*/


function getData() {
  if( localStorage.data ) {
    let data = JSON.parse( localStorage.data );
    console.log(data);
    for( let i = 0; i < data.length; i++ ) {
     // new ImgSrc( data[i].name, data[i].show ,data[i].timeClike);

      new ImgSrc(data[i].split('.')[0], data[i]);
    }
  } else {
    console.log();
    for( let i = 0; i <galaryArray.length; i++ ) {
      new ImgSrc(galaryArray[i].split( '.' )[0], galaryArray[i]);


    }
  }

}



