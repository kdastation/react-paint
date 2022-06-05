import { FC } from "react";
import { useTools } from "../../hooks/tools-hook";

const Tools: FC = () => {
  const { selectTool } = useTools();

  return (
    <div onClick={selectTool}>
      <button value="BRUSH">Кисть</button>
      <button value="RECT">Прямоугольник</button>
      <button value="ERASER">Ластик</button>
    </div>
  );
};

export { Tools };
