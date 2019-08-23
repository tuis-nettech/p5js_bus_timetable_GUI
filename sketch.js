function setup() {
    var width = windowWidth - 20;
    var height = windowHeight - 20;

    createCanvas(width, height);

}

function windowResized() {
    var width = windowWidth - 20;
    var height = windowHeight - 20;

    resizeCanvas(width, height);
}



function draw() {
    clear();

//  GET TIME  //////////////////////////////
    var xh = hour();
    var xm = minute();
    var xs = second();
//    var ms = Math.floor(millis()/100)%10;
    var h = n(xh);
    var m = n(xm);
    var s = n(xs);



    background(51);

//  PRINT TIME  //////////////////////////
    stroke(0);
    textSize(20);
    fill('white');
//    text(h + ":" + m + ":" + s + ":" + ms,width/11.5,50);
    text(h + ":" + m + ":" + s,width/11.5,50);


    stroke(255);
    line(0, height/2, width, height/2);

//  number axis  //////////////////////////
    twoMinutes(s*7/24);
    tenMinutes(s*7/24);

//  NOW  //////////////////////////////////
    stroke('red');
    line(width/12, 0, width/12, height);

}

//  TIME FORMATING  ///////////////////////
function n(n){
    return n > 9 ? "" + n: "0" + n;
}

function twoMinutes(offset) {
    var min = minute();
    stroke(255);
    strokeWeight(1);
    if (min % 2 === 0) {
        for (var i = -140; i <= 1750; i+=35) {
            line(width/12-offset+i,                    height/2 - 30,      width/12-offset+i,                     height/2);
        }
    } else if (min % 2 === 1) {
        for (var i = -140; i <= 1750; i+=35) {
            line(width/12-offset-17.5+i,               height/2 - 30,      width/12-offset-17.5+i,                height/2);
        }
    }
}

function tenMinutes(offset) {
    var min = minute()%10;
    stroke(255);
    strokeWeight(2);
    switch (min % 10) {
        case 0:
            for (var i = -140; i <= 1925; i+=175) {
                line(width/12-35-offset+i,               height/2 - 60,         width/12-35-offset+i,                   height/2);
            }
            break;
        case 1:
            for (var i = -140; i <= 1925; i+=175) {
                line(width/12-52.5-offset+i,               height/2 - 60,       width/12-52.5-offset+i,                 height/2);
            }
            break;
        case 2:
            for (var i = -140; i <= 1925; i+=175) {
                line(width/12-70-offset+i,               height/2 - 60,         width/12-70-offset+i,                   height/2);
            }
            break;
        case 3:
            for (var i = -140; i <= 1925; i+=175) {
                line(width/12-87.5-offset+i,               height/2 - 60,       width/12-87.5-offset+i,                 height/2);
            }
            break;
        case 4:
            for (var i = -140; i <= 1925; i+=175) {
                line(width/12-105-offset+i,               height/2 - 60,      width/12-105-offset+i,                height/2);
            }
            break;
        case 5:
            for (var i = -140; i <= 1925; i+=175) {
                line(width/12-122.5-offset+i,               height/2 - 60,      width/12-122.5-offset+i,                height/2);
            }
            break;
        case 6:
            for (var i = -140; i <= 1925; i+=175) {
                line(width/12-140-offset+i,               height/2 - 60,      width/12-140-offset+i,                height/2);
            }
            break;
        case 7:
            for (var i = -140; i <= 1925; i+=175) {
                line(width/12-157.5-offset+i,               height/2 - 60,      width/12-157.5-offset+i,                height/2);
            }
            break;
        case 8:
            for (var i = -140; i <= 1925; i+=175) {
                line(width/12-offset+i,               height/2 - 60,      width/12-offset+i,                height/2);
            }
            break;
        case 9:
            for (var i = -140; i <= 1925; i+=175) {
                line(width/12-17.5-offset+i,               height/2 - 60,      width/12-17.5-offset+i,                height/2);
            }
            break;

    }
}
