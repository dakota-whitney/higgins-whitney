import { Pages } from './pages.js';

export class FooterComponent extends Pages {
    static tag = Pages.tag(this.name);
    constructor(){
        super();
    };
    connectedCallback(){
        this.cloneTemplate(FooterComponent.tag);
        this.footerImgs = this.querySelectorAll('img');
        Pages.root.addEventListener('slide.bs.carousel', e => this.slideFooter(e));
    };
    slideFooter(e){
        if(e.to == 0){
            this.footerImgs[0].style.display = 'initial';
            this.footerImgs[1].style.display = 'none';
        } else {
            this.footerImgs[0].style.display = 'none';
            this.footerImgs[1].style.display = 'initial';
        }
    };
};

customElements.define(FooterComponent.tag, FooterComponent);