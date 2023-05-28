import { useEffect, useState } from "react";
import Maverick from "./pages/Maverick";
import Marc from "./pages/Marc";
import Fabio from "./pages/Fabio";
import Luca from "./pages/Luca";
import Francesco from "./pages/Francesco";
import Jack from "./pages/Jack";
import IconButton from "./components/IconButton";
import { BsChevronDown, BsChevronUp, BsArrowDown } from "react-icons/bs";
import { bikes } from "./constants";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "swiper/css";
import { AnimatePresence } from "framer-motion";
// import { bikes } from "./constants";

SwiperCore.use([Keyboard, Mousewheel]);

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  const pages = [
    { page: <Maverick isPrev={isPrev} />, key: "Maverick" },
    { page: <Marc isPrev={isPrev} />, key: "Marc" },
    { page: <Fabio isPrev={isPrev} />, key: "Fabio" },
    { page: <Luca isPrev={isPrev} />, key: "Luca" },
    { page: <Francesco isPrev={isPrev} />, key: "Francesco" },
    { page: <Jack isPrev={isPrev} />, key: "Jack" },
  ];

  const CurrentPages = () => {
    return (
      <main key={pages[currentIndex].key}>{pages[currentIndex].page}</main>
    );
  };

  const handleNext = () => {
    setIsPrev(false);
    if (currentIndex >= bikes.length - 1) return currentIndex;
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1;
    });
  };

  const handlePrev = () => {
    setIsPrev(true);
    if (currentIndex <= 0) return currentIndex;
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1;
    });
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setDisablePrev(true);
      setDisableNext(false);
    } else if (currentIndex > 0 && currentIndex < bikes.length - 1) {
      setDisablePrev(false);
      setDisableNext(false);
    } else if (currentIndex === bikes.length - 1) {
      setDisablePrev(false);
      setDisableNext(true);
    }
  }, [currentIndex]);

  return (
    <main className="h-screen">
      <div className="text-white absolute md:top-1/2 top-[40%] md:left-14 left-3 -translate-y-1/2 z-30">
        <div className="md:h-[70vh] h-[60vh]">
          <Swiper
            slidesPerView={5}
            direction="vertical"
            mousewheel={true}
            className="h-full"
          >
            {bikes.map((gp, i) => (
              <SwiperSlide
                key={i}
                className={`motogp-font text-7xl cursor-pointer hover:translate-x-3 duration-300 flex gap-x-1 justify-start ${
                  bikes[currentIndex].rider === gp.rider && "text-purple-500"
                }`}
                onClick={() => setCurrentIndex(i)}
              >
                <span className="text-base mt-3">{`${
                  i < 9 ? `0${i + 1}` : i + 1
                }`}</span>
                <span>{gp.rider.split(" ")[0]}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <AnimatePresence>
        <CurrentPages key={bikes[currentIndex].rider} />
      </AnimatePresence>
      <div className="absolute md:top-44 top-32 md:right-[23rem] right-5 z-30">
        <div className="flex md:flex-row flex-col gap-5">
          <IconButton
            onClick={handlePrev}
            icon={<BsChevronUp size={30} />}
            disabled={disablePrev}
          />
          <IconButton
            onClick={handleNext}
            icon={<BsChevronDown size={30} />}
            disabled={disableNext}
          />
          <div
            className="md:hidden h-10 w-10 bg-white text-maverick rounded-full flex justify-center items-center mx-auto cursor-pointer"
            onClick={() => {
              window.scrollTo({
                top: 1000, // Ganti dengan posisi Y yang sesuai atau gunakan elemen dengan ID yang sesuai
                behavior: "smooth", // Untuk scroll yang lancar
              });
            }}
          >
            <BsArrowDown />
          </div>
        </div>
      </div>
    </main>
  );
}
