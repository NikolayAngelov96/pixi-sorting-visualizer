import { Graphics } from "pixi.js";

export class Bar extends Graphics {

	constructor(height: number) {
		super();

		this.init(height);
	}

	private init(height: number) {
		this.beginFill();
		this.drawRect(0, 0, 10, height);
		this.endFill();
	}

}