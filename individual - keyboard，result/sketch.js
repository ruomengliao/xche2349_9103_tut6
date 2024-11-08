let CircleColor = []
let particles = [];

function setup() {
    createCanvas(750, 750)
    CircleColor = [random(0, 255), random(0, 255), random(0, 255)]
}

function drawAllCircle(color) {
    drawSmallCircle(10, 15, 20, color)
    drawSmallCircle(10, 190, 20, color)
    drawSmallCircle(30, 210, 20, color)
    drawSmallCircle(10, 210, 20, color)
    drawSmallCircle(10, 230, 20, color)
    drawSmallCircle(30, 230, 18, color)
    drawSmallCircle(60, 220, 25, color)
    drawSmallCircle(90, 230, 25, color)
    drawSmallCircle(115, 240, 40, color)
    drawSmallCircle(300, 400, 40, color)
    drawSmallCircle(250, 390, 40, color)
    drawSmallCircle(200, 380, 45, color)
    drawSmallCircle(320, 360, 30, color)
    drawSmallCircle(325, 380, 25, color)
    drawSmallCircle(350, 360, 25, color)
    drawSmallCircle(350, 335, 25, color)
    drawSmallCircle(380, 340, 30, color)
    drawSmallCircle(365, 320, 30, color)
    drawSmallCircle(65, 485, 40, color)
    drawSmallCircle(100, 610, 30, color)
    drawSmallCircle(220, 650, 30, color)
    drawSmallCircle(240, 670, 20, color)
    drawSmallCircle(240, 650, 20, color)
    drawSmallCircle(255, 635, 20, color)
    drawSmallCircle(310, 585, 20, color)
    drawSmallCircle(320, 560, 30, color)
    drawSmallCircle(360, 180, 30, color)
    drawSmallCircle(380, 165, 25, color)
    drawSmallCircle(400, 150, 25, color)
    drawSmallCircle(420, 130, 25, color)
    drawSmallCircle(450, 125, 25, color)
    drawSmallCircle(440, 100, 30, color)
    drawSmallCircle(680, 20, 30, color)
    drawSmallCircle(680, 50, 30, color)
    drawSmallCircle(710, 50, 30, color)
    drawSmallCircle(710, 20, 30, color)
    drawSmallCircle(735, 32, 28, color)
    drawSmallCircle(735, 55, 20, color)
    drawSmallCircle(735, 5, 20, color)
    drawSmallCircle(735, 300, 20, color)
    drawSmallCircle(750, 320, 20, color)
    drawSmallCircle(750, 480, 20, color)
    drawSmallCircle(735, 500, 20, color)
    drawSmallCircle(745, 520, 20, color)
    drawSmallCircle(700, 550, 40, color)
    drawSmallCircle(670, 550, 20, color)
    drawSmallCircle(670, 530, 20, color)
    drawSmallCircle(700, 520, 20, color)
    drawSmallCircle(725, 520, 20, color)
    drawSmallCircle(540, 510, 20, color)
    drawSmallCircle(560, 505, 20, color)
    drawSmallCircle(560, 485, 20, color)
    drawSmallCircle(545, 485, 20, color)
    drawSmallCircle(525, 400, 20, color)
    drawSmallCircle(515, 380, 35, color)
    drawSmallCircle(445, 600, 25, color)
    drawSmallCircle(460, 620, 25, color)
    drawSmallCircle(470, 590, 20, color)
    drawSmallCircle(480, 740, 20, color)
    drawSmallCircle(490, 720, 20, color)
    drawSmallCircle(490, 700, 20, color)
    drawSmallCircle(510, 710, 20, color)
    drawSmallCircle(510, 730, 20, color)
    drawSmallCircle(500, 750, 20, color)
    drawSmallCircle(530, 730, 20, color)
    drawSmallCircle(560, 740, 30, color)
    drawSmallCircle(590, 740, 20, color)
    drawSmallCircle(610, 730, 20, color)
    drawSmallCircle(690, 660, 20, color)
    drawSmallCircle(680, 680, 20, color)
    drawSmallCircle(700, 680, 20, color)
}

let CircleArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Check if the mouse is pressed
let wantColor = false

