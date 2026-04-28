// Get references to DOM/Boostrap elements
const brand = document.querySelector(".navbar-brand");
const navBar = document.querySelector("ul.navbar-nav");

const carousel = document.querySelector(".carousel");
const innerCarousel = carousel.querySelector(".carousel-inner");

const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
const templates = document.querySelectorAll("template[id$='page']");

// Define custom NavBar class
// Add static carousel variable - reference to carousel element
export class NavBar {
    static carousel = carousel;

    /**
     * Instiantiate custom elements and add each to the Bootstrap carousel
     * Create nav elements and add click handlers for navigating to its carousel page
     * Default active carousel page to the first child
     * @param  {...any} pages Custom elements representing carousel pages
     */
    constructor(...pages){
        this.pages = [...pages].map((page, i) => this.carouselPage(page, i));
        this.navs = [...pages].map((page, i) => !i ? brand : this.carouselNav(page, i));

        this.navs[0].onclick = () => bsCarousel.to(0);
        innerCarousel.children[0].classList.add("active");
    };

    /**
     * Create nav li element for associated carousel page
     * Add click handler for navigation and append to navbar
     * @param {*} page Custom carousel page
     * @param {*} index Page's position in the carousel
     * @returns 
     */
    carouselNav(page, index){
        const pageNav = document.createElement("li");
        pageNav.classList.add("nav-item");
        pageNav.innerHTML = `<a class="nav-link" aria-current="page">${page.title}</a>`;
        pageNav.onclick = () => bsCarousel.to(index);
        return navBar.appendChild(pageNav);
    };

    /**
     * Define and instantiate custom carousel elements
     * Clone its HTML template into its inner content
     * Append to inner carousel
     * @param {*} page Custom carousel page
     * @param {*} index Page's position in the carousel
     * @returns 
     */
    carouselPage(page, index){
        customElements.define(page.tag, page);
        const carouselPage = document.createElement(page.tag);
        carouselPage.classList.add("carousel-item");
        const templateClone = templates[index].content.cloneNode(true);
        carouselPage.append(templateClone);
        return innerCarousel.appendChild(carouselPage);
    };
};