# Prov: rymdfärden

**Fil att skriva i:** `rymden.js`
**Mål:** Gör canvas-animationen interaktiv och rita ut objekten i rymden genom att lösa uppgifterna nedan.

---

## Del 1: inställningar och grundläggande

**1. Hämta element och sätt upp canvas**
* Hämta canvas-elementet från HTML-koden.
* Skapa en 2D-kontext (`ctx`) för att kunna rita.
* Hämta de tre knapparna `#raket-upp`, `#raket-ner` och `#asteroid-btn` från DOM:en och spara dem i variabler.

**2. Ladda in bilden**
Skapa ett bildobjekt och ladda in bilden `./rocket.png` så att den är redo att ritas ut.

**3. Skapa dina dataobjekt**
* Skapa ett objekt `asteroid` som innehåller startvärden för `x` (t.ex. 600, så den startar till höger), `y` (t.ex. 150) och en boolean `spela` som från början är `false`.
* Skapa ett objekt `raket` som innehåller startvärden för `x` (t.ex. 50) och `y` (t.ex. 150).

---

## Del 2: rita på canvas

**4. Rita raketen**
Skapa en funktion `ritaRaket()`. I denna funktion ska du använda `drawImage` för att rita ut din raket-bild på canvasen baserat på x- och y-värdena i ditt `raket`-objekt. Sätt bredd och höjd till 80.

**5. Rita asteroiden**
Skapa en funktion `ritaAsteroid()`. Använd ritmetoder (t.ex. `beginPath`, `arc` och `fill`) för att rita ut asteroiden. 
*Tips: En asteroid kan vara en enkel fylld cirkel (360 grader är `Math.PI * 2`). Sätt färgen till en mörkgrå eller brun nyans, t.ex. `#555555`.*

---

## Del 3: interaktion och animering

**6. Styra raketen med knappar**
Lägg till händelselyssnare (`click`) på knapparna för raketen:
* När man klickar på knappen "Raket upp" (`#raket-upp`) ska raketens y-värde minska.
* När man klickar på knappen "Raket ner" (`#raket-ner`) ska raketens y-värde öka.

**7. Animera asteroiden (logik)**
* Skapa en händelselyssnare på knappen "Skicka asteroid" (`#asteroid-btn`) som ändrar asteroidens egenskap `spela` till `true`.
* Skapa funktionen `animeraAsteroid()`. 
    * **OM** asteroidens egenskap `spela` är `true`, *minska* asteroidens x-värde så den åker åt vänster.
    * **OM** asteroidens x-värde blir mindre än -100 (utanför skärmen till vänster), återställ x-värdet till canvasens bredd (plus lite marginal) så den kommer in från höger igen.

**8. Skapa animationsloopen**
Skapa en funktion `gameLoop()` som körs kontinuerligt:
* **a)** Rensa hela canvasen (`clearRect`).
* **b)** Anropa `ritaRaket()`.
* **c)** Anropa `ritaAsteroid()`.
* **d)** Anropa `animeraAsteroid()`.
* **e)** Se till att loopen fortsätter snurra genom att använda `requestAnimationFrame`.
* Glöm inte att anropa loopen en första gång längst ner i din kod så att den startar!