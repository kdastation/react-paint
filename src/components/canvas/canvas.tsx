import { FC, useEffect, useRef } from "react";
import { Brush } from "../../models/brush";
import styles from "./canvas.module.scss";

const Canvas: FC = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    console.log("this");
    if (canvas.current) {
      new Brush(canvas.current);
    }
  }, [canvas.current]);

  return (
    <div className={styles.container}>
      <canvas
        className={styles.canvas}
        ref={canvas}
        width={600}
        height={400}
      ></canvas>
    </div>
  );
};

export { Canvas };
