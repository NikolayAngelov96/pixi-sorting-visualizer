import { Container, Graphics, Text } from "pixi.js";

export class Button extends Container {

    private text!: Text;

    constructor(label: string) {
        super();

        this.initText(label);

        this.interactive = true;

        this.addListeners();
    }

    private initText(label: string) {
        this.text = new Text(label, {
            fill: 0xd65db1,
            fontSize: 16
        });

        this.addChild(this.text);
    }

    addListeners() {
        this.on("pointerover", this.onMouseOver, this);
        this.on("pointerout", this.onMouseOut, this);
    }

    onMouseOver() {
        this.text.tint = 0x000000;
        this.cursor = "pointer";
    }

    onMouseOut() {
        this.text.tint = 0xd65db1;
    }
}