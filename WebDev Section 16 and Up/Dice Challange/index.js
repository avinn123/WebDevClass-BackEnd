if(sessionStorage.getItem('flag') === null)
{
    document.querySelector("h1").innerHTML="Refresh Me";
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    sessionStorage.setItem('flag','1');
}
else{
    dieValues = getNewDice();
    roll(dieValues);
    
}


function roll(dieValues){
if (dieValues[0] > dieValues[1]){
    var crash = new Audio('./sounds/crash.mp3');
    crash.play();
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
    console.log("Player 1 wins!");
    
}

else if (dieValues[0] < dieValues[1]){
    var snare = new Audio('./sounds/snare.mp3');
    snare.play();
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
    console.log("Player 2 wins!");
    
}

else{
    var kick = new Audio('./sounds/kick-bass.mp3');
    kick.play();
    document.querySelector("h1").innerHTML="🚩Draw🚩";
    console.log("🚩Draw🚩");
    
}
}


function getNewDice()
{
    var n1 = Math.floor(Math.random() * 6) + 1;
    var src1 = "./images/dice"+n1+".png"
    document.querySelector(".img1").setAttribute("src",src1);
    var n2 = Math.floor(Math.random() * 6) + 1;
    var src2 = "./images/dice"+n2+".png"
    document.querySelector(".img2").setAttribute("src",src2);
    return ([n1,n2]);
}