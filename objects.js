//Running total for the score
let score = 0;
let dealerscore = 0;

//Display score keeper in score div
let scoreBox = document.getElementById("scoredisplay");
scoreBox.textContent = score; 

//Display score keeper in score div
let dealerScoreBox = document.getElementById("dealerscoredisplay");
dealerScoreBox.textContent = dealerscore; 

function pokerDeck() { 
    // List the suits and ranks
    let suits = ["hearts", "spades", "clubs", "diamonds"]; 
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    this.cards = [];
    // Add a card for each combination of suit and rank 
    for (let i = 0; i < 4; i++) { 
       for (let j = 0; j < 13; j++) { 
           // Add a pokerCard object
          this.cards.push(new pokerCard(suits[i], ranks[j])); 
          } 
    }

/* Constructor function for poker cards */ 
function pokerCard(cardSuit, cardRank) { 
    this.suit = cardSuit; 
    this.rank = cardRank; 
    }


    // Method to reference the image of the poker card 
    pokerCard.prototype.cardImage = function() { 
    return "cards/" + this.rank + "_" + this.suit + ".jpg";
    };

 
    // Method to randomly sort the cards in the deck
    this.shuffle = function() { 
      this.cards.sort(function() { 
         return 0.5 - Math.random();
     });
    };
 
    // Method to deal cards from the deck into a hand 
    this.dealTo = function(pokerHand) { 
     let cardsDealt = pokerHand.cards.length; 
       pokerHand.cards = this.cards.splice(0, cardsDealt);
       };
    };
 
    
 /* Constructor function for poker hands */ 
 function pokerHand(handLength) { 
    this.cards = new Array(handLength);
    }
    
 
   // Method to replace a card in a hand with a card from a deck 
   pokerHand.prototype.replaceCard = function(index, pokerDeck) { 
   this.cards[index] = pokerDeck.cards.shift();
   };




 // Method to determine the value of the pokerHand on flip
 pokerHand.prototype.getHandValue = function() { 
   return handType(this);
   function handType(pokerHand) {   

      for (let i = 0; i < pokerHand.cards.length; i++) {
         if (pokerHand.cards[i].rank === "ace") {
            pokerHand.cards[i].rankValue = 11;
         } else if (pokerHand.cards[i].rank === "king") {
            pokerHand.cards[i].rankValue = 10;
         } else if (pokerHand.cards[i].rank === "queen") {
            pokerHand.cards[i].rankValue = 10;
         } else if (pokerHand.cards[i].rank === "jack") {
            pokerHand.cards[i].rankValue = 10;
         } else {
            pokerHand.cards[i].rankValue = parseInt(pokerHand.cards[i].rank);
         }
      }    


      //Keeping score based on what rank the card is
      //functions to test for every rankValue
      //I feel this couldve been done in a switch or something
      function twoPoints() {
      if (pokerHand.cards[0].rankValue === 2) {
         return true;
         }}
         if (twoPoints()) {
            return score+=2;
         }

         function threePoints() {
            if (pokerHand.cards[0].rankValue === 3) {
               return true;
               }}
               if (threePoints()) {
                  return score+=3;
               }

               function fourPoints() {
                  if (pokerHand.cards[0].rankValue === 4) {
                     return true;
                     }}
                     if (fourPoints()) {
                        return score+=4;
                     }

                     function fivePoints() {
                        if (pokerHand.cards[0].rankValue === 5) {
                           return true;
                           }}
                           if (fivePoints()) {
                              return score+=5;
                           }

                           function sixPoints() {
                              if (pokerHand.cards[0].rankValue === 6) {
                                 return true;
                                 }}
                                 if (sixPoints()) {
                                    return score+=6;
                                 }

                                 
                           function sevenPoints() {
                              if (pokerHand.cards[0].rankValue === 7) {
                                 return true;
                                 }}
                                 if (sevenPoints()) {
                                    return score+=7;
                                 }
                                                                  
                           function eightPoints() {
                              if (pokerHand.cards[0].rankValue === 8) {
                                 return true;
                                 }}
                                 if (eightPoints()) {
                                    return score+=8;
                                 }

                                 function ninePoints() {
                                    if (pokerHand.cards[0].rankValue === 9) {
                                       return true;
                                       }}
                                       if (ninePoints()) {
                                          return score+=9;
                                       }

                                       
                                 function tenPoints() {
                                    if (pokerHand.cards[0].rankValue === 10) {
                                       return true;
                                       }}
                                       if (tenPoints()) {
                                          return score+=10;
                                       }


                                       function onePoints() {
                                          if (pokerHand.cards[0].rankValue === 11) {
                                             return true;
                                             }}
                                             if (onePoints()) {
                                                return score+=1;
                                             }
    }
}









 // Method to determine the value of the 2nd card on draw
 pokerHand.prototype.getDrawValue = function() { 
   return drawType(this);
   
//here i did the same but checked the [1]
function drawType(pokerHand) {   
   for (let i = 0; i < pokerHand.cards.length; i++) {
      if (pokerHand.cards[i].rank === "ace") {
         pokerHand.cards[i].rankValue = 11;
      } else if (pokerHand.cards[i].rank === "king") {
         pokerHand.cards[i].rankValue = 10;
      } else if (pokerHand.cards[i].rank === "queen") {
         pokerHand.cards[i].rankValue = 10;
      } else if (pokerHand.cards[i].rank === "jack") {
         pokerHand.cards[i].rankValue = 10;
      } else {
         pokerHand.cards[i].rankValue = parseInt(pokerHand.cards[i].rank);
      }
   }    

     function twoPoints() {
     if (pokerHand.cards[1].rankValue === 2) {
        return true;
        }}
        if (twoPoints()) {
         return score+=2;
        }

        function threePoints() {
           if (pokerHand.cards[1].rankValue === 3) {
              return true;
              }}
              if (threePoints()) {
               return score+=3;
              }

              function fourPoints() {
                 if (pokerHand.cards[1].rankValue === 4) {
                    return true;
                    }}
                    if (fourPoints()) {
                     return score+=4;
                    }

                    function fivePoints() {
                       if (pokerHand.cards[1].rankValue === 5) {
                          return true;
                          }}
                          if (fivePoints()) {
                             return score+=5;
                          }

                          function sixPoints() {
                             if (pokerHand.cards[1].rankValue === 6) {
                                return true;
                                }}
                                if (sixPoints()) {
                                 return score+=6;
                                }

                                
                          function sevenPoints() {
                             if (pokerHand.cards[1].rankValue === 7) {
                                return true;
                                }}
                                if (sevenPoints()) {
                                 return score+=7;
                                }
                                                                 
                          function eightPoints() {
                             if (pokerHand.cards[1].rankValue === 8) {
                                return true;
                                }}
                                if (eightPoints()) {
                                 return score+=8;
                                }

                                function ninePoints() {
                                   if (pokerHand.cards[1].rankValue === 9) {
                                      return true;
                                      }}
                                      if (ninePoints()) {
                                       return score+=9;
                                      }

                                      
                                function tenPoints() {
                                   if (pokerHand.cards[1].rankValue === 10) {
                                          return true; }
                                      }
                                      if (tenPoints()) {
                                       return score+=10;
                                      }
                                      
                                      
                                      function onePoints() {
                                       if (pokerHand.cards[1].rank === "ace") {
                                          return true;
                                          }}
                                          if (onePoints()) {
                                             return score+=1;
                                          }}}
   







                                          
