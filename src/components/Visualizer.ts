import { Application, Container } from "pixi.js";
import { generateArray } from "../utils/helperFunctions";
import { Bar } from "./Bar";

export class Visualizer extends Container {
    private stage: Container;

    constructor(app: Application) {
        super();

        this.stage = app.stage;

        this.initBars();
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
}