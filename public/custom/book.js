import { Pages } from './pages.js';

export class BookPage extends HTMLElement {
    static title = Pages.title(this.name);
    static tag = Pages.tag(this.name);
        constructor(){
        super();
        this.hotel = {
            "The Wave Resort & Spa": "https://www.waveresort.com/",
            "Book Here": "https://be.synxis.com/?adult=1&arrive=2026-10-10&chain=8708&child=0&currency=USD&depart=2026-10-11&group=HIGWHI&hotel=7495&level=hotel&locale=en-US&productcurrency=USD&rooms=1"
        };
    };
    connectedCallback(){
        console.log(this.constructor.name + ' connected to DOM');
        this.querySelector("a.btn").href = this.hotel["Book Here"];
    };
};