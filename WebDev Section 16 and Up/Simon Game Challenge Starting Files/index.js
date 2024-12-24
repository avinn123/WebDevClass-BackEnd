function startGame(){
    $(".btn").click(function (){
        var clickedColor = $(this).attr("id");
        alert(clickedColor);
    });
}

// startGame();