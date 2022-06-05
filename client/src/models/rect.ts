import { Tool } from "./tool";
import { DrawService } from "../services/draw-service/draw-service";

export class Rect extends Tool {
  private isMouseDown: boolean = false;
  private startX: number | null = null;
  private startY: number | null = null;
  private savedImage: string | null = null;

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
    this.startX = DrawService.getCursorPositionX(e);
    this.startY = DrawService.getCursorPositionY(e);
    this.savedImage = this.canvas.toDataURL();
  }

  private mouseMoveHandler(e: MouseEvent) {
    if (this.isMouseDown && this.startX !== null && this.startY !== null) {
      const currentX = DrawService.getCursorPositionX(e);
      const currentY = DrawService.getCursorPositionY(e);
      const width = currentX - this.startX;
      const height = currentY - this.startY;
      this.draw(this.startX, this.startY, width, height);
    }
  }

  private draw(x: number, y: number, width: number, height: number) {
    const image = new Image();
    image.src = this.savedImage as string;
    image.onload = () => {
      DrawService.clearCanvasAndDrawOldImage(this.context, image, this.canvas);
      this.context.beginPath();
      this.context.rect(x, y, width, height);
      this.context.fill();
      this.context.stroke();
    };
  }
}
