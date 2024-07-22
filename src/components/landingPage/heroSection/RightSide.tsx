import { motion } from "framer-motion";
import Image from "next/image";
import { Divider } from "~/components/atoms/Divider";
// import myImage from "/mnt/data/image.png";

import fssai from "@assets/webp/services/fssai.png";
import gst from "@assets/webp/services/gst.png";
import iso from "@assets/webp/services/iso.png";
import trademark from "@assets/webp/services/trademark.png";
import { toString } from "lodash";
import { useEffect, useState } from "react";

const ANIMATION_DURATION = 1;

const animationVariants = {
  initial: { opacity: 0.5, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const BouncingCard = ({ image }) => {
  return (
    <motion.div
      className="w-full items-center justify-center px-20"
      initial={animationVariants.initial}
      animate={animationVariants.animate}
      transition={{
        duration: ANIMATION_DURATION,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeOut",
      }}
    >
      <div className="card card-compact w-fit p-2 shadow-lg">
        <Image
          alt="image"
          src={image}
          width={300}
          objectFit="cover"
          className="static rounded-xl"
        />
      </div>
    </motion.div>
  );
};

const serviceImages = [gst, trademark, fssai, iso];

const RightSide = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % serviceImages.length);
      },
      ANIMATION_DURATION * 2 * 1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="flex flex-1 flex-col items-end justify-center self-stretch">
      <BouncingCard
        image={serviceImages[imageIndex]}
        key={toString(serviceImages[imageIndex]?.src)}
      />
      <div className="m-10 rounded-xl bg-accent-200 p-5">
        <div className="flex flex-row items-center justify-center space-x-5">
          {/* number rising animation*/}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-center text-xl font-semibold">Happy Customers</p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="text-center text-xl font-semibold">
              Years of Experience
            </p>
          </div>
          <Divider orientation="vertical" />
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-center text-xl font-semibold">
              Projects Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSide;
