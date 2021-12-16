var randomno1= Math.floor(Math.random()*6)+1;
var ranimage="images/"+"dice"+randomno1+".png";

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",ranimage);


var ranno2 =Math.floor(Math.random()*6)+1;
var ranimage2="images/"+"dice"+ranno2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",ranimage2);


if (randomno1>ranno2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if (ranno2>randomno1) {
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";

}
else{
  document.querySelector("h1").innerHTML="Draw !";
}
