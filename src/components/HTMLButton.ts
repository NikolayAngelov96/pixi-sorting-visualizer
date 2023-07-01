import { IHTMLButton } from "./interfaces/IHTMLButton";
import { ButtonPosition } from "./types/typings";

export class HTMLButton implements IHTMLButton {

    private button!: HTMLButtonElement;

    constructor(label: string, onClickCallback: () => void) {
        this.init(label, onClickCallback);
    }

    public get container() {
        return this.button;
    }

    public setPosition(pos: ButtonPosition) {
        if (pos.top) {
            this.button.style.top = pos.top + "px";
        }

        if (pos.left) {
            this.button.style.left = pos.left + "px";
        }

        if (pos.right) {
            this.button.style.right = pos.right + "px";
        }

        if (pos.bottom) {
            this.button.style.bottom = pos.bottom + "px";
        }
    }

    private init(label: string, onClickCallback: () => void) {
        this.button = document.createElement("button");
        this.button.textContent = label;
        this.button.addEventListener("click", onClickCallback);

        this.styleButton();
    }

    private styleButton() {
        this.button.style.position = "absolute";
        this.setPosition({
            top: 100,
            left: 100
        });
    }
}