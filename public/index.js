import { NavBar } from './custom/navbar.js';
import { Pages } from './custom/pages.js';
import { HomePage } from './custom/home.js';
import { StoryPage } from './custom/story.js'
import { PhotosPage } from './custom/photos.js';
import { BookPage } from './custom/book.js';
// import { RSVPPage } from './custom/rsvp.js';
import { Footer} from './custom/footer.js';

const pages = [
    HomePage,
    StoryPage,
    PhotosPage,
    BookPage
    // RSVPPage
];

const navItems = new NavBar(pages);
const carousel = new Pages(navItems, pages);
new Footer(carousel);