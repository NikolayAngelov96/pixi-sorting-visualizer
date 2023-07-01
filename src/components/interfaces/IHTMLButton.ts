import { ButtonPosition } from "../types/typings";

export interface IHTMLButton {
    container: HTMLButtonElement;
    setPosition(pos: ButtonPosition): void;
}