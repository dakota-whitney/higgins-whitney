// Define LocationPage custom element
// Add static title and tag variables for use in NavBar
export class RegistryPage extends HTMLElement {
    static title = "Registry";
    static tag = "registry-page";

    // Define custom element constructor
    constructor(){
        super();
    };

    /**
     * Define function when element is appended to main DOM
     * Set registry anchor tag's href to defined registry URL
     */
    connectedCallback(){
        console.log(this.constructor.name + " connected to DOM");
        this.querySelector("a").href = registry;
    };
};

// Define registry URL using base URL and path
const base = "https://registry.theknot.com";
const path = "/corinne-higgins-dakota-whitney-october-2026-nj/68862346";
const registry = new URL(path, base);