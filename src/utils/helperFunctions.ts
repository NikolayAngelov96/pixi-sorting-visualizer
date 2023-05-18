import { Application } from "pixi.js";
import { APP_WIDTH, APP_HEIGHT } from "../index";

export function resizeCanvas(app: Application) {
	const resize = () => {
		app.renderer.resize(window.innerWidth, window.innerHeight);
		app.stage.scale.x = window.innerWidth / APP_WIDTH;
		app.stage.scale.y = window.innerHeight / APP_HEIGHT;
	}

	resize();

	window.addEventListener("resize", resize);
}