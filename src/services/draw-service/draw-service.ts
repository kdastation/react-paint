export class DrawService {
  static getCursorPositionX(e: MouseEvent) {
    const target = e.target as HTMLCanvasElement;
    return e.pageX - target.offsetLeft;
  }
  static getCursorPositionY(e: MouseEvent) {
    const target = e.target as HTMLCanvasElement;
    return e.pageY - target.offsetTop;
  }

  static clearCanvasAndDrawOldImage(
    context: CanvasRenderingContext2D,
    oldImage: HTMLImageElement,
    canvas: HTMLCanvasElement
  ) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(oldImage, 0, 0, canvas.width, canvas.height);
  }
}