//same thing AGAIN but to check for the computers cards

 // Method to determine the value of the face down dealer card
 pokerHand.prototype.getFaceValue = function() { 
   return faceType(this);
   
//here i did the same but checked the [1]

function faceType(pokerHand) {   
   for (let i = 0; i < pokerHand.cards.length; i++) {
      if (pokerHand.cards[i].rank === "ace") {
         pokerHand.cards[i].rankValue = 11;
      } else if (pokerHand.cards[i].rank === "king") {
         pokerHand.cards[i].rankValue = 10;
      } else if (pokerHand.cards[i].rank === "queen") {
         pokerHand.cards[i].rankValue = 10;
      } else if (pokerHand.cards[i].rank === "jack") {
         pokerHand.cards[i].rankValue = 10;
      } else {
         pokerHand.cards[i].rankValue = parseInt(pokerHand.cards[i].rank);
      }
   }    

     function twoPoints() {
     if (pokerHand.cards[2].rankValue === 2) {
        return true;
        }}
        if (twoPoints()) {
         return dealerscore+=2;
        }

        function threePoints() {
           if (pokerHand.cards[2].rankValue === 3) {
              return true;
              }}
              if (threePoints()) {
               return dealerscore+=3;
              }

              function fourPoints() {
                 if (pokerHand.cards[2].rankValue === 4) {
                    return true;
                    }}
                    if (fourPoints()) {
                     return dealerscore+=4;
                    }

                    function fivePoints() {
                       if (pokerHand.cards[2].rankValue === 5) {
                          return true;
                          }}
                          if (fivePoints()) {
                             return dealerscore+=5;
                          }

                          function sixPoints() {
                             if (pokerHand.cards[2].rankValue === 6) {
                                return true;
                                }}
                                if (sixPoints()) {
                                 return dealerscore+=6;
                                }

                                
                          function sevenPoints() {
                             if (pokerHand.cards[2].rankValue === 7) {
                                return true;
                                }}
                                if (sevenPoints()) {
                                 return dealerscore+=7;
                                }
                                                                 
                          function eightPoints() {
                             if (pokerHand.cards[2].rankValue === 8) {
                                return true;
                                }}
                                if (eightPoints()) {
                                 return dealerscore+=8;
                                }

                                function ninePoints() {
                                   if (pokerHand.cards[2].rankValue === 9) {
                                      return true;
                                      }}
                                      if (ninePoints()) {
                                       return dealerscore+=9;
                                      }

                                      
                                function tenPoints() {
                                   if (pokerHand.cards[2].rankValue === 10) {
                                          return true; }
                                      }
                                      if (tenPoints()) {
                                       return dealerscore+=10;
                                      }
                                      
                                      
                                      function onePoints() {
                                       if (pokerHand.cards[2].rank === "ace") {
                                          return true;
                                          }}
                                          if (onePoints()) {
                                             return dealerscore+=1;
                                          }
   }

 }
     
