export class Footer {
    constructor(carousel){
        this.root = document.querySelector('footer');
        this.imgs = this.root.querySelectorAll('img');
        carousel.addEventListener('slide.bs.carousel', e => this.slideFooter(e));
    };
    slideFooter(e){
        if(e.to == 0){
            this.imgs[0].style.display = 'initial';
            this.imgs[1].style.display = 'none';
        } else {
            this.imgs[0].style.display = 'none';
            this.imgs[1].style.display = 'initial';
        };
    };
};