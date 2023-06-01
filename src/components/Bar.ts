import { Graphics, Text } from "pixi.js";

export class Bar extends Graphics {

	constructor(height: number) {
		super();

		this.init(height);
		this.initSizeText(height);
	}

	private init(height: number) {
		this.beginFill(0x0089ba);
		this.drawRect(0, 0, 20, height);
		this.endFill();
	}

	private initSizeText(height: number) {
		const text = new Text(height, {
			fontFamily: "Arial",
			fontSize: 11,
			fill: "white"
		});

		text.anchor.set(0.5);

		text.position.set(this.width / 2, this.height - text.height);

		this.addChild(text);
	}

}