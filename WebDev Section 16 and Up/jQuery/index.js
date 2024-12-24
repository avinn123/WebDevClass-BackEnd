// $("body").keypress(function (e){
//     $("h1").text(e.key);
// });

$("button").click(function (){
    var t = $(this).text();
    $("h1").text(t);
})
