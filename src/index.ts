import { Application, Graphics } from "pixi.js";
import { resizeCanvas } from "./utils/helperFunctions";

export const APP_WIDTH = 800;
export const APP_HEIGHT = 600;

const app = new Application({
	backgroundColor: 0xd3d3d3,
	width: APP_WIDTH,
	height: APP_HEIGHT
});

document.body.appendChild(app.view as HTMLCanvasElement);

resizeCanvas(app);

const gr = new Graphics();
gr.beginFill();
gr.drawRect(200, 100, 100, 50);
gr.endFill();

app.stage.addChild(gr);

