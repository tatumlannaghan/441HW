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

function initializeArray()
{

    var skelly = new SkellyInfo("#skelly", "images/skelly.png");
    allSkelly.push(skelly);
}

$(document).ready(function(){
    initializeArray();
    console.log(allSkelly.length);
    console.log(allSkelly[0].toString());
    console.log(allSkelly[0].theSelector);
    console.log(allSkelly[0].theImagePath);
   
    $(allSkelly[0].theSelector).attr("src", allSkelly[0].theImagePath);

    $("button").click(function(){
       
        $(".first").fadeOut();

        $(".third, .second").toggle();
           setInterval(moveCircle, 100);
        
        $(allSkelly[0].theSelector).fadeOut().fadeIn();
    }); 
});
function moveCircle()
{
    $("#circle").animate({left:800}).animate({top:450}).animate({left:400}).animate({top:15});
}