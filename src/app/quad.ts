import { Turn } from "./turn";

export class Quad {
    x: number;
    y: number;
    isSelected: boolean;
    whoSelected: Turn;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.isSelected = false;
        this.whoSelected = null;
    }
}