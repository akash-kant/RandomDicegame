var randomNumber1= (Math.floor(Math.random() * 6)+1);

var randomDiceimg = "dice" + randomNumber1 +".png";

var randimgsrc = "images/" +randomDiceimg ;

document.querySelectorAll("img")[0].setAttribute("src", randimgsrc);

var randomNumber2= (Math.floor(Math.random() * 6)+1);

var randomDiceimg2 = "dice" + randomNumber2 +".png";

var randimgsrc2 = "images/" +randomDiceimg2 ;

document.querySelectorAll("img")[1].setAttribute("src", randimgsrc2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🎉 Player 1 wins ";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 wins 🎉";
}else{
    document.querySelector("h1").innerHTML= "Ohhh!📣 it's a Draw....";
}