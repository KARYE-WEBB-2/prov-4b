// --- Del 1: inställningar och grundläggande ---

// 1. Hämta element och sätt upp canvas
// Hämta canvas-elementet här:

// Skapa din 2D-kontext (ctx) här:

// Hämta knapparna #raket-upp, #raket-ner och #asteroid-btn här:


// 2. Ladda in bilden
// Skapa ett Image-objekt för raketen och sätt src till "./rocket.png"


// 3. Skapa dina dataobjekt
// Skapa objektet 'asteroid' med x, y och egenskapen spela (false från början)

// Skapa objektet 'raket' med x och y



// --- Del 2: rita på canvas ---

// 4. Rita raketen
function ritaRaket() {
    // Använd drawImage för att rita ut raket-bilden
    // Sätt bredd och höjd till 80
    
}

// 5. Rita asteroiden
function ritaAsteroid() {
    // Använd canvas-metoder (beginPath, arc, fill) för att rita ut en cirkel.
    // Sätt färgen till t.ex. #555555
    
}


// --- Del 3: interaktion och animering ---

// 6. Styra raketen med knappar
// Lägg till en eventlistener för "Raket upp" (#raket-upp) som minskar raketens y-värde

// Lägg till en eventlistener för "Raket ner" (#raket-ner) som ökar raketens y-värde


// 7. Animera asteroiden (logik)
// Lägg till en eventlistener för "Skicka asteroid" (#asteroid-btn) som sätter asteroidens 'spela' till true


function animeraAsteroid() {
    // Gör en if-sats: Om asteroiden ska spelas (spela är true):
    // 1. Minska asteroidens x-värde (så den åker åt vänster)
    // 2. Gör en ny if-sats: Om x-värdet blir mindre än t.ex. -100, 
    //    återställ x till canvasens bredd så den åker in från höger igen.
    
}


// 8. Skapa animationsloopen
function gameLoop() {
    // a) Rensa hela canvasen
    
    // b) Anropa ritaRaket()
    
    // c) Anropa ritaAsteroid()
    
    // d) Anropa animeraAsteroid()
    
    // e) Använd requestAnimationFrame för att anropa gameLoop igen
    
}

// Starta loopen för första gången här!