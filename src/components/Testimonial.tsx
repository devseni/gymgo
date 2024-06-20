"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";

// testimonial data
const testimonialData = [
    {
        img: "/assets/img/testimonial/lucy.jpg",
        name: "Lucy Anthony",
        message:
            "Training with David Williams completely transformed my approach to bodybuilding. His expertise helped me achieve results I never thought possible.",
    },
    {
        img: "/assets/img/testimonial/michael.jpg",
        name: "Michael Smith",
        message:
            "Rosy Rivera's cardio classes are invigorating and effective. Her enthusiasm is infectious, and I always leave feeling energized and accomplished.",
    },
    {
        img: "/assets/img/testimonial/maria.jpg",
        name: "Maria Garcia",
        message:
            "Matt Stone's fitness coaching has been instrumental in improving my overall health. His workouts making fitness enjoyable and rewarding.",
    },
    {
        img: "/assets/img/testimonial/lucy.jpg",
        name: "Walton Powlowski",
        message:
            "Sofia Lauren is an incredible CrossFit coach. Her workouts push you to your limits while ensuring proper form and technique.",
    },
    {
        img: "/assets/img/testimonial/michael.jpg",
        name: "Isobel Deckow",
        message:
            "David's attention to detail and encouragement have helped me make significant gains in muscle mass and strength.",
    },
    {
        img: "/assets/img/testimonial/maria.jpg",
        name: "Kailee Terry",
        message:
            "Sofia Lauren's CrossFit sessions are the highlight of my week. Her dedication to our progress and her infectious energy keep me coming back for more!",
    },
];

const Testimonial = () => {
    return (
        <section className="py-12 xl:py-20" id="testimonial">
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="h2 text-center mb-3"
                >
                    Our Testimonials
                </motion.h2>
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="h-[350px]"
                    >
                        {testimonialData.map((person, index) => {
                            return (
                                <SwiperSlide key={index} className="h-full cursor-grab">
                                    <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                                        <Image
                                            src={person.img}
                                            width={90}
                                            height={90}
                                            alt={person.name}
                                            className="rounded-full border-2 border-accent "
                                        />
                                        <div className="flex flex-col justify-center items-center">
                                            <FaQuoteLeft className="text-2xl text-gray-300 mb-2" />
                                            <p className="max-w-[380px] mb-4">{person.message}</p>
                                            <span className="text-2xl text-accent mb-10">
                                                {person.name}
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonial;
