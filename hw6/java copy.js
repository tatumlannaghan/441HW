// array
var imageTags = ["image1", "image2", "image3", "image4"];
// blank variable
var blankImagePath = "images/boot.jpg";
// actual images
var actualImages = new Array();
    
function printBlanks()
{
    createRandomImageArray();
    // for loop
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
    
    
}

function createRandomImageArray()
{
    var actualImagePath = ["images/cowboy.jpg", "images/shoe.jpg"];
    var count = [0,0];
    // while statement
    while(actualImages.length < 4)
    {
        // random
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    
  
    
    
        
}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];
}