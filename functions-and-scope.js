// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.
// Stap 1: Er moet een variabele gemaakt worden om de uitslag in op te slaan;
// Stap 2: Er moet een for-loop gemaakt worden om door alle cijfers te gaan;
// Stap 3: Een if statement om te kijken of het cijfer 8 of hoger is;
// Stap 4: als het waar is moet het worden opgeteld bij de variabele;
// Stap 5: console.log met de waarde van de variabele.

let cumLaudeCount = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumLaudeCount++;
}
}

console.log("Het aantal studenten cum laude is : " + cumLaudeCount)


// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

/*
    Stap 1: maak een functie aan die een array verwacht: cumLaude(arr[]);
    Stap 2: maak een nieuwe variabele aan;
    Stap 3: herbruik 1a, maar pas het aan naar arr ipv specifieke array + nieuwe variabele++;
    Stap 4: zorg ervoor dat het aantal wordt teruggegeven.
*/

function cumLaude( arr = []) {
    let cumLaudeStudents = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 8) {
            cumLaudeStudents++;
        }
    }
    return cumLaudeStudents;
}

console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

/*
Stap 1: maak een nieuwe variabele waar het alle opgetelde waardes in wordt opgeslagen;
Stap 2: maak een functie die alle waardes van de array bij elkaar optellen;
Stap 3: zorg via een forEach dat alle waardes in de array ook echt worden opgeteld in de variabele;
Stap 4: deel opgetelde waardes door het aantal waardes;
Stap 5: return dit getal (het gemiddelde)
 */



function getAverageFinalGrade(grades) {
    let accumulatedGrade = 0;
    grades.forEach((grade) => {
        if (typeof grade === 'number') {
            accumulatedGrade += grade;
        }
    });

    return accumulatedGrade / grades.length;
}

console.log(getAverageFinalGrade(grades));

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

/*
    Stap 1: maak een functie aan die een array verwacht: averageGrade(arr[]);
    Stap 2: maak een nieuwe variabele aan;
    Stap 3: herbruik 2a, maar pas het aan naar arr ipv specifieke array + nieuwe variabele++;
    Stap 4: zorg ervoor dat het aantal wordt teruggegeven.
*/

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4

function averageGrade(arr) {
    let accumulatedGrade = 0;
    arr.forEach((item) => {
        if (typeof item === 'number') {
            accumulatedGrade += item;
        }
    });

    return accumulatedGrade / arr.length;
}

console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

/* ik heb er alleen .toFixed  bij gezet met 2 in de ronde haakjes*/

function averageGradeTwoDecimals(arr) {
    let accumulatedGrade = 0;
    arr.forEach((item) => {
        if (typeof item === 'number') {
            accumulatedGrade += item;
        }
    });

    return (accumulatedGrade / arr.length).toFixed(2);
}

console.log(averageGradeTwoDecimals(grades));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

/*
Stap 1: maak een functie getHighestGrade(grades);
Stap 2: gebruik een for-loop om langs alle waardes te gaan;
Stap 3: maak een variabele=0 aan voor een if-statement;
Stap 4: zorg dat de variabele verandert in een nieuwe waarde als de volgende index een hogere waarde heeft;
 */

function getHighestGrade(grades) {
    let highestGrade = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > highestGrade) {
            highestGrade = grades[i];
        }
    }
    return highestGrade;
}

console.log(getHighestGrade(grades));

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

/*
Zelfde als hierboven, maar dan met arr
 */

function highestGrade(arr) {
    let highestGrade = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highestGrade) {
            highestGrade = arr[i];
        }
    }
    return highestGrade;
}

console.log(getHighestGrade(grades));
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
