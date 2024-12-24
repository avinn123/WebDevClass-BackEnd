const COLORS = ['green','red','yellow','blue'];
var question = [];
var answer = [];
var clickedColor = '';
var levelNumber = 1;
var gameOver = true;
var pressedKey = '';

function reset()
{
    answer = [];
    question = [];
    levelNumber = 1;
}

$(".btn").click(function () {
    clickedColor = $(this).attr("id");
    playSound(clickedColor);
    performAnimation(clickedColor);
    answer.push(clickedColor);
    console.log("Answer: "+answer);
    var answerCorrect = true;
    for (i=0;i<answer.length;i++){
        if(answer[i] == question[i]){
            
            continue
        }
        else{
            gameOver = true;
            answerCorrect = false;
            playSound("wrong");
            $("body").addClass("wrong");
            setTimeout(function (){$("body").removeClass("wrong");},200);
            $("#level-title").text("Game Over, Press Any Key to Restart");
            console.log("Answer WRONG!!")
            reset();
            break;
            
        }
    }
    if ((answer.length == question.length) && answerCorrect)    {
        console.log("ANSWER CORRECT");
        levelNumber += 1;
        $("#level-title").text("Level "+levelNumber);
        answer = [];
        
        question = getQuestion();

    }
    
    
});

$(document).keypress(function (e){
    if(gameOver){
        gameOver = false;
        reset();
        question = getQuestion();
        $("#level-title").text("Level "+levelNumber);
        // console.log("Question : "+question);
        
    }
})



    
function performAnimation(color)
{
    $("#"+color).addClass("pressed");
    setTimeout(function (){$("#"+color).removeClass("pressed");},200);
}

function playSound(color){
    var sound = new Audio('./sounds/'+color+'.mp3');
    sound.play();
}

function getQuestion (){
    var randomNumber = Math.floor(Math.random() * 4);
    var nextColor = COLORS[randomNumber];
    question.push(nextColor);
    
    setTimeout(function () {performAnimation(nextColor);
        playSound(nextColor);
    },500);
    console.log("QUESTION : "+question);
    return question;
}


