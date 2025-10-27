import { Pages } from './pages.js';

export class RSVPPage extends Pages {
    static title = 'RSVP';
    static tag = 'rsvp-page';
    constructor(){
        super();
    };
    connectedCallback(){
        console.log(this.constructor.name + ' connected to DOM');
    };
};