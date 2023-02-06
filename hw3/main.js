function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Woohoo! Usually people just see Debbie and sweep her away. You wouldn't do that though. Or would you? Debbie doesn't know your character. Anyway, want to go to the kitchen or the living room?";
        document.getElementById("choice1").innerHTML = "I'm hungry, kitchen!";
        document.getElementById("choice2").innerHTML = "Let's check out the living room";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "That's kind of mean. What did Debbie do to you?";
        document.getElementById("choice1").innerHTML = "She's gross and dusty";
        document.getElementById("choice2").innerHTML = "I'm just a mean mean person";
       
       
        //kitchen or living room
    } else if (choice == 1 && answer1 == "I'm hungry, kitchen!") {
        document.getElementById("story").innerHTML = "Want something to eat? See Debbie is a good host.";
        document.getElementById("choice1").innerHTML = "Cupcake";
        document.getElementById("choice2").innerHTML = "Cookie";
    } else if (choice == 2 && answer2 == "Let's check out the living room") {
        document.getElementById("story").innerHTML = "OH MY GOD. DEBBIE FORGOT SHE HAD A PET FISH AND DIDN'T FEED IT. HELP GET RID OF THE BODY";
        document.getElementById("choice1").innerHTML = "Flush it down the toilet";
        document.getElementById("choice2").innerHTML = "Cut it up into pieces and blame the next door neighbor. (They've always had beef)";
       
       
        //kitchen
    } else if (choice == 1 && answer1 == "Cupcake") {
        document.getElementById("story").innerHTML = "Debbie is a dust bunny and has forgotten she lacks the ability to make food. You have upset her. She will now go mope under a dresser all night. Try to not upset her again tomorrow.";
        document.getElementById("choice1").innerHTML = "I'm Sorry Debbie :/ Try again";
        document.getElementById("choice2").innerHTML = "Cut all ties with Debbie now that you've embarrassed her and yourself.";
    } else if (choice == 2 && answer2 == "Cookie") {
            document.getElementById("story").innerHTML = "Debbie is a dust bunny and has forgotten she lacks the ability to make food. You have upset her. She will now go mope under a dresser all night. Try to not upset her again tomorrow.";
            document.getElementById("choice1").innerHTML = "I'm Sorry Debbie :/ Try again";
            document.getElementById("choice2").innerHTML = "Cut all ties with Debbie now that you've embarrassed her and yourself.";
    } else if (choice == 1 && answer1 == "I'm Sorry Debbie :/ Try again") {
            document.getElementById("story").innerHTML = "Debbie doesn't want to see your face anymore. Please leave and never return.";
            document.getElementById("choice1").innerHTML = " ";
        document.getElementById("choice2").innerHTML = " ";
     } else if (choice == 2 && answer2 == "Cut all ties with Debbie now that you've embarrassed her and yourself.") {
            document.getElementById("story").innerHTML = "Debbie says good riddance and hops away."; document.getElementById("choice1").innerHTML = " ";
            document.getElementById("choice2").innerHTML = " ";
       
       
            //living room
    } else if (choice == 2 && answer2 == "Cut it up into pieces and blame the next door neighbor. (They've always had beef)") {
        document.getElementById("story").innerHTML = "You and Debbie are now bonded for life after blaming someone else for Debbie's crimes.";
        document.getElementById("choice1").innerHTML = "Become closer than ever with Debbie";
        document.getElementById("choice2").innerHTML = "Never speak to Debbie again.";
    } else if (choice == 1 && answer1 == "Flush it down the toilet") {
        document.getElementById("story").innerHTML = "That is so inhumane. Debbie thinks it'd be better if you just left.";
        document.getElementById("choice1").innerHTML = " ";
        document.getElementById("choice2").innerHTML = " ";
       
       
        //Criminals
    } else if (choice == 1 && answer1 == "Become closer than ever with Debbie") {
        document.getElementById("story").innerHTML = "Congrats you now have a brand new bestie, DEBBIE! What now?";
        document.getElementById("choice1").innerHTML = "Never mention it again";
        document.getElementById("choice2").innerHTML = "Let the fear overcome your every living second until it is eventually unbarable and you rat out Debbie to the cops.";      
    } else if (choice == 1 && answer1 == "Never mention it again") {
        document.getElementById("story").innerHTML = "Debbie agrees. She also thinks it's time you leave";
        document.getElementById("choice1").innerHTML = "Bye";
        document.getElementById("choice2").innerHTML = "Bye";      
    } else if (choice == 2 && answer2 == "Let the fear overcome your every living second until it is eventually unbarable and you rat out Debbie to the cops.") {
        document.getElementById("story").innerHTML = "Debbie always knew you'd crack under the pressure first which is why she told the cops it was all your idea. You've been played.";
        document.getElementById("choice1").innerHTML = "Bye";
        document.getElementById("choice2").innerHTML = "Bye";      
    } else if (choice == 2 && answer2 == "Never speak to Debbie again.") {
        document.getElementById("story").innerHTML = "You and Debbie really could've been something. But it's for the best.";
        document.getElementById("choice1").innerHTML = "Bye";
        document.getElementById("choice2").innerHTML = "Bye"; 
        
        
        //mean to debbie
    } else if (choice == 1 && answer1 == "She's gross and dusty") {
        document.getElementById("story").innerHTML = "I mean she is a dust bunny. But she understands.";
        document.getElementById("choice1").innerHTML = "Bye";
        document.getElementById("choice2").innerHTML = "Bye"; 
    } else if (choice == 2 && answer2 == "I'm just a mean mean person") {
        document.getElementById("story").innerHTML = "You may be mean, but Debbie is ruthless. This day could've turned into Debbie framing you for murder. You've dodged a bullet my friend.";
        document.getElementById("choice1").innerHTML = "Bye";
        document.getElementById("choice2").innerHTML = "Bye"; 
    }
}