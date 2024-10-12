// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht 1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat

/*
Stap 1: maak een functie aan die getEmailDomain(emailAddress) heet;
Stap 2: zorg dat alles tot en met de @ wordt verwijderd;
Stap 3: return dat stuk vd email
 */

function getEmailDomain(emailAddress) {
        let indexOfAtSymbol = emailAddress.indexOf("@");
        let domainName = emailAddress.substring(indexOfAtSymbol + 1);
        return domainName;
}

console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));

// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com



/* Opdracht 2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)

/*
Dezelfde functie, maar dan met switch case
 */

function typeOfEmail(emailAddress) {
    let indexOfAtSymbol = emailAddress.indexOf("@");
    let domainName = emailAddress.substring(indexOfAtSymbol + 1);

    switch (domainName) {
        case "novi.nl":
            console.log("De domeinnaam is novi.nl, dus het is van een medewerker.");
            break;
        case "novi-education.nl":
            console.log("De domeinnaam is novi-eduction.nl, dus het is van een student.");
            break;
        default:
            console.log("Dit is een extern mailadres.")
    }
}

console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));

// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"



/* Opdracht 3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)

/*
Stap 1: maak een functie die checkEmailValidity(emailAddress) heet;
Stap 2: maak een variabele aan voor het resultaat
Stap 3: maak een if-else statement aan die de eisen voor validiteit nagaat;
Stap 4: als die eisen kloppen dan ontvang je true en anders false
 */

function checkEmailValidity(emailAddress) {
    let result;
    if (!emailAddress.includes("@") || emailAddress.includes(",") || emailAddress[emailAddress.length - 1] === ".") {
        console.log("false");
        result = false;
    } else {
        console.log("true");
        result = true;
    }
}

checkEmailValidity("n.eeken@novi.nl");
checkEmailValidity("tessmellink@novi.nl");
checkEmailValidity("n.eekenanovi.nl");
checkEmailValidity("n.eeken@novinl.");
checkEmailValidity("tessmellink@novi,nl");

// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in