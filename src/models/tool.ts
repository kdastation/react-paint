import { DefaultSettingsCanvas } from "./default-settings-canvas";

export class Tool {
  protected canvas: HTMLCanvasElement;
  protected context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.destroyHandlers();
    this.context.strokeStyle = DefaultSettingsCanvas.DEFAULT_COLOR;
    this.context.lineWidth = DefaultSettingsCanvas.DEFAULT_LINE_WIDTH;
  }

  public set color(color: string) {
    this.context.strokeStyle = color;
  }

  public set lineWidth(number: number) {
    this.context.lineWidth = number;
  }

  private destroyHandlers() {
    this.canvas.onmouseup = null;
    this.canvas.onmousedown = null;
    this.canvas.onmousemove = null;
  }
}
