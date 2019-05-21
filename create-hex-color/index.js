let value =[0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];


document.querySelector(".container__text-block--btn").addEventListener('click',getHexValue);

function getHexValue(){
    let hastag = "#";
  for(let i = 0; i < 6; i++){
     let getValue = Math.floor(Math.random() * value.length);
     
     hastag = hastag + value[getValue];
     
  }
  document.querySelector('.container__text-block--heading').innerHTML = "The hex color is : " + hastag;

  document.querySelector("body").style.backgroundColor = hastag;


}