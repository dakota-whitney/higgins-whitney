// Define LocationPage custom element
// Add static title and tag variables for use in NavBar
export class LocationPage extends HTMLElement {
    static title = "Location";
    static tag = "location-page";

    // Define custom element constructor
    constructor(){
        super();
    };

    /**
     * Define function when element is appended to main DOM
     * Set each inner anchor tag's text and hrefs using defined hotel object
     */
    connectedCallback(){
        console.log(this.constructor.name + " connected to DOM");
        const links = [...this.querySelectorAll("a")];
        Object.entries(hotel).forEach(([text, href], i) => {
            links[i].href = href;
            links[i].innerText = text;
        });
    };
};

// Define URL parameters for hotel booking URL
const hotelParams = new URLSearchParams([
    ["adult", 1],
    ["arrive", "2026-10-10"],
    ["chain", 8708],
    ["child", 0],
    ["currency", "USD"],
    ["depart", "2026-10-11"],
    ["group", "HIGWHI"],
    ["hotel", 7495],
    ["level", "hotel"],
    ["locale", "en-US"],
    ["productcurrency", "USD"],
    ["rooms", 1]
]);

// Define hotel URLs for each achor tag in template
// Keys are the anchor tag text, values are the hrefs
const hotel = {
    "The Wave Resort & Spa": new URL("https://www.waveresort.com/"),
    "Book Here": new URL("https://be.synxis.com/?" + hotelParams.toString()),
    "(732) 612-9283": "tel:+7326129283"
};