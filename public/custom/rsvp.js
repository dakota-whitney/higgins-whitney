import { Pages } from './custom.js';

export class RSVPPage extends Pages {
    static tag = 'rsvp-page';
    constructor(){
        super();
    };
    connectedCallback(){
        this.cloneTemplate(RSVPPage.tag);
    };
};

customElements.define(RSVPPage.tag, RSVPPage);