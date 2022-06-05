import { Brush } from "./brush";

export class Eraser extends Brush {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  protected draw(x: number, y: number) {
    this.context.strokeStyle = "white";
    this.context.lineTo(x, y);
    this.context.stroke();
  }
}
