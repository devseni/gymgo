"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";
import CustomButton from "./CustomButton";

const classes = [
    {
        name: "Body Building",
        img: "/assets/img/classes/bodybuilding.jpg",
        description:
            "Our Body Building class focuses on strength training and muscle growth. Learn effective techniques and get personalized guidance to achieve your physique goals.",
    },
    {
        name: "Cardio",
        img: "/assets/img/classes/cardio.jpg",
        description:
            "Boost your endurance and burn calories with our high-energy Cardio classes. Perfect for improving heart health and increasing stamina.",
    },
    {
        name: "Fitness",
        img: "/assets/img/classes/fitness.jpg",
        description:
            "Join our Fitness class for a balanced workout that combines strength, flexibility, and endurance training. Ideal for overall health and wellness.",
    },
    {
        name: "Crossfit",
        img: "/assets/img/classes/crossfit.jpg",
        description:
            "Experience the intensity of CrossFit with varied functional movements. Our CrossFit classes are designed to improve your strength, agility, and overall fitness level.",
    },
];

const Classes = () => {
    return (
        <section id="class">
            <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2"
            >
                {classes.map((item, index) => {
                    return (
                        <div
                            className="relative w-full h-[300px] px-8 lg:h-[485px] flex flex-col items-center justify-center"
                            key={index}
                        >
                            {/* Overlay ----------------------------------- */}
                            <div className="bg-black/70 w-full h-full absolute top-0 z-10"></div>
                            <Image src={item.img} fill className="object-cover" alt={item.name} />
                            {/* Text & Button ----------------------------- */}
                            <div className="z-30 max-w-[380px] text-center flex flex-col justify-center items-center gap-4">
                                <motion.h3
                                    variants={fadeIn("up", 0.4)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="h3 text-accent"
                                >
                                    {item.name}
                                </motion.h3>
                                <motion.p
                                    variants={fadeIn("up", 0.4)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="text-white text-left"
                                >
                                    {item.description}
                                </motion.p>
                                <motion.div
                                    variants={fadeIn("up", 0.8)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="mt-2"
                                >
                                    <CustomButton
                                        containerStyle="w-[164px] h-[46px]"
                                        text="Read More"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Classes;
