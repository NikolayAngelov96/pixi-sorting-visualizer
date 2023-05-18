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

export function getRandomNumber(min = 25, max = 400) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export function generateArray() {
	const arr = [];

	for(let i = 0; i < 10, i++; ) {
		arr.push(getRandomNumber());
	}

	return arr;
}

export const colors = {
  purple: 0x845EC2,
  pink: 0xFF6F91,
  blue: 0x0089BA,
  green: 0x00C9A7,
};