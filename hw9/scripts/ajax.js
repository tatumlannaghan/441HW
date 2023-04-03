$(document).ready(function () {
    $("button").click(function () {
        $("#narcosInformation").load("data/narcosInfo.txt", fadeText);
    });
});

function fadeText()
{
    $("#narcosInformation").fadeOut().fadeIn();
}

$("button").click(function(){
    $.getJSON()
})