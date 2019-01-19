var container = document.querySelector( '.container' );
var details = document.querySelector( '.details' );
var h1 = 120;
var h2 = 210;
var deg = 45;

function handleTilt(e) {
    var x = e.beta;  // In degree in the range [-180,180]
    var y = e.gamma; // In degree in the range [-90,90]

    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (x >  90) { x =  90};
    if (x < -90) { x = -90};

    // To make computation easier we shift the range of 
    // x and y to [0,180]
    x += 90;
    y += 90;

    var h1 = Math.round( x * 2 );
    var h2 = Math.round( y * 2 );

    container.style.background = 'linear-gradient( 45deg, hsl(' + h1  + ', 100%, 30%), hsl(' + h2 + ', 100%, 30%))';
}

var centreX = window.innerWidth / 2;
var centreY = window.innerHeight / 2;

function handleMouse(e) {
    // Increment colour and gradient rotation
    if ( h1 === 360 ) {
        h1 = 0;
    } else {
        h1++;
    }

    if ( h2 === 360 ) {
        h2 = 0;
    } else {
        h2++;
    }

    if ( deg === 360 ) {
        deg = 0;
    } else {
        deg++;
    }

    container.style.background = 'linear-gradient(' + deg + 'deg, hsl(' + h1 + ', 100%, 30%), hsl(' + h2 + ', 100%, 30%))';
}

window.addEventListener('deviceorientation', handleTilt);
window.addEventListener('mousemove', handleMouse);
