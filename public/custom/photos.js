import { Pages } from './pages.js';

export class PhotosPage extends HTMLElement {
    static title = Pages.title(this.name);
    static tag = Pages.tag(this.name);
    constructor(){
        super();
        this.imageFiles = [
            'IMG_2071.jpg', 'IMG_2096.jpg',
            'IMG_2144.jpg', 'IMG_2297.jpg',
            'IMG_2805.jpg', 'IMG_3653.jpg',
            'IMG_4095.jpg', 'IMG_4104.jpg',
            'IMG_4671.jpg', 'IMG_4835.jpg',
            'IMG_5802.jpg', 'IMG_5927.jpg',
            'IMG_5962.jpg', 'IMG_6210.jpg',
            'IMG_6674.jpg', 'six-flags.jpg',
            'IMG_0087.jpg', 'IMG_0089.jpg',
            'IMG_8049.jpg', 'IMG_8879.jpg',
            'IMG_9241.jpg', 'cali-1.jpg',
            'cali-2.jpg', 'cali-3.jpg',
            'IMG_3305.jpg', 'IMG_3591.jpg',
            'IMG_4811.jpg', 'IMG_5273.jpg',
            'IMG_6720.jpg', 'IMG_6980.jpg',
            'IMG_7076.jpg', 'IMG_7121.jpg',
            'IMG_7133.jpg', 'IMG_8905.jpg',
            'IMG_9820.jpg', 'hoboken.jpg',
            'wedding-shower.jpg'
        ];
    };
    connectedCallback(){
        console.log(this.constructor.name + ' connected to DOM');
        const gallery = this.querySelector('#gallery');

        for(const file of this.imageFiles){
            const img = document.createElement('img');

            img.src = 'gallery/' + file;
            img.alt = file;
            img.classList.add('img-fluid');
            img.width = 400;
            img.height = 400;

            gallery.append(img);
        };
    };
};