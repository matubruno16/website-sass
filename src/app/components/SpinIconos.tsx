"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";

const imageUrls = [
  "/Icon.png",
  "/Icon-1.png",
  "/Icon-2.png",
  "/Icon-3.png",
  "/Icon-4.png",
  "/Icon-5.png",
  "/Icon-6.png",
  "/Icon-7.png",
  "/Icon-8.png",
];

type ImageData = {
  url: string;
  position: {
    left: string;
    top: string;
  };
};

const generateImages = (angle: number): ImageData[] =>
  imageUrls.map((imageUrl, index) => ({
    url: imageUrl,
    position: {
      left: `${40 + 40 * Math.cos((angle + 45 * index) * (Math.PI / 180))}%`,
      top: `${40 + 40 * Math.sin((angle + 45 * index) * (Math.PI / 180))}%`,
    },
  }));

const SpinIconos = () => {
  const circleRef = useRef(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const animateImages = () => {
      setAngle((prevAngle) => prevAngle + 0.3);
      requestAnimationFrame(animateImages);
    };

    const animationId = requestAnimationFrame(animateImages);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const images = useMemo(() => generateImages(angle), [angle]);

  return (
    <div
      className="relative flex items-center justify-center w-[400px] h-[400px]"
      ref={circleRef}
    >
      <div className="absolute w-[337px] h-[337px] border-[20px] border-aro rounded-full flex justify-center items-center"></div>
      {images.map(({ url, position }) => (
        <Image
          key={url}
          src={url}
          alt="iconographic"
          className="rounded-full"
          width={70}
          height={70}
          style={{ position: "absolute", ...position }}
        />
      ))}
      <Image 
        src="/crm.png"
        alt="logo CRM"
        width={180}
        height={180}
      />
    </div>
  );
};

export default SpinIconos;
