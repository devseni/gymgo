"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Components
import CustomButton from "../CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";

const HeroSlider = () => {
    return (
        <Swiper className="h-full" loop={true}>
            <SwiperSlide>
                <div className="h-full flex justify-end text sm:pt-24">
                    <div className="flex flex-col gap-5 items-center lg:items-start lg:max-w-[700px]">
                        <motion.h1
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            className="h1 text-center lg:text-left mb-2"
                        >
                            <span>Where hard</span> work meets success
                        </motion.h1>
                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            className="text-white italic text-center lg:text-left mb-4"
                        >
                            Our mission is to empower individuals to reach their full potential
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.8)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <CustomButton text="Get Started" containerStyle="w-[196px] h-[62px]" />
                        </motion.div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="h-full flex justify-end pt-24">
                    <div className="flex flex-col gap-5 items-center lg:items-start lg:max-w-[700px]">
                        <motion.h1
                            variants={fadeIn("up", 0.4)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            className="h1 text-center lg:text-left mb-2"
                        >
                            <span>Try hard,</span> Work Smart!
                        </motion.h1>
                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                            className="text-white italic text-center lg:text-left mb-4"
                        >
                            We strive to make fitness accessible and enjoyable for everyone
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.8)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <CustomButton text="Get Started" containerStyle="w-[196px] h-[62px]" />
                        </motion.div>
                    </div>
                </div>
            </SwiperSlide>

            {/* Swiper nav buttons ------------------------------- */}
            <div className="hidden sm:block">
                <SwiperNavButtons
                    containerStyles="absolute bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1"
                    btnStyles="border border-accent text-white size-[40px] flex justify-center items-center transition-all hover:bg-accent duration-300"
                    iconStyle="text-2xl"
                />
            </div>
        </Swiper>
    );
};

export default HeroSlider;