function draw() {
    background(3, 78, 120);
    drawCircle(110, 20, 5 + CircleArr[0], 100, 100, [15, 18, 120], [8, 101, 44], [211, 239, 252])
    drawCircle(110, 20, 5 + CircleArr[1], 320, 50, [244, 16, 3], [212, 77, 163], [253, 185, 31])
    drawCircle(110, 20, 5 + CircleArr[2], 550, 25, [242, 11, 8], [192, 67, 163], [238, 236, 230])
    drawCircle(110, 20, 5 + CircleArr[3], 50, 350, [11, 67, 143], [240, 54, 32], [252, 182, 41])
    drawCircle(110, 20, 5 + CircleArr[4], 250, 250, [21, 147, 40], [248, 87, 76], [235, 254, 245])
    drawCircle(110, 20, 5 + CircleArr[5], 480, 250, [226, 147, 225], [83, 169, 211], [251, 166, 58])
    drawCircle(110, 20, 5 + CircleArr[6], 700, 180, [37, 63, 110], [247, 225, 249], [248, 164, 33])
    drawCircle(110, 20, 5 + CircleArr[7], -30, 580, [3, 143, 143], [201, 65, 171], [176, 252, 251])
    drawCircle(110, 20, 5 + CircleArr[8], 200, 520, [243, 33, 1], [223, 38, 6], [252, 185, 13])
    drawCircle(110, 20, 5 + CircleArr[9], 420, 470, [215, 46, 56], [248, 97, 142], [254, 240, 247])
    drawCircle(110, 20, 5 + CircleArr[10], 650, 400, [245, 128, 43], [157, 103, 148], [248, 253, 240])
    drawCircle(110, 20, 5 + CircleArr[11], 130, 740, [241, 24, 15], [174, 112, 197], [248, 251, 243])
    drawCircle(110, 20, 5 + CircleArr[12], 360, 700, [214, 27, 99], [236, 98, 202], [250, 181, 84])
    drawCircle(100, 20, 5 + CircleArr[13], 580, 620, [13, 90, 169], [249, 101, 168], [237, 202, 58])
    drawCircle(100, 20, 5 + CircleArr[14], 800, 620, [251, 76, 24], [218, 85, 185], [254, 167, 19])
    drawCircle(100, 20, 5 + CircleArr[15], 700, 800, [82, 185, 116], [230, 133, 222], [248, 252, 253])
    if (wantColor) {
        // Code to execute when the mouse is pressed
        CircleColor = [random(0, 255), random(0, 255), random(0, 255)]
    }
    drawAllCircle(CircleColor)
   // Loop through all particles and update, display them
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();

       // If the particle has disappeared, remove it from the array
        if (particles[i].isOffScreen()) {
            particles.splice(i, 1);
        }
    }
}

let timer1;
let timer2;

function keyPressed() {
   // Triggered when the space key is pressed
    if (keyCode == 32) {
        clearInterval(timer1)
        clearInterval(timer2)
        startDraw()
    }
    if (keyCode == 13) {
      // Clear animation
        clearInterval(timer1)
        clearInterval(timer2)
        TWO_PI_Number = 0
    }
}
function startDraw() {
    timer1 = setInterval(() => {
        TWO_PI_Number = TWO_PI_Number + 0.1
        if (TWO_PI_Number >= 1) {
            clearInterval(timer1)
            timer2 = setInterval(() => {
                TWO_PI_Number = TWO_PI_Number - 0.1
                if (TWO_PI_Number <= 0) {
                    clearInterval(timer2)
                    startDraw()
                }
            },100)
        }
    }, 100)
}
function mousePressed() {
   // Code for when the mouse is pressed
    wantColor = true
   // Generate particles when the mouse is pressed
    let numParticles = 50; // Adjust the number of particles as needed
    for (let i = 0; i < numParticles; i++) {
        let p = new Particle(mouseX, mouseY);
        particles.push(p);
    }
}

function mouseReleased() {
    wantColor = false
}

let TWO_PI_Number = 0

function drawCircle(radius, numPoints, pointRadius, centerX, centerY, color1 = [], color2 = [], color3 = []) {
    noStroke();
     // Parameters for the large circle
// radius; // Radius of the large circle
// numPoints; // Number of small points in the circle
// pointRadius; // Radius of each small point
    if (color3.length > 0) {
        fill(color3)
    }
    ellipse(centerX, centerY, radius * 2.1, radius * 2.1);

    for (let i = 0; i < numPoints; i++) {
        // Calculate the position of each small point
// Gradually loop inward by decreasing the radius value
        for (let j = radius; j >= 0; j -= 10) {
            let angle = map(i, 0, numPoints, 0, TWO_PI / TWO_PI_Number); // Angle of the current small point

            let x = centerX + j * cos(angle); // x-coordinate of the small point
            let y = centerY + j * sin(angle); // Y coordinate of the small point
            // Control the size of the inner squares to avoid overlap and compression
            let w = map(j, 0, radius, 3, 0)
            if (j <= radius / 2) {
                fill(color2)
                rect(x - pointRadius, y - pointRadius, pointRadius * 2 - w, pointRadius * 2 - w)
            } else {
                fill(color1)
                ellipse(x, y, pointRadius * 2 - w, pointRadius * 2 - w);
            }
        }

    }


}

function drawSmallCircle(x, y, radius, color) {
    fill(color)
    ellipse(x, y, radius, radius);
    fill(255, 255, 255)
    let ellX;
    let ellY;
    if (wantColor) {
        ellX = random(-3, 3)
        ellY = random(-3, 3)
    } else {
        ellX = 0
        ellY = 0
    }
    ellipse(x + ellX, y + ellY, radius / 2, radius / 2);
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(5, 10);
        this.speedX = random(-2, 2);
        this.speedY = random(-2, 2);
        this.alpha = 255;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 5; // Gradual disappearance
    }

    show() {
        fill(255, this.alpha);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }

    isOffScreen() {
        return this.alpha <= 0;
    }
}

function windowResized() {
    // resizeCanvas(windowWidth, windowHeight);
    draw();
}
