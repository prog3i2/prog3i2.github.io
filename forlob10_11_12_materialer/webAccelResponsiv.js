// bemærk hvis man skal oprette flere canvas og køre ikke-global mode
// https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
// https://www.youtube.com/watch?v=Su792jEauZg
// derman kan man oprette instans som objekt, hvori sketchen kører
// Og man kan oprette flere canvas med samme sketch eller
// forskellige sketches i forskellige canvas
// instans mode skal closure på variable - namespacing - vs global mode med globale variable

// tilføj knapper, og tilføj eventlistener til knappen, funktionskald
// 10 spring til siden hurtigt nok - gør baggrunden helt hvid...

"use strict";
let y = 10; let r = 200; let g = 180; let b = 0;
let ned = true;
let rystet = 0;
let flyttet = 0;
let aktiv = false;
console.log(this); // udskriver window-objektet
console.log(window.document); // udskriver document-objektet, som property i window-objektet

function setup() {
    canvas = createCanvas(300, 550, 'beholder');
    textSize(24);
    // giver canvas border på 2 pixel, 
    // og sørger derefter for at kanten tælles med i width
    canvas.elt.style.border = '5px solid black';
    canvas.elt.style.boxSizing = 'border-box';
    canvas.elt.style.borderRadius = '20px';

    canvas.parent('#beholder');
    // gør canvas-elementet responsivt til skærmbredden
    canvas.elt.style.width = '100%';
    canvas.elt.style.height = '100%';

    //bemærk at noden skal pakkes ud via .elt
    const parentDiv = select('#beholder').elt;
    const p = select('#test1').elt;
    // indsæt canvas i ny position i rækkefølgen af elementer i div'en beholder
    parentDiv.insertBefore(canvas.elt, p);
}

function draw() {
    background(r, g, b);
    strokeWeight(10);
    ellipse(width / 2, y, 50);
    if (ned)
        y++;
    else
        y--;
    if (y >= height || y <= 0)
        ned = !ned;
    if (accelerationX > 70) {
        r = random(0, 256);
        g = random(0, 256);
        b = random(0, 256);
        // accelerationX bibeholdes i 2 frames per konkrete ryst, derfor modulus
        if(rystet%2 === 0)
        ned = !ned;
        rystet++;
    }
    
text('rystet: ' + str(rystet), 50, height-100);
text('flyttet: ' + str(flyttet),50, height-50);
}

function deviceMoved(){
    flyttet++;
}


    