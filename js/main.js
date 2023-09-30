class ColorCard {
    id
    color;
    addToList;
    htmlElement;
    circle;
    text;
    // Constructor functie om een nieuwe ColorCard te maken
    constructor(newId, newColor, addToList) {
        // Eigenschappen instellen
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;

        // Maak een li html element om de kleuren weer te geven
        this.htmlElement = document.createElement("li");
        this.htmlElement.classList = "colors__color";

        // Maak een figuur element om de kleurencirkel weer te geven
        this.circle = document.createElement("figure");


        this.circle.classList = "colors__circle";
        this.circle.style.background = this.color;
        // Voeg een cirkel toe aan het HTML element
        this.htmlElement.appendChild(this.circle);

        // Maak een p element om de tekst 'Copied' weer te geven
        this.text = document.createElement("p");
        this.text.innerText = "Copied";
        this.text.classList = "colors__text";

        // Voeg een eventlistener toe aan het HTML element, zodat het klikbaar is
        this.htmlElement.onclick = this.onHTMLElementClicked;

        // Render de ColorCard
        this.render();
    }

    // Event listener functie die wordt opgeroepen wanneer op de ColorCard wordt geklikt
    onHTMLElementClicked = () => {
        // Voeg een classlist toe aan de cirkel om hem te markeren als geselecteerd
        this.circle.classList.add("colors__circle--selected");
        // Verander de titel naar hsl kleur
        document.title = this.color;
        // Kopieer de kleur naar het klembord
        window.navigator.clipboard.writeText(this.color);
    }
    // Render functie om de ColorCard te renderen
    render() {
        // Voeg de tekst en de cirkel toe aan het HTML element
        
        this.htmlElement.appendChild(this.circle);
        this.htmlElement.appendChild(this.text);
        // Voeg het HTML element toe aan de lijst met kleuren
        this.addToList.appendChild(this.htmlElement);
    }

}
// Definitie van de klasse ColorList
class ColorList {
    id;
    htmlElement;
     // Constructor functie om een nieuwe ColorList te maken
    constructor(newId) {
        this.id = newId;
        this.htmlElement = document.createElement("ul");
        this.htmlElement.id = this.id;
        this.htmlElement.classList.add("colors");
        // Render de ColorList
        this.render();
    }
// Render functie om de ColorList te renderen
    render() {
        // Voeg de ColorList toe aan het body van de pagina
        document.querySelector("body").appendChild(this.htmlElement);
    }
}


// Definitie van de klasse HSLGenerator
class HSLGenerator {
    randomHue;
    randomSaturation;
    randomLightness;
    hsl;
    // Constructor functie om een nieuwe HSLGenerator te maken
    constructor() {
        this.generateHSL();
    }
    // Functie om een willekeurige hue te genereren
    generateHue = function () {
        this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);

    }
     // genereert willekeurige waarde voor Saturation
    generateSaturation = function () {
        this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";

    }
    // genereert willekeurige waarde voor Lightness
    generateLightness = function () {
        this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";

    }
    generateHSL = function () { // genereert willekeurige HSL-waarden
        this.generateHue(); // roept generateHue functie aan om randomHue te genereren
        this.generateSaturation(); // roept generateSaturation functie aan om randomSaturation te genereren
        this.generateLightness(); // roept generateLightness functie aan om randomLightness te genereren
        this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})` // combineert HSL-waarden in een string

    }
}

class App {
    id;
    colorList;
    HSLGenerator;
    constructor(newId) {
        this.id = newId;
        this.colorList = new ColorList(this.id);
        this.HSLGenerator = new HSLGenerator();
        this.generateColorCards();
    }

    generateColorCards = function () {  // genereert 100 kleurkaarten met willekeurige HSL-waarden
        for (let i = 1; i <= 100; i++) {
            this.HSLGenerator.generateHSL(); // genereert willekeurige HSL-waarden
            new ColorCard(i, this.HSLGenerator.hsl, document.getElementById(this.colorList.id)); // maakt een nieuwe kleurkaart met willekeurige HSL-waarden en voegt deze toe aan de kleurenlijst
        }
    }
}

const app = new App("js--app"); // maakt een nieuwe App instantie met een ID van "js--app"