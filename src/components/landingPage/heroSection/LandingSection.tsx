import { motion } from "framer-motion";
import Image from "next/image";
// import myImage from "/mnt/data/image.png";

const LandingSection = () => {
  const animationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    // reverse: { opacity: 0, y: -100 },
  };

  return (
    <div data-theme="mytheme">
      <section className="flex flex-col items-center justify-between px-6 py-12 md:flex-row">
        <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
          <h2 className="mb-4 text-3xl font-bold">
            Your Financial Freedom Awaits
          </h2>
          <p className="mb-4 text-lg text-gray-700">
            Manage your finances effortlessly with our cutting-edge tools and
            expert guidance. Track your spending, plan your budget, and save
            more every month.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <motion.div
          className="md:w-1/2"
          initial={animationVariants.initial}
          animate={animationVariants.animate}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                width={300}
                height={200}
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingSection;
