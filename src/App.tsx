import {motion, useMotionValue, useTransform} from "framer-motion";

import sun from "./assets/sun.png";
import cloud from "./assets/cloud.png";

function App() {
  const WIDTH = document.body.clientWidth;
  const HEIGHT = document.body.clientHeight;

  const x = useMotionValue(WIDTH / 2);
  const y = useMotionValue(HEIGHT / 2);

  const sunTranslateX = useTransform(x, [0, WIDTH], [-100, 100]);
  const sunTranslateY = useTransform(y, [0, HEIGHT], [-100, 100]);

  const cloudTranslateX = useTransform(x, [0, WIDTH], [-10, 10]);
  const cloudTranslateY = useTransform(y, [0, HEIGHT], [-10, 10]);

  const backgroundColor = useTransform(y, [0, WIDTH / 2, WIDTH], ["#76afea", "#adb3b9", "#76afea"]);

  return (
    <motion.main
      style={{backgroundColor}}
      onMouseMove={(event) => {
        x.set(event.pageX);
        y.set(event.pageY);
      }}
    >
      <motion.img
        src={sun}
        style={{
          position: "absolute",
          translateX: sunTranslateX,
          translateY: sunTranslateY,
        }}
        whileHover={{scale: 1.1}}
      />
      <motion.img
        src={cloud}
        style={{
          position: "absolute",
          pointerEvents: "none",
          translateX: cloudTranslateX,
          translateY: cloudTranslateY,
        }}
      />
    </motion.main>
  );
}

export default App;
