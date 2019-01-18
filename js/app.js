var body = document.querySelector( 'body' );

function handleTilt(e) {
    var x = e.beta;  // In degree in the range [-180,180]
    var y = e.gamma; // In degree in the range [-90,90]
    var z = e.alpha; // In degree in the range [0,360]

    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (x >  90) { x =  90};
    if (x < -90) { x = -90};

    // To make computation easier we shift the range of 
    // x and y to [0,180]
    x += 90;
    y += 90;

    rVal = Math.round( x * 1.416666667 ); // 255/180 = 1.416666667
    gVal = Math.round( y * 1.416666667 );
    bVal = Math.round( z * .708333333 ); // 255/360 = .708333333

    body.style.backgroundColor = 'rgb(' + rVal + ', ' + gVal + ', ' + bVal + ')';
}

window.addEventListener('deviceorientation', handleTilt);
