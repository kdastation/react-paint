import { FC } from "react";
import { Brush } from "../../models/brush";
import CanvasState from "../../mobx/canvas-state";
import ToolState from "../../mobx/tool-state";

const Tools: FC = () => {
  const selectBrush = () => {
    if (CanvasState.canvas) {
      ToolState.setTool(new Brush(CanvasState.canvas));
    }
  };

  return (
    <div>
      <button onClick={selectBrush}>Кисть</button>
    </div>
  );
};

export { Tools };
