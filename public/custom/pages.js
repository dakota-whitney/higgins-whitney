export class Pages extends HTMLElement {
  static root = document.querySelector('.carousel');
  static carousel = bootstrap.Carousel.getOrCreateInstance(this.root);
  static tag(className){
    const camelCase = /(?<=[a-z])[A-Z]/g;
    const snakeCase = className.replace(camelCase, m => '-' + m);
    return snakeCase.toLowerCase();
  }
  constructor(pages = []){
    super();

    if(!pages.length) return;
    else pages = new Map(pages);

    const brand = document.querySelector('.navbar-brand');
    const navBar = document.querySelector('ul.navbar-nav');
    const innerRoot = Pages.root.querySelector('.carousel-inner');

    for(const [title, page] of pages){
      const carouselPage = document.createElement(page.tag, {is: page.tag});
      carouselPage.classList.add('carousel-item');
      innerRoot.append(carouselPage);
    
      if(page.name == 'HomePage'){
        brand.innerText = title;
        continue;
      };
    
      const pageNav = document.createElement('li');
      pageNav.classList.add('nav-item');
      pageNav.innerHTML = `<a class='nav-link' aria-current='page'>${title}</a>`;
      navBar.append(pageNav);
    };

    const mobileSmall = window.matchMedia('(width < 300px)');
    if(mobileSmall.matches) brand.innerText = 'C&D';
    
    brand.addEventListener('click', () => Pages.carousel.to(0));
    const navLinks = [...navBar.children];

    navLinks.forEach((nav, i) => nav.addEventListener('click', () => Pages.carousel.to(i + 1)));
    innerRoot.children[0].classList.add('active');
  }
  cloneTemplate(customTag){
    const template = document.getElementById(customTag);
    const templateClone = template.content.cloneNode(true);
    this.append(templateClone);
  }
};

customElements.define('page-elements', Pages);