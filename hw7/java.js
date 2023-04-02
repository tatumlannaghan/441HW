var myViewFinderArray = new Array();
var socialJusticePhoto = "images/flowerpower.jpg"; 
class ViewFinder{
    constructor(title){
        this.title =title;
    }
    toString(){
        return "Social Justice:  " + this.title; 
    }
    get theTitle()
    {
        return this.title;
    }
}
  

function initializeArray()
{
    // objects
    var myViewFinder = new ViewFinder("Author, Bernie Boston");
    var myViewFinder1 = new ViewFinder("Date, October 21, 1967");
    var myViewFinder2 = new ViewFinder("Title, Flower Power");
    var myViewFinder3 = new ViewFinder("Description, A young man putting flowers down the barrel of riffles during an Anti-Vietnam War protest outside the Pentagon");
    var actualImagePath = "images/flowerpower.jpg";
    // add objects to array
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(actualImagePath);

}
function accessInformation()
{
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}
