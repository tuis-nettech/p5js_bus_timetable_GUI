//BUILT-in FUNC
function windowResized() {
    width = windowWidth;
    height = windowHeight;
    resizeCanvas(width, height);
}

/*-----------------------------*/

// CUSTOM FUNC
function getTime() {
    //  GET TIME  //////////////////////////////
    xh = hour();
    xm = minute();
    xs = second();
    //    var ms = Math.floor(millis()/100)%10;
    //  FORMATING TO TWO DIGITS  ///////////////
    h = n(xh);
    m = n(xm);
    s = n(xs);

}

//  TIME FORMATING
function n(n){
    return n > 9 ? "" + n: "0" + n;
}
function nsh(n){
    return n > 999 ? "" + n: "0" + n;
}

function printTime() {
    stroke(0);
    textSize(20);
    textAlign(LEFT,TOP);
    fill('white');
    text(h + ":" + m + ":" + s,currentPosition+5,50);
}


function drawAxis() {
    // Main axis
    stroke(255);
    strokeWeight(2);
    line(0, height/2, width, height/2);
    for (var i = -3; i < 4; i++) {
        drawAxis_Hour(calculateOffset(m,s),i);
    }
    drawAxis_Time(calculateOffset(m,s));
}

function drawAxis_Hour(offset,times) {
    stroke(255);
    strokeWeight(2);
    for (var i = 0; i < 6; i++) {
        line(currentPosition+30*ls*times + ls*i*5 - offset, 11*height/24, currentPosition+30*ls*times + ls*i*5 - offset, height/2-1);
    }
    strokeWeight(1);
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 5; j++) {
            line(currentPosition+30*ls*times + ls*j + 5*ls*i - offset, 11.5*height/24, currentPosition+30*ls*times + ls*j + 5*ls*i - offset, height/2);
        }
    }
}
function calculateOffset(min,sec) {
    x = (60*parseInt(min)+parseInt(sec))*(ls/120);
    return x;
}
function drawAxis_Time(offset) {
    stroke(0);
    textSize(20);
    fill('white');
    for (var i = -4; i < 4; i++) {
        text(n(parseInt(h)+parseInt(i)) + ":00:00",currentPosition + ls*i*30 - offset - 1.65*ls, height/2+25);
    }
}




function drawLabelHigh(time,bus,position,PH) {
    var shHour = nsh(time).substr(0,2);
    var shMinu = nsh(time).substr(2,2);
    var plusOffset = ( (parseInt(shHour)*60*60+parseInt(shMinu)*60) - (parseInt(h)*60*60+parseInt(m)*60+parseInt(s)) )*(1/120)*ls;

    if (plusOffset <= 0 || plusOffset > 2500) {
        return null;
    }

    var selectedBus;
    var fillColor;
    switch (bus) {
        case "chi02":
            selectedBus = data.bus.chi02;
            fillColor = data.color.chi02;
            break;
        case "chi05":
            selectedBus = data.bus.chi05;
            fillColor = data.color.chi05;
            break;
        case "tsu01":
            selectedBus = data.bus.tsu01;
            fillColor = data.color.tsu01;
            break;
    }

    fill(fillColor);
// point
    stroke(fillColor);
    arc(currentPosition+plusOffset, height/2, 10, 10, 0, TWO_PI);

    if (position === 'up' && PH === 'high') {
    // line
        stroke(fillColor);
        strokeWeight(2);
        line(currentPosition+plusOffset, height/2, currentPosition+plusOffset, height/10);
    // rect
        rect(currentPosition+plusOffset, height/10, 100, 100, 0, 20, 20, 0);

        textAlign(CENTER,CENTER);
    //text_title
        fill("white");
        textSize(30);
        text(selectedBus, currentPosition+plusOffset+50, height/10+35);

    //text_subtitle
        strokeWeight(1);
        textSize(25);
        text(shHour+" : "+shMinu, currentPosition+plusOffset+50, height/10+75);



    } else if (position === 'up' && PH === 'low') {
    // line
        stroke(fillColor);
        strokeWeight(2);
        line(currentPosition+plusOffset, height/2, currentPosition+plusOffset, 3*height/10);
    // rect
        rect(currentPosition+plusOffset, 3*height/10, 100, 100, 0, 20, 20, 0);

        textAlign(CENTER,CENTER);
    //text_title
        fill("white");
        textSize(30);
        text(selectedBus, currentPosition+plusOffset+50, 3*height/10+35);

    //text_subtitle
        strokeWeight(1);
        textSize(25);
        text(shHour+" : "+shMinu, currentPosition+plusOffset+50, 3*height/10+75);




    } else if (position === 'down' && PH === 'high') {
    // line
        stroke(fillColor);
        strokeWeight(2);
        line(currentPosition+plusOffset, height/2, currentPosition+plusOffset, 8*height/10);
    // rect
        rect(currentPosition+plusOffset, 8*height/10, 100, 100, 0, 20, 20, 0);

        textAlign(CENTER,CENTER);
    //text_title
        fill("white");
        textSize(30);
        text(selectedBus, currentPosition+plusOffset+50, 8*height/10+35);

    //text_subtitle
        strokeWeight(1);
        textSize(25);
        text(shHour+" : "+shMinu, currentPosition+plusOffset+50, 8*height/10+75);

    } else if (position === 'down' && PH === 'low') {
    // line
        stroke(fillColor);
        strokeWeight(2);
        line(currentPosition+plusOffset, height/2, currentPosition+plusOffset, 6*height/10);
    // rect
        rect(currentPosition+plusOffset, 6*height/10, 100, 100, 0, 20, 20, 0);

        textAlign(CENTER,CENTER);
    //text_title
        fill("white");
        textSize(30);
        text(selectedBus, currentPosition+plusOffset+50, 6*height/10+35);

    //text_subtitle
        strokeWeight(1);
        textSize(25);
        text(shHour+" : "+shMinu, currentPosition+plusOffset+50, 6*height/10+75);
    }

}
