"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Components

// framer motion
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./Hero/SwiperNavButtons";
import { fadeIn } from "../../lib/variants";

const blogData = [
    {
        img: "/assets/img/blog/post1.jpg",
        date: "March 10, 2024",
        title: "Mastering Muscle Growth Tips",
        href: "",
    },
    {
        img: "/assets/img/blog/post2.jpg",
        date: "June 18, 2024",
        title: "Maximizing Cardio Workouts",
        href: "",
    },
    {
        img: "/assets/img/blog/post3.jpg",
        date: "April 4, 2024",
        title: "Essential Nutrition for Fitness",
        href: "",
    },
    {
        img: "/assets/img/blog/post4.jpg",
        date: "August 02, 2023",
        title: "CrossFit Challenges Unlocked",
        href: "",
    },
    {
        img: "/assets/img/blog/post5.jpg",
        date: "August 02, 2023",
        title: "Effective Core Workouts",
        href: "",
    },
    {
        img: "/assets/img/blog/post6.jpg",
        date: "August 02, 2023",
        title: "Beginner's Weight Training Guide",
        href: "",
    },
    {
        img: "/assets/img/blog/post7.jpg",
        date: "August 02, 2023",
        title: "Mindful Eating Tips",
        href: "",
    },
    {
        img: "/assets/img/blog/post8.jpg",
        date: "August 02, 2023",
        title: "Post-Workout Recovery Strategies",
        href: "",
    },
];

const Blog = () => {
    return (
        <section className="bg-primary-300 text-white py-24" id="blog">
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className="h2 text-center mb-8"
                >
                    Blog
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
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 4,
                            },
                        }}
                        className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
                    >
                        {blogData.map((post, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col mx-auto justify-start h-full max-w-[320px]">
                                        <Image
                                            src={post.img}
                                            width={320}
                                            height={260}
                                            alt={post.title}
                                            className="mb-6 cursor-grab"
                                        />
                                        <div className="flex flex-col">
                                            <p className="max-w-[280px] mb-2">{post.date}</p>
                                            <Link
                                                href={post.href}
                                                className="hover:text-accent transition-all duration-300"
                                            >
                                                <h5 className="h5">{post.title}</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        <SwiperNavButtons
                            containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto flex justify-between gap-1 z-50"
                            btnStyles="bg-accent text-white size-[40px] flex justify-center items-center hover:scale-110 transition-all duration-300"
                            iconStyle="text-2xl"
                        />
                    </Swiper>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <CustomButton
                        containerStyle="block w-[196px] h-[62px] mx-auto"
                        text="View All"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
