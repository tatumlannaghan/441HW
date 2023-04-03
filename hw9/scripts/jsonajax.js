$(document).ready(function () {
    $("button").click(function () {
        $("#narcosInformation").load("data/narcos.json", function(responseText){
            var narcos = JSON.parse(responseText);
            $("#narcosInformation").html("Name: " + narcos.name
        + "<br>Type:" + bike.type + "<br>Premiered:" + bike.life.premiered + "<br>Ended:" 
        + bike.life.ended + "<br>Starring:<br>" +
        bike.starring[0] + "<br>" + bike.starring[1] + "<br>" + bike.starring[2]);
        });
    });
});
