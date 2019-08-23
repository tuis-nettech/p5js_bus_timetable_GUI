function setup() {

    displaySize(0,0);
    lineSpace(25);
    frameRate(2);
}

function draw() {
    clear();
    getTime();


    background(51);
    drawAxis();

    drawLabelHigh(2126,tsu01,up);

// draw now
    nowPosition(left);
    printTime();

}
