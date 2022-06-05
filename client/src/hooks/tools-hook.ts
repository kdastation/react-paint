import { MouseEvent } from "react";
import { Brush } from "../models/brush";
import { Rect } from "../models/rect";
import { Eraser } from "../models/eraser";
import CanvasState from "../mobx/canvas-state";
import ToolState from "../mobx/tool-state";

export const useTools = () => {
  const selectTool = (e: MouseEvent<HTMLDivElement>) => {
    if (CanvasState.canvas) {
      const target = e.target as HTMLButtonElement;
      switch (target.value) {
        case "BRUSH":
          ToolState.setTool(new Brush(CanvasState.canvas));
          break;
        case "RECT":
          ToolState.setTool(new Rect(CanvasState.canvas));
          break;
        case "ERASER":
          ToolState.setTool(new Eraser(CanvasState.canvas));
          break;
      }
    }
  };
  return {
    selectTool,
  };
};
