// Initialize wedding date object
const wedding = new Date("October 10, 2026 05:30:00 PM");

// Define HomePage custom element
// Add static title and tag variables for use in NavBar
export class HomePage extends HTMLElement {
    static title = "Home";
    static tag = "home-page";

    // Define custom element constructor
    constructor(){
        super();
    };

    /**
     * Define function when element is appended to main DOM
     * Get references to datetime columns in countdown div
     * Start 1-second repeating function for counting down remaining time until defined wedding date
     */
    connectedCallback(){
        console.log(this.constructor.name + " connected to DOM");
        const countdown = this.querySelector("#countdown");
        this.grid = countdown.querySelectorAll(".col");
        this.interval = setInterval(() => this.countdown(), 1000);
    };

    /**
     * This function gets called every second until the defined wedding date passes
     * Initialze datetime object for displaying remaining time
     * Clear 1-second interval if wedding date has passed and make remaining time 0
     * If date hasn't passed, calculate remaining time and set datetime grid text
     */
    countdown(){
        let remaining = {
            Days: 0,
            Hours: 0,
            Minutes: 0,
            Seconds: 0
        };

        const now = new Date();
        const difference = wedding - now;

        if(wedding <= now) clearInterval(this.interval);
        else {
            const daysLeft = wedding - now;
            remaining.Days = Math.floor(daysLeft / (1000 * 3600 * 24));
            remaining.Hours = this.timeRemaining(now, "Hours");
            remaining.Minutes = this.timeRemaining(now, "Minutes");
            remaining.Seconds = this.timeRemaining(now, "Seconds");
        };

        remaining = Object.entries(remaining);
        remaining.forEach(([label, time], i) => this.grid[i].innerText = `${time}\n${label}`);
    };

    /**
     * Calculate time remaining from now until the defined wedding date
     * Takes into account each unit of time
     * @param {*} now Current time
     * @param {*} unit Unit of time
     * @returns Unit of time remaining
     */
    timeRemaining(now, unit){
        const wUnit = wedding["get" + unit]();
        const nUnit = now["get" + unit]();
        let diff = wUnit - nUnit

        if(unit === "Hours") diff = diff <= 0 ? diff + 24 : diff;
        else diff = diff <= 0 ? diff + 60 : diff;

        return diff - 1;
    };
};