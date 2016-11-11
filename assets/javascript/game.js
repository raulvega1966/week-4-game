// When the user presses a key, it will run the following function...
                $(document).ready(function(){

              // Setting all variables - random number and diamonds shall have a random number selected.
              // for randonNumber the value shall be between 19 and 120.  For diamonds it shall be between 1 and 12.
                  var randomNumber = Math.floor((Math.random() * 101) + 19);
                  var diamond1 = Math.floor((Math.random() * 11) + 1);
                  var diamond2 = Math.floor((Math.random() * 11) + 1);
                  var diamond3 = Math.floor((Math.random() * 11) + 1);
                  var diamond4 = Math.floor((Math.random() * 12) + 1);
                  var playersum = 0;
                  var operator = "";
                  var wins = 0;
                  var losses = 0;

               //Console log to check my variables     
                    //console.log("1 randomNumber by comp: " + randomNumber);
                    //console.log("1 diamond1: " + diamond1);
                    //console.log("1 diamond2: " + diamond2);
                    //console.log("1 diamond3: " + diamond3);
                    //console.log("1 diamond4: " + diamond4);


        //Display of random number - number that player is trying to reach
                $('#randomNumber').html('<h4>' + randomNumber + '</h4>');


        // Add an on click listener to all elements that have the class "number"
                $(".number").on("click", function() {

        // Store off the operator
                operator = this.value;


        //If statements - if operator 1 is pressed, the value of that operator (diamond button 1) will be added to the total sum of the players guesses.
        //The value will be displayed on the screen.
        //This is repeated for the quantity of diamond buttons available.

            if (operator === "diamond1") {
                playersum = playersum + diamond1;
                $('#playersum').html('<h5>' + playersum + '</h5>');
            }

            if (operator === "diamond2") {
                playersum = playersum + diamond2;
                $('#playersum').html('<h5>' + playersum + '</h5>');
            }
        
            if (operator === "diamond3") {
                playersum = playersum + diamond3;
                $('#playersum').html('<h5>' + playersum + '</h5>');
            }

            if (operator === "diamond4") {
                playersum = playersum + diamond4;
                $('#playersum').html('<h5>' + playersum + '</h5>');
            }


        //If statement - if the player guesses total sum is equal to the random number selected then, the player wins and the a new random number selected for the player to guess and for each diamond.
          if (playersum === randomNumber) {
            wins++;
            $('#wins').html('<h3>' + wins + '</h3>');
            randomNumber = Math.floor((Math.random() * 30) + 19);
            $('#randomNumber').html('<h4>' + randomNumber + '</h4>');
            diamond1 = Math.floor((Math.random() * 12) + 1);
            diamond2 = Math.floor((Math.random() * 12) + 1);
            diamond3 = Math.floor((Math.random() * 12) + 1);
            diamond4 = Math.floor((Math.random() * 12) + 1);
            playersum = 0;
          
            //A bunch of console logs so I can check my code..........
                //console.log("W randomNumber by comp: " + randomNumber);
                //console.log("W diamond1: " + diamond1);
                //console.log("W diamond2: " + diamond2);
                //console.log("W diamond3: " + diamond3);
                //console.log("W diamond4: " + diamond4);
                //console.log("W your total score: " + playersum);
          }

        
        //If statement - if the player guesses total sum is equal to the random number selected then, the player wins and the a new random number selected for the player to guess and for each diamond.
          if (playersum > randomNumber) {
            losses++;
            $('#losses').html('<h3>' + losses + '</h3>');
            randomNumber = Math.floor((Math.random() * 30) + 19);
            $('#randomNumber').html('<h4>' + randomNumber + '</h4>');
            diamond1 = Math.floor((Math.random() * 12) + 1);
            diamond2 = Math.floor((Math.random() * 12) + 1);
            diamond3 = Math.floor((Math.random() * 12) + 1);
            diamond4 = Math.floor((Math.random() * 12) + 1);
            playersum = 0;

              //A bunch of console logs so I can check my code..........
                  //console.log("L randomNumber by comp: " + randomNumber);
                  //console.log("L diamond1: " + diamond1);
                  //console.log("L diamond2: " + diamond2);
                  //console.log("L diamond3: " + diamond3);
                  //console.log("L diamond4: " + diamond4);
                  //console.log("L your total score: " + playersum);
          }

                //More console logs to check code....................
                      //console.log($(this));
                      //playersum = playersum + diamond1;
                      //console.log("here is the player sum: " + playersum);
                      //console.log("wins total: " + wins);
                      //console.log("loss total: " + losses);


            var html =  "<h1></h1>";

          // Injecting the HTML we just created into our div and updating the game information on our page.
            document.querySelector("#game").innerHTML = html;

      });


})