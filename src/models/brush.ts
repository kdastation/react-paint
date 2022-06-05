import { Tool } from "./tool";

export class Brush extends Tool {
  private isMouseDown: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listenHandlers();
  }

  private listenHandlers() {
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  private mouseUpHandler() {
    this.isMouseDown = false;
  }

  private mouseDownHandler(e: MouseEvent) {
    this.isMouseDown = true;
    this.context?.beginPath();
    const target = e.target as HTMLCanvasElement;
    this.context?.moveTo(
      e.pageX - target.offsetLeft,
      e.pageY - target.offsetTop
    );
  }

  private mouseMoveHandler(e: MouseEvent) {
    if (this.isMouseDown) {
      const target = e.target as HTMLCanvasElement;
      this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
    }
  }

  private draw(x: number, y: number) {
    this.context?.lineTo(x, y);
    this.context?.stroke();
  }
}
