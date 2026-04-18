import { Pages } from './pages.js';

const bookParams = new URLSearchParams([
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

export class LocationPage extends HTMLElement {
    static title = Pages.title(this.name);
    static tag = Pages.tag(this.name);
        constructor(){
        super();
        this.hotel = {
            "The Wave Resort & Spa": new URL("https://www.waveresort.com/"),
            "Book Here": new URL("https://be.synxis.com/?" + bookParams.toString()),
            "(732) 612-9283": "tel:+7326129283"
        };
    };
    connectedCallback(){
        console.log(this.constructor.name + ' connected to DOM');
        const links = [...this.querySelectorAll("a")];
        Object.entries(this.hotel).forEach(([text, href], i) => {
            links[i].href = href;
            links[i].innerText = text;
        });
    };
};