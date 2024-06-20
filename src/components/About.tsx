"use client";

import { FaUser } from "react-icons/fa";
import { IoIosPricetag } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";
import Achievements from "./Achievements";

const featured = [
    {
        icon: <FaUser />,
        title: "award-winning trainers",
        subtitle:
            "Our team of award-winning trainers brings expertise and passion to help you reach your fitness goals with personalized coaching and advanced techniques.",
    },
    {
        icon: <IoIosPricetag />,
        title: "excellent prices",
        subtitle:
            "We offer competitive pricing on memberships, personal training, and nutritional programs, making high-quality fitness accessible to everyone.",
    },
    {
        icon: <FaDumbbell />,
        title: "modern equipment",
        subtitle:
            "Our facility features state-of-the-art equipment, ensuring you have the best tools for effective and enjoyable workouts.",
    },
];

const About = () => {
    return (
        <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-2 mb-8">
                    <motion.h2
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        className="h2 text-center"
                    >
                        About Us
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.2 }}
                        className="max-w-[800px] mx-auto text-center "
                    >
                        At GymGo, we believe that fitness is more than just a routine—it is a lifestyle. Founded with the vision of creating a comprehensive and inspiring space for bodybuilders and fitness enthusiasts alike, GymGo is dedicated to helping you achieve your fitness goals, no matter where you are in your journey.
                    </motion.p>
                </div>

                {/* Featured Items ---------------------------- */}
                <motion.div
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
                >
                    {featured.map((feature, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center gap-4 border p-10"
                            >
                                <div className="text-4xl bg-primary-300 text-white size-[80px] rounded-full flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <h4 className="h4 text-accent">{feature.title}</h4>
                                    <p>{feature.subtitle}</p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Achievements ------------------------------ */}
                <motion.div
                    variants={fadeIn("up", 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <Achievements />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
