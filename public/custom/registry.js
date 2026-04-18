import { Pages } from './pages.js';

const baseURL = "https://registry.theknot.com";
const urlPath = "/corinne-higgins-dakota-whitney-october-2026-nj/68862346";

export class RegistryPage extends HTMLElement {
    static title = Pages.title(this.name);
    static tag = Pages.tag(this.name);
    constructor(){
        super();
        this.registry = new URL(urlPath, baseURL);
    };
    connectedCallback(){
        console.log(this.constructor.name + ' connected to DOM');
        this.querySelector("a").href = this.registry;
    };
};