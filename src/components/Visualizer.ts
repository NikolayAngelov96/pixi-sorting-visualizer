import { Application, Container } from "pixi.js";
import { generateArray } from "../utils/helperFunctions";
import { Bar } from "./Bar";
import { HTMLButton } from "./HTMLButton";

export class Visualizer extends Container {
    private stage: Container;

    constructor(app: Application) {
        super();

        this.stage = app.stage;

        this.initBars();
        this.initButtons();
    }

    private initBars() {
        const randomArray = generateArray();

        for (let i = 0; i < randomArray.length; i++) {
            const height = randomArray[i];

            const bar = new Bar(height);
            bar.pivot.set(0, bar.height)
            bar.position.set(i * 50 + 150, 590);
            this.stage.addChild(bar);
        }
    }

    private initButtons() {
        // needed buttons: Generate new array - Bubble sort - Selection sort - Insertion sort
        const clickHandler = () => console.log("button clicked");

        const generateArrayBtn = new HTMLButton("Generate New Array", clickHandler);

        document.body.appendChild(generateArrayBtn.container);
    }
}