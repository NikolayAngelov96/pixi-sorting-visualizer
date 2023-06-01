import { Application } from "pixi.js";
import { Bar } from "./Bar";
import { generateArray, resizeCanvas } from "./utils/helperFunctions";

export const APP_WIDTH = 800;
export const APP_HEIGHT = 600;

const app = new Application({
	backgroundColor: 0xd3d3d3,
	width: APP_WIDTH,
	height: APP_HEIGHT
});

document.body.appendChild(app.view as HTMLCanvasElement);

resizeCanvas(app);

const randomArray = generateArray();

for (let i = 0; i < randomArray.length; i++) {
	const height = randomArray[i];

	const bar = new Bar(height);
	bar.pivot.set(0, bar.height)
	bar.position.set(i * 50 + 150, 590);
	app.stage.addChild(bar);
}
