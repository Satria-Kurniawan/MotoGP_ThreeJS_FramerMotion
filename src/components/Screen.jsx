/* eslint-disable react/prop-types */
import ModelViewer from "./ModelViewer";
import Button from "./Button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Screen({ data, bgColor, isPrev }) {
  const [showBike, setShowBike] = useState(false);

  return (
    <main
      key={data.rider}
      className="md:h-[93vh] overflow-x-hidden text-white relative"
    >
      <motion.div
        className={`${bgColor} absolute ${
          !isPrev ? "md:-top-[78vw]" : "md:-bottom-[75vw]"
        }  -top-40 -z-20 md:h-[120vw] h-[95vh] md:w-[120vw] w-[95vh]`}
        initial={{ scale: 0, opacity: 0, borderRadius: "9999px" }}
        animate={{ scale: 1, opacity: 1, borderRadius: "100px" }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className={`bg-contain bg-no-repeat bg-center md:fixed absolute top-0 left-0 right-0 bottom-0 z-10 md:h-auto h-[100vh]`}
        style={{ backgroundImage: `url(${data.image})` }}
        initial={{ opacity: 0, y: !isPrev ? -100 : 100 }}
        animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: !isPrev ? 100 : -100 }}
        transition={{ duration: 0.3 }}
      />

      <div className="motogp-font text-[10rem] text-stroke">
        <motion.h1
          initial={{ opacity: 0, y: !isPrev ? -100 : 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="absolute md:bottom-10 md:-left-5 md:top-auto top-80 md:right-auto right-0"
        >
          MotoGP
        </motion.h1>
        <motion.h1
          className="absolute -top-10 right-0"
          initial={{ opacity: 0, y: !isPrev ? 100 : -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          2023
        </motion.h1>
      </div>
      <div className="h-full md:flex block container mx-auto px-5 border-x border-[#bbbbbb7c] mb-8">
        <section className="md:w-[60%] w-full md:h-auto h-[70vh] md:ml-80 md:mt-0 mt-40 md:static absolute top-40 z-20">
          {showBike && <ModelViewer modelPath={data.model} />}
        </section>
        <motion.section
          className="md:w-[40%] w-full md:mt-[11rem] mt-[80vh] md:text-white text-maverick z-20"
          initial={{ opacity: 0, x: !isPrev ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="motogp-font text-5xl">{data.rider}</h1>
          <h2 className="text-2xl mb-3">{data.bike}</h2>
          <p className="mb-5">{data.description}</p>
          <Button
            text={!showBike ? "SHOW BIKE" : "HIDE BIKE"}
            onClick={() => setShowBike((prevState) => !prevState)}
          />
        </motion.section>
      </div>
    </main>
  );
}
