var body = document.querySelector( 'body' );

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

    bVal = Math.round( x * 1.416666667 ); // 255/180 = 1.416666667
    gVal = Math.round( y * 1.416666667 );

    body.style.backgroundColor = 'rgb(0, ' + gVal + ', ' + bVal + ')';
}

function handleMouse(e) {
    var x = e.pageX; 
    var y = e.pageY;
    
    var w = window.innerWidth;
    var h = window.innerHeight;

    var xP = x / w;
    var yP = y / h;

    var bVal = 127 + Math.round( xP * 127 );
    var gVal = 127 + Math.round( yP * 127 );

    body.style.backgroundColor = 'rgb(0, ' + bVal + ', ' + gVal + ')';
}

window.addEventListener('deviceorientation', handleTilt);
window.addEventListener('mousemove', handleMouse);
