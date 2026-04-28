// Import custom classes/elements
import { NavBar } from './custom/navbar.js';
import { HomePage } from './custom/home.js';
import { StoryPage } from './custom/story.js'
import { PhotosPage } from './custom/photos.js';
import { LocationPage } from './custom/location.js';
import { RegistryPage } from './custom/registry.js';
import { Footer} from './custom/footer.js';

// Pass custom carousel elements into NavBar constructor
const pages = new NavBar(
    HomePage,
    StoryPage,
    PhotosPage,
    LocationPage,
    RegistryPage
);

// Pass carousel element to Footer constructor
new Footer(NavBar.carousel);