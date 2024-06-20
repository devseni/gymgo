"use client";

import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

import { motion } from "framer-motion";
import { fadeIn } from "../../lib/variants";

const trainerData = [
    {
        image: "/assets/img/trainers/david.jpg",
        name: "David Williams",
        role: "Body Builder Coach",
        description:
            "With over a decade of experience, David Williams is a dedicated Body Builder Coach known for his tailored programs and motivational coaching, helping clients achieve their bodybuilding goals.",
        social: [
            { icon: FaFacebook, href: "https://facebook.com" },
            { icon: FaTwitter, href: "https://twitter.com" },
            { icon: FaYoutube, href: "https://youtube.com" },
        ],
    },
    {
        image: "/assets/img/trainers/rosy.jpg",
        name: "Rosy Rivera",
        role: "Cardio Coach",
        description:
            "She is a dynamic Cardio Coach with extensive experience in high-energy workouts. She excels in cardiovascular health through her engaging and effective training sessions.",
        social: [
            { icon: FaFacebook, href: "https://facebook.com" },
            { icon: FaTwitter, href: "https://twitter.com" },
            { icon: FaYoutube, href: "https://youtube.com" },
        ],
    },
    {
        image: "/assets/img/trainers/matt.jpg",
        name: "Matt Stone",
        role: "Fitness Coach",
        description:
            "Matt Stone is a versatile Fitness Coach specializing in comprehensive workouts that enhance strength, flexibility, and endurance. His balanced approach helps clients achieve overall wellness.",
        social: [
            { icon: FaFacebook, href: "https://facebook.com" },
            { icon: FaTwitter, href: "https://twitter.com" },
            { icon: FaYoutube, href: "https://youtube.com" },
        ],
    },
    {
        image: "/assets/img/trainers/sofia.jpg",
        name: "Sofia Lauren",
        role: "Crossfit Coach",
        description:
            "Sofia Lauren is an expert CrossFit Coach known for her intense, varied workouts that improve strength, and overall fitness. Her dynamic coaching style and dedication inspire clients.",
        social: [
            { icon: FaFacebook, href: "https://facebook.com" },
            { icon: FaTwitter, href: "https://twitter.com" },
            { icon: FaYoutube, href: "https://youtube.com" },
        ],
    },
];

const Team = () => {
    return (
        <section className="py-12 xl:h-[110vh]" id="team">
            <div className="container mx-auto h-full flex flex-col items-center justify-center">
                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="h2 text-center mb-6"
                >
                    Our Trainers
                </motion.h2>
                {/* Trainers grid */}
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-12 gap-16"
                >
                    {trainerData.map((trainer, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col mx-auto text-left mb-2 bg-slate-200 p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ease-in-out "
                            >
                                {/* Image */}
                                <div className="relative w-[280px] h-[340px] mx-auto mb-2">
                                    <Image
                                        src={trainer.image}
                                        fill
                                        alt={trainer.name}
                                        className="object-cover"
                                    />
                                </div>
                                {/* Name */}
                                <h4 className="h4 mb-2">{trainer.name}</h4>
                                {/* Role */}
                                <p className="uppercase text-xs mb-2 tracking-[3px] font-bold border-b-2 pb-2 border-accent text-primary-100">
                                    {trainer.role}
                                </p>
                                {/* Description */}
                                <p className="mb-4 max-w-[320px] mx-auto flex-1">
                                    {trainer.description}
                                </p>

                                {/* Socials */}
                                <div className="flex gap-6 justify-start items-center">
                                    {trainer.social.map((social, index) => {
                                        return (
                                            <div key={index}>
                                                <Link
                                                    href={social.href}
                                                    className="hover:text-accent transition-all"
                                                >
                                                    <social.icon className="text-lg" />
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <CustomButton containerStyle="w-[196px] h-[62px]" text="See All Trainers" />
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
