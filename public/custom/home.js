import { Pages } from './pages.js';

export class HomePage extends HTMLElement {
    static title = Pages.title(this.name);
    static tag = Pages.tag(this.name);
    constructor(){
        super();
        this.weddingDate = new Date('October 10, 2026 05:30:00 PM');
    };
    connectedCallback(){
        console.log(this.constructor.name + ' connected to DOM');

        const countdown = this.querySelector('#countdown');
        let dateDiffs = this.countdown();

        dateDiffs.forEach(([label, diff], i) => {
            const span = document.createElement('span');
            if(i % 2 == 0) span.classList.add('pink');
            span.innerText = `${diff} ${label}`;
            countdown.append(span);
        });

        if(Object.values(dateDiffs).every(time => time == 0)) return;

        setInterval(() => {
            dateDiffs = this.countdown();
            const {children} = countdown;
            dateDiffs.forEach(([label, diff], i) => children[i].innerText = `${diff} ${label}`);
        }, 1000);
    };
    countdown(){
        const now = new Date();
        const diffs = {
            Days: 0,
            Hours: 0,
            Minutes: 0,
            Seconds: 0
        };

        if(this.weddingDate <= now) return diffs;
        const difference = this.weddingDate - now;

        diffs.Days = Math.floor(difference / (1000 * 3600 * 24));
        diffs.Hours = this.timeDiff(now, 'Hours');
        diffs.Minutes = this.timeDiff(now, 'Minutes');
        diffs.Seconds = this.timeDiff(now, 'Seconds');

        return Object.entries(diffs);
    };
    timeDiff(now, unit){
        const wUnit = this.weddingDate['get' + unit]();
        const nUnit = now['get' + unit]();
        let diff = wUnit - nUnit

        if(unit == 'Hours') diff = diff <= 0 ? diff + 24 : diff;
        else diff = diff <= 0 ? diff + 60 : diff;

        return diff - 1;
    };
};