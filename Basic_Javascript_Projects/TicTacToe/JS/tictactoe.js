//This variable keeps track of who's turn it is.
let activePlayer = 'x';
//This array stores an array of moves. we use this to determine win conditions.
let selectedSquares = [];

//This funtion is for placing an x or o in a square. 
function placeXOrO(squareNumber) {
    //This condition ensures a squares hasn't be slected already.
    //The .some() method is used to check each element of selectedSquare array to 
    //see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is. 
        if(activePlayer === 'x') {
            //if activePlayer is equal to X the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
        //Actgive player may only be 'x' or 'o' so, if not 'x' it must be 'o'
        } else {
            //if activePlayer is equal to 'x', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'x') {
            //if active player is 'x' change it to 'o'
            activePlayer = 'o';
        //if active player is anthing other than ;x;.
        } else {
            //Change the actgive player to 'x'
            activePlayer = 'x';
        }


        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it is computers turn.
        if(activePlayer === 'o') {
            //This function disable clicking for computer choice.
            disableClick();
            //This function waits 1 second before placing the image
            //and anabling vlick.
            setTimeout(function () {computersTurn(); }, 1000);
        }

        //Returning tru is needed for our computersTurn() functino to work.
        return true;
    }

    //This function results in a random square being selected.
    function computersTurn() {
        //This boolean is need for our while loop. 
        let success = false;
        //This variable stores a random number 0-8
        let pickASquare;
        //This condition allows our while loop to keep
        //Trying if a square is selected already
        while(!success) {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluates returns tur, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop
                success = true;
            }
        }

    }
}


//This function parses the selectedSquares array to search for win conditions.
//drawwinLine function is called to draw line if condition is met.
function checkWinConditions() {
    //X O, 1, 2 condition.
    if (arrayIncludes('0x', '1x', '2x')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('0x', '1x', '2x')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('3x', '4x', '5x')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('6x', '7x', '8x')) { drawWinLine(100, 50, 304, 558); }
    else if (arrayIncludes('0x', '3x', '6x')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('1x', '4x', '7x')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('2x', '5x', '8x')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0x', '4x', '8x')) { drawWinLine(100, 100, 520, 520); }
    else if (arrayIncludes('0o', '1o', '2o')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3o', '4o', '5o')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6o', '7o', '8o')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0o', '3o', '6o')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1o', '4o', '7o')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2o', '5o', '8o')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6o', '4o', '2o')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0o', '4o', '8o')) { drawWinLine(100, 100, 520, 520); }
    //This condition checks for tie. if noe of the above conditions register
    //and 9 squares are selected, the code executes.
    else if (selectedSquares.lenth >= 9) {
        //This condition plays the tie game sound.
        Audio('./media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 1000);
    }

    //This function checks if any array includes 3 strings.
    //It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //The next 3 variables will be used to check for 3 in a row. 
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables we pass are all icluded in our array true is
        //returned and our else if condition executes the drawWinline funciton.
        if (a === true && b === true && c === true) { return true; }
    }

}


//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unlickable.
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1 second.
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//this function takes a string parameter of the path we set earlier for 
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //we create a new audio object and we pass the path as a paramter.
    let audio = new Audio(audioURL);
    //play method plays our audio sound.
    audio.play();
}

//this funciton utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses our html canvas element.
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    //this line indicates where the start of the lines x axis is. j
    let x1 = coordX1,
        //this line idicates where the end of a lines y axis is. 
        y1 = coordY1,
        //this line indicates where the end of a lines x axis is. 
        x2 = coordX2,
        //this line indicates where the end of a lines x axis is.
        y2 = coordY2,
        //this variable stores temporary x xis data we update in our animation loop.
        x = x1,
        //this variable stores temporary y axis data we update in our animation loop. 
        y = y1;
    //This function interacts with the canvas
    function animateLineDrawing() {
        //this variable creates the loop for when the game ends it restarts.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from the last loop interation. 
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path
        c.beginPath();
        //this method moves us to a starting point for our line.
        c.moveTo(x1, y1);
        //this method indicates the end point in our line.
        c.lineTo(x, y);
        //this method set the width of our line. 
        c.strokeStyle = 'rgba(70, 255, 22, .8)';
        //this method draws everthing we laid out above.
        c.stroke();
        //this condition checks if we've reached the endpoint.
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the previous end x point. 
            if (x < x2) { x += 10; }
            //this condition adds 10 to the previous end y point. 
            if (y < y2) { y += 10; }
            //this condition canvels our animation loop if reach the end points. 
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //this condition is similar to the one above.
        //it was necessary for the 6, 4, 2, win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
        }
    }
}
//this function clears our canvas after our win line is drawn
function clear() {
    //This line starts our animation loop
    const animationLoop = requestAnimationFrame(clear);
    //this line clears our canvas.
    c.clearRect(0, 0, 608, 608);
    //this line stops our animation loop.
    cancelAnimationFrame(animationLoop);
}

//this line disallows clicking while the win sound is playing
disableClick();
//this line plays with win sounds.
audio('./media/winGame.mp3');
//this line calls our main animation loop.
animateLineDrawing();
//this line waits 1 second
//then, clears canvas, resets game, and allows clicking again. 
setTimeout(function () { clear(); }, 1000);
