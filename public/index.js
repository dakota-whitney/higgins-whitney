import { NavBar } from './custom/navbar.js';
import { Pages } from './custom/pages.js';
import { HomePage } from './custom/home.js';
import { StoryPage } from './custom/story.js'
import { PhotosPage } from './custom/photos.js';
import { LocationPage } from './custom/location.js';
import { RegistryPage } from './custom/registry.js';
import { Footer} from './custom/footer.js';

const pages = [
    HomePage,
    StoryPage,
    PhotosPage,
    LocationPage,
    RegistryPage
];

const navItems = new NavBar(pages);
const {root: carousel} = new Pages(navItems, pages);
new Footer(carousel);