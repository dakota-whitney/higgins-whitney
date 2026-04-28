// Define StoryPage custom element
// Add static title and tag variables for use in NavBar
export class StoryPage extends HTMLElement {
    static title = "Story";
    static tag = "story-page";

    // Define custom element constructor
    constructor(){
        super();
    };

    /**
     * Define function when element is appended to main DOM
     * Append each story line to the inner story div as a p element
     */
    connectedCallback(){
        console.log(this.constructor.name + " connected to DOM");
        const story = this.querySelector("#story");
        for(const line of storyLines) story.innerHTML += `<p>${line}</p>`;
    };
};

// Initialize story lines
const storyLines = [
    'Corinne and Dakota met in a pre-covid world in the Spring of 2019.',
    'While neither can remember the specific day, the two became "official" on top of the Vessel in Midtown while watching the sunset.',
    'After being separated for months during covid, the two eventually moved in to JC Heights together.',
    'Six years later, the couple has lived in two apartments together, cruised to Mexico and Bermuda, travelled around southern California, Myrtle beach as well as multiple Disney trips.',
    'They love going to live concerts, music festivals, and enjoying a cozy Friday movie night in with take out food and a new movie with their pets.',
    'While Minnie has always been the queen of the palace, the couple adopted her "sissy" Luxor and the two have become inseparable.',
    'The couple has recently become homeowners and left the city with their two fur babies to take on Central Jersey and cannot be more excited!'
];