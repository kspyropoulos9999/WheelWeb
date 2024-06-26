// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.box');
  const startButton = document.querySelector('.spin');
  const display = document.querySelector('.display');
  const scoreButton = document.getElementById("submitGuess");
  const scorePlayerTwo = document.getElementById("scoreTwo");
  const resetButton = document.getElementById("RESET");

  var x = document.getElementById("guess");
  var score = 0;
 


  let deg = 0;
  let zoneSize = 45; // deg
  let count = 0
  // Counter clockwise
  const symbolSegments = {
    1: "8",
    2: "3",
    3: "5",
    4: "2",
    5: "7",
    6: "4",
    7: "6",
    8: "1",
  }


  resetButton.addEventListener('click', () => {
    score = 0;
    scorePlayerTwo.innerHTML = score;
  });
 

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];
 // Reset display x.value

    let counter = 0;
    if ( x.value == parseInt(symbolSegments[winningSymbolNr]) && counter == 0)
    {
    	score++;
    	scorePlayerTwo.innerHTML = score;
      counter++;
    }
     
    
    

          
   
    
    

    
  }

   
    
  
  startButton.addEventListener('click', () => {
    // Reset display
    display.innerHTML = "-";
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 10s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
 
  

  });
})();
