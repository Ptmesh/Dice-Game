
// For Dice 1

var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDice1="dice"+randomNumber1+".png";

var randomImage1="images/"+randomDice1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage1);



// For Dice 2

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDice2="dice"+randomNumber2+".png";

var randomImage2="images/"+randomDice2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage2);


// Better and Quicker Way

// var randomNumber1=Math.floor(Math.random()*6)+1;
// var randomImage1="images/dice"+randomNumber1+".png";
// document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

// var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomImage2="images/dice"+randomNumber2+".png";
// document.querySelectorAll("img")[1].setAttribute("src",randomImage2);



// Results Message

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins! 🚩 🥳"
}
else if (randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 Wins! 🥳 🚩"
}
else
{
  document.querySelector("h1").innerHTML="🚩 Draw! 🚩"
}
