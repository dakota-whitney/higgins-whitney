import { NavBar } from './custom/navbar.js';
import { Pages } from './custom/pages.js';
import { HomePage } from './custom/home.js';
import { StoryPage } from './custom/story.js'
import { GalleryPage } from './custom/gallery.js';
// import { RSVPPage } from './rsvp.js';
import { Footer} from './custom/footer.js';

const pages = [
    HomePage,
    StoryPage,
    GalleryPage
    // RSVPPage
];

const navItems = new NavBar(pages);
const carousel = new Pages(navItems, pages);
new Footer(carousel);