//here i did the same but checked the [3] to get the face up card fr dealer
pokerHand.prototype.getfourthValue = function() { 
   return fourthType(this);
   
function fourthType(pokerHand) {   
   for (let i = 0; i < pokerHand.cards.length; i++) {
      if (pokerHand.cards[i].rank === "ace") {
         pokerHand.cards[i].rankValue = 11;
      } else if (pokerHand.cards[i].rank === "king") {
         pokerHand.cards[i].rankValue = 10;
      } else if (pokerHand.cards[i].rank === "queen") {
         pokerHand.cards[i].rankValue = 10;
      } else if (pokerHand.cards[i].rank === "jack") {
         pokerHand.cards[i].rankValue = 10;
      } else {
         pokerHand.cards[i].rankValue = parseInt(pokerHand.cards[i].rank);
      }
   }    

     function twoPoints() {
     if (pokerHand.cards[3].rankValue === 2) {
        return true;
        }}
        if (twoPoints()) {
         return dealerscore+=2;
        }

        function threePoints() {
           if (pokerHand.cards[3].rankValue === 3) {
              return true;
              }}
              if (threePoints()) {
               return dealerscore+=3;
              }

              function fourPoints() {
                 if (pokerHand.cards[3].rankValue === 4) {
                    return true;
                    }}
                    if (fourPoints()) {
                     return dealerscore+=4;
                    }

                    function fivePoints() {
                       if (pokerHand.cards[3].rankValue === 5) {
                          return true;
                          }}
                          if (fivePoints()) {
                             return dealerscore+=5;
                          }

                          function sixPoints() {
                             if (pokerHand.cards[3].rankValue === 6) {
                                return true;
                                }}
                                if (sixPoints()) {
                                 return dealerscore+=6;
                                }

                                
                          function sevenPoints() {
                             if (pokerHand.cards[3].rankValue === 7) {
                                return true;
                                }}
                                if (sevenPoints()) {
                                 return dealerscore+=7;
                                }
                                                                 
                          function eightPoints() {
                             if (pokerHand.cards[3].rankValue === 8) {
                                return true;
                                }}
                                if (eightPoints()) {
                                 return dealerscore+=8;
                                }

                                function ninePoints() {
                                   if (pokerHand.cards[3].rankValue === 9) {
                                      return true;
                                      }}
                                      if (ninePoints()) {
                                       return dealerscore+=9;
                                      }

                                      
                                function tenPoints() {
                                   if (pokerHand.cards[3].rankValue === 10) {
                                          return true; }
                                      }
                                      if (tenPoints()) {
                                       return dealerscore+=10;
                                      }
                                      
                                      
                                      function onePoints() {
                                       if (pokerHand.cards[3].rank === "ace") {
                                          return true;
                                          }}
                                          if (onePoints()) {
                                             return dealerscore+=1;
                                          }
}}

