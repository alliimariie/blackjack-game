"use strict";
/*   

    blacjack    

 */

window.addEventListener("load", playBlackjack); //play blacjack when page loads

function playBlackjack() {
   // Reference buttons and images
   let flipButton = document.getElementById("flipB"); //Flip button
   let drawButton = document.getElementById("drawB"); //draw button
   let standButton = document.getElementById("standB"); //draw button
   let statusBox = document.getElementById("status");
   let cardImages = document.querySelectorAll("img.cardImg"); //select Images with cardImg class

   // Create a deck of shuffled cards 
   let myDeck = new pokerDeck(); 
   myDeck.shuffle();

   // Create an empty poker hand object 
   let myHand = new pokerHand(4);

   standButton.disabled = true; 
   flipButton.disabled = true;    //disable stand or flip buttons until cars are drawn



drawButton.addEventListener("click", function() {
      standButton.disabled = false;       drawButton.disabled = true;
      flipButton.disabled = false;      // Turn off the Draw Button
            // Deal 2 cards from the deck to the hand 
            myDeck.dealTo(myHand); 

            // Display the card images on the table 
            for (let i = 0; i < 2; i++) { 
               cardImages[i].src = myHand.cards[i].cardImage();
            }
                        // Display the card images on the table 
                        for (let i = 3; i < 4; i++) { 
                          cardImages[i].src = myHand.cards[i].cardImage();
                       }
            //Methods to evaluate the 1st and 2nd cards on the table (Player cards)
            scoreBox.textContent = myHand.getDrawValue();
            scoreBox.textContent = myHand.getHandValue();
            dealerScoreBox.textContent = myHand.getfourthValue();
            
});


//Flip 1 card over
flipButton.addEventListener("click", function() {
      drawButton.disabled = true;      // Turn off the Draw Button
      flipButton.disabled = false;      // Turn on the Flip Button
      standButton.disabled = false; 

       // Replace first card in player deck
       for (let i = 0; i < 1; i++) { 
       if (cardImages[i]) { 
         // Replace the card and its image on the table 
         myHand.replaceCard(i, myDeck);
         cardImages[i].src = myHand.cards[i].cardImage(); } }

         // Evaluate the hand drawn by user 
         scoreBox.textContent = myHand.getHandValue();
         dealerScoreBox.textContent = myHand.getfourthValue();

         

          //if over 21, bust
          if (score > 21) {
            statusBox.textContent = "You went over 21! Game over.";
            drawButton.disabled = true;      // Turn off the Draw Button
            flipButton.disabled = true;      // Turn off the Flip Button
            standButton.disabled = true; 
          }
          //if over 21, bust for dealer 
          if (dealerscore > 21) {
            statusBox.textContent = "Dealer went over 21! You win.";
            drawButton.disabled = true;      // Turn off the Draw Button
            flipButton.disabled = true;      // Turn off the Flip Button
            standButton.disabled = true; 
          }

          
       // Replace 2nd card in dealer deck
       for (let i = 3; i < 4; i++) { 
        if (cardImages[i]) { 
          // Replace the card and its image on the table 
          myHand.replaceCard(i, myDeck);
          cardImages[i].src = myHand.cards[i].cardImage(); }}

});


standButton.addEventListener("click", function() {
  standButton.disabled = true; 
  drawButton.disabled = true;      // Turn off the Draw Button
  flipButton.disabled = true;      // Turn off the Flip Button

  myDeck.dealTo(myHand); 

      // Display the card images on the table 
        for (let i = 2; i < 3; i++) { 
          cardImages[i].src = myHand.cards[i].cardImage();
        }

    //Face down card value evaluated
    dealerScoreBox.textContent = myHand.getFaceValue();


    //Compare scores
    if (dealerscore > score && dealerscore <= 21) {
      statusBox.textContent = "You lose!"
    }
    else if (score > dealerscore && score <= 21)  {
      statusBox.textContent = "You won!"
    }
    else if (score > dealerscore && score > 21)  {
      statusBox.textContent = "You lost!"
    }
    else {
      statusBox.textContent = "You lost!"
    }
         }
)};
