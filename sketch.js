var fft
var sound;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // background(0)
    sound = new p5.AudioIn();
    sound.start();
    fft = new p5.FFT(0.9)
    fft.setInput(sound);

    sound.amp(15);
}

function draw() {
    background(0)
    // stroke(0, random(20,255), random(20,255))
    // stroke(random(0,255), random(20,255), random(20,255))
    stroke(random(90, 95), random(214, 220), random(240,250))
    // stroke(255, 255, 255)
    strokeWeight(2)
    noFill()
    // background(0)

    var wave = fft.waveform()

    beginShape()
    for(var i=0; i<width; i+=0.5) {
        var index = floor(map(i,0,width,0,wave.length))
        var x = i
        var y = wave[index] * 100 + height / 2 
        vertex(x,y)
        // background(0)
    }
    endShape()
}

