import { Pages } from './pages.js';

export class HomePage extends Pages {
    static tag = Pages.tag(this.name);
    constructor(){
        super();
    };
    connectedCallback(){
        this.cloneTemplate(HomePage.tag);

        const weddingDate = new Date('October 10, 2026 05:00:00 PM');
        const countdown = this.querySelector('#countdown');

        let dateDiffs = this.countdown(weddingDate);

        dateDiffs.forEach(([label, diff], i) => {
            const span = document.createElement('span');
            if(i % 2 == 0) span.classList.add('pink');
            span.innerText = `${diff} ${label}`;
            countdown.append(span);
        });

        if(Object.values(dateDiffs).every(time => time == 0)) return;

        setInterval(() => {
            dateDiffs = this.countdown(weddingDate);
            const {children} = countdown;
            dateDiffs.forEach(([label, diff], i) => children[i].innerText = `${diff} ${label}`);
        }, 1000);
    };
    countdown(weddingDate){
        const now = new Date();
        const passed = weddingDate <= now;

        const diffs = {
            'Days': !passed ? (Math.floor((weddingDate - now) / 8.64e+7) - 1) : 0
        };

        for(const time of ["Hours", "Minutes", "Seconds"]){
            const wTime = weddingDate[`get${time}`]();
            const nTime = now[`get${time}`]();

            const diffInt = time == "Hours" ? 11 : 59;
            diffs[time] = passed ? 0 : 
                nTime >= wTime ? (wTime - nTime) + diffInt : 
                time == "Hours" ? (wTime - nTime) - 1 :
                wTime - nTime;
        };


        return Object.entries(diffs);
    };
};

customElements.define(HomePage.tag, HomePage);