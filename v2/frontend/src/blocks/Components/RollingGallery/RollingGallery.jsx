import { useEffect, useState } from "react";
import {
motion,
useMotionValue,
useAnimation,
useTransform,
} from "framer-motion";

const RollingGallery = ({
autoplay = false,
pauseOnHover = false,
images = [
  "https://i.ytimg.com/vi/sDJtzVOB8Jo/hqdefault.jpg",
  "https://i.ytimg.com/vi/sDJtzVOB8Jo/hqdefault.jpg",
  "https://i.ytimg.com/vi/sDJtzVOB8Jo/hqdefault.jpg",
  "https://i.ytimg.com/vi/sDJtzVOB8Jo/hqdefault.jpg",
  "https://i.ytimg.com/vi/sDJtzVOB8Jo/hqdefault.jpg",
  "https://i.ytimg.com/vi/sDJtzVOB8Jo/hqdefault.jpg",
],
}) => {
const [screenSize, setScreenSize] = useState({
  width: window.innerWidth,
  size: window.innerWidth <= 640 ? 'sm' : 
        window.innerWidth <= 768 ? 'md' : 
        window.innerWidth <= 1024 ? 'lg' : 'xl'
});

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    setScreenSize({
      width,
      size: width <= 640 ? 'sm' : 
            width <= 768 ? 'md' : 
            width <= 1024 ? 'lg' : 'xl'
    });
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const getCylinderWidth = () => {
  const { size } = screenSize;
  switch(size) {
    case 'sm': return 800;
    case 'md': return 1100;
    case 'lg': return 1400;
    default: return 1800;
  }
};

const cylinderWidth = getCylinderWidth();
const faceCount = images.length;
const faceWidth = (cylinderWidth / faceCount) * 1.5;
const radius = cylinderWidth / (2 * Math.PI);

const dragFactor = 0.05;
const rotation = useMotionValue(0);
const controls = useAnimation();

const transform = useTransform(
  rotation,
  (val) => `rotate3d(0,1,0,${val}deg)`
);

const startInfiniteSpin = (startAngle) => {
  controls.start({
    rotateY: [startAngle, startAngle - 360],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  });
};

useEffect(() => {
  if (autoplay) {
    const currentAngle = rotation.get();
    startInfiniteSpin(currentAngle);
  } else {
    controls.stop();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [autoplay]);

const handleUpdate = (latest) => {
  if (typeof latest.rotateY === "number") {
    rotation.set(latest.rotateY);
  }
};

const handleDrag = (_, info) => {
  controls.stop();
  rotation.set(rotation.get() + info.offset.x * dragFactor);
};

const handleDragEnd = (_, info) => {
  const finalAngle = rotation.get() + info.velocity.x * dragFactor;
  rotation.set(finalAngle);

  if (autoplay) {
    startInfiniteSpin(finalAngle);
  }
};

const handleMouseEnter = () => {
  if (autoplay && pauseOnHover) {
    controls.stop();
  }
};
const handleMouseLeave = () => {
  if (autoplay && pauseOnHover) {
    const currentAngle = rotation.get();
    startInfiniteSpin(currentAngle);
  }
};

return (
  <div className="relative h-auto w-full overflow-hidden py-4 sm:py-8 md:py-12">
    <div
      className="absolute top-0 left-0 h-full w-[15%] sm:w-[20%] z-10"
      style={{
        background:
          "linear-gradient(to left, rgba(0,0,0,0) 0%, #060606 100%)",
      }}
    />
    <div
      className="absolute top-0 right-0 h-full w-[15%] sm:w-[20%] z-10"
      style={{
        background:
          "linear-gradient(to right, rgba(0,0,0,0) 0%, #060606 100%)",
      }}
    />

    <div className="flex  items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
      <motion.div
        drag="x"
        dragElastic={0}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={controls}
        onUpdate={handleUpdate}
        style={{
          transform: transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
        className="flex min-h-[150px] sm:min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
      >
        {images.map((url, i) => (
          <div
            key={i}
            className="group absolute flex h-fit items-center justify-center p-[4%] sm:p-[6%] md:p-[8%] [backface-visibility:hidden]"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${(360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
            }}
          >
            <img
              src={url}
              alt="gallery"
              className="pointer-events-none w-[200px] h-[133px] 
                         sm:w-[300px] sm:h-[200px] 
                         md:w-[400px] md:h-[266px] 
                         lg:w-[450px] lg:h-[300px]
                         xl:w-[500px] xl:h-[333px]
                         rounded-[8px] sm:rounded-[15px] 
                         border-[2px] sm:border-[3px] border-white 
                         object-cover transition-transform 
                         duration-300 ease-out 
                         group-hover:scale-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);
};

export default RollingGallery;