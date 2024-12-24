var drumList = document.querySelectorAll(".drum")
for (i=0; i<drumList.length;i++){
    drumList[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
     
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    


}

document.addEventListener("keypress",function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
});



function makeSound(keyPressed){
    // alert("I got clicked");
    
   
    
    // switch(buttonInnerHTML)
    switch(keyPressed)
    {
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            // buttonClassList.remove('pressed');
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            // buttonClassList.remove('pressed');
            break;
        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            // buttonClassList.remove('pressed');
            break;
        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            // buttonClassList.remove('pressed');
            break;
        case 'j':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            // buttonClassList.remove('pressed');
            break;
        case 'k':
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            // buttonClassList.remove('pressed');
            break;
        case 'l':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            // buttonClassList.remove('pressed');
            break;
        default:
            console.log(keyPressed);
    }
}

function buttonAnimation(key){
 let activeButton = document.querySelector("."+key);
 activeButton.classList.add("pressed");
//  setTimeout(deActivate,200);

setTimeout(function (){activeButton.classList.remove("pressed");},200);
//  function deActivate(){
//     document.querySelector(activeButton).classList.remove("pressed");
// }

}