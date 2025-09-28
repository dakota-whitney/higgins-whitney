import { Pages } from './custom/pages.js';
import { HomePage } from './custom/home.js';
import { StoryPage } from './custom/story.js'
import { GalleryPage } from './custom/gallery.js';
// import { RSVPPage } from './rsvp.js';
import { FooterComponent } from './custom/footer.js';

new Pages([
    ['Corinne & Dakota', HomePage],
    ['Our Story', StoryPage],
    ['Gallery', GalleryPage],
    // ['RSVP', RSVPPage]
]);

const footer = document.createElement(FooterComponent.tag, {is: FooterComponent.tag})
document.querySelector('main').append(footer);