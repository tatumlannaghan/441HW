let narcos = {
    "name" : "Narcos",
    "type" : "Scripted",
    "language" : "English",
    "life" : {
        "premiered" : "2015",
        "ended" : "2017"
    },
    "starring" : [
        "Wagner Moura",
        "Pedro Pascal",
        "Boyd Holbrook"
    ]
}

$(function () {
$("button").click(function () {
    showNarcosInfo();
    $(allBoyd[0].theSelector).fadeOut();
    $(allWagner[0].theSelector).fadeOut();
    $(allPedro[0].theSelector).fadeOut();
});

});

function showNarcosInfo()
{
    $("#narcosInformation").html("Name: " + narcos.name
        + "<br>Type:" + narcos.type + "<br>Premiered:" + narcos.life.premiered + "<br>Ended:" 
        + narcos.life.ended + "<br>Starring:<br>" +
        narcos.starring[0] + "<br>" + narcos.starring[1] + "<br>" + narcos.starring[2]);
        };

var pedroSelector = "#pedro";
var allPedro = new Array();
class PedroInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }
    get theSelector(){
        return this.selector;
    }
    get theImagePath(){
        return this.imagePath;
    }
    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}
var wagnerSelector = "#wagner";
var allWagner = new Array();
class WagnerInfo{
    constructor(selector1, imagePath1)
    {
        this.selector1 = selector1;
        this.imagePath1 = imagePath1;
    }
    get theSelector1(){
        return this.selector1;
    }
    get theImagePath1(){
        return this.imagePath1;
    }
    toString1()
    {
        return this.selector1 + ":" + this.imagePath1; 
    }
}
var boydSelector = "#boyd";
var allBoyd = new Array();
class BoydInfo{
    constructor(selector1, imagePath1)
    {
        this.selector1 = selector1;
        this.imagePath1 = imagePath1;
    }
    get theSelector1(){
        return this.selector1;
    }
    get theImagePath1(){
        return this.imagePath1;
    }
    toString1()
    {
        return this.selector1 + ":" + this.imagePath1; 
    }
}
function initializeArray()
{

    var pedro = new PedroInfo("#pedro", "images/pedro.jpg");
    var wagner = new WagnerInfo("#wagner", "images/wagner.jpg");
    var boyd = new BoydInfo("#boyd", "images/boyd.jpg");
    allPedro.push(pedro);
    allWagner.push(wagner);
    allBoyd.push(boyd);
}