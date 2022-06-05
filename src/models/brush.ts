import { Tool } from "./tool";
import { DrawService } from "../services/draw-service/draw-service";

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
    this.context?.moveTo(
      DrawService.getCursorPositionX(e),
      DrawService.getCursorPositionY(e)
    );
  }

  private mouseMoveHandler(e: MouseEvent) {
    if (this.isMouseDown) {
      this.draw(
        DrawService.getCursorPositionX(e),
        DrawService.getCursorPositionY(e)
      );
    }
  }

  protected draw(x: number, y: number) {
    this.context?.lineTo(x, y);
    this.context?.stroke();
  }
}
