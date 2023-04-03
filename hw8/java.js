var skellySelector = "#skelly";
var allSkelly = new Array();
class SkellyInfo{
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

var skellifredSelector = "#skellifred";
var allSkellifred = new Array();
class SkellifredInfo{
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

    var skelly = new SkellyInfo("#skelly", "images/skelly.png");
    var skellifred = new SkellifredInfo("#skellifred", "images/skellifred.jpeg")
    allSkelly.push(skelly);
    allSkellifred.push(skellifred);
}


$(document).ready(function(){
    initializeArray();
    console.log(allSkelly.length);
    console.log(allSkelly[0].toString());
    console.log(allSkelly[0].theSelector);
    console.log(allSkelly[0].theImagePath);

    console.log(allSkellifred.length);
    console.log(allSkellifred[0].toString1());
    console.log(allSkellifred[0].theSelector1);
    console.log(allSkellifred[0].theImagePath1);
   
    $(allSkelly[0].theSelector).attr("src", allSkelly[0].theImagePath);
    $(allSkellifred[0].theSelector1).attr("src", allSkellifred[0].theImagePath1);

    $("button").click(function(){
       
        $(".first").fadeOut();
        setInterval(changeSkelly, 100);

        $(".third, .second").toggle();
           setInterval(moveCirclePeach, 100);
           setInterval(moveCircleGreen, 100);
        
           $(allSkelly[0].theSelector).fadeOut();
       
    }); 
});
function moveCirclePeach()
{
    $("#circlePeach").animate({left:800}).animate({top:450}).animate({left:400}).animate({top:15});
    $("#circlePeach").fadeOut(3000);
}
function changeSkelly()
{
    $(allSkellifred[0].theSelector1).fadeIn(3000);
}
function moveCircleGreen()
{
    $("#circleGreen").fadeOut(3000);
}