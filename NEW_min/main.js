function setup() {

    width = windowWidth;
    height = windowHeight;
    createCanvas(width, height);

    ls = 25;
    frameRate(2);
}

function draw() {
    clear();
    getTime();


    background(51);
    drawAxis();

//    drawLabelHigh(2226,tsu01,up);

    for (var i = 0; i < data.schedule.workday.chi02.length; i++) {
        drawLabelHigh(data.schedule.workday.chi02[i],chi02,up,high);
    }
    for (var i = 0; i < data.schedule.workday.tsu01.length; i++) {
        drawLabelHigh(data.schedule.workday.tsu01[i],tsu01,down,high);
    }
    for (var i = 0; i < data.schedule.workday.chi05.length; i++) {
        drawLabelHigh(data.schedule.workday.chi05[i],chi05,down,low);
    }

// draw now
    currentPosition = width/12;
    stroke('red');
    strokeWeight(2);
    line(currentPosition, 0, currentPosition, height);

    printTime();

}
