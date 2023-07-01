import { Application } from "pixi.js";
import { resizeCanvas } from "./utils/helperFunctions";
import { Visualizer } from "./components/Visualizer";

export const APP_WIDTH = 800;
export const APP_HEIGHT = 600;

const app = new Application({
	backgroundColor: 0xd3d3d3,
	width: APP_WIDTH,
	height: APP_HEIGHT
});

document.body.appendChild(app.view as HTMLCanvasElement);

resizeCanvas(app);

new Visualizer(app);

