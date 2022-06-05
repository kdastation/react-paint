import { FC, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import styles from "./canvas.module.scss";
import CanvasState from "../../mobx/canvas-state";

const Canvas: FC = observer(() => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvas.current) {
      CanvasState.setCanvas(canvas.current);
    }
  }, [canvas.current]);

  return (
    <div className={styles.container}>
      <div>
        <canvas
          className={styles.canvas}
          ref={canvas}
          width={600}
          height={400}
        ></canvas>
      </div>
    </div>
  );
});

export { Canvas };
