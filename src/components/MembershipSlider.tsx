"use client";

import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import CustomButton from "./CustomButton";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// membership data
const membershipData = [
    {
        title: "Standard",
        price: "30",
        benefits: [
            { icon: FaCheck, text: "Includes membership" },
            { icon: FaCheck, text: "Access to all gym facilities" },
            { icon: FaCheck, text: "Health and fitness tips" },
            { icon: MdClose, text: "Full access to everything" },
            { icon: MdClose, text: "Diet plan included" },
            { icon: MdClose, text: "Monday - Friday gym access" },
            { icon: MdClose, text: "No additional amentities" },
        ],
    },
    {
        title: "Ultimate",
        price: "45",
        benefits: [
            { icon: FaCheck, text: "Includes membership" },
            { icon: FaCheck, text: "Access to all gym facilities" },
            { icon: FaCheck, text: "Health and fitness tips" },
            { icon: FaCheck, text: "Full access to everything" },
            { icon: FaCheck, text: "Diet plan included" },
            { icon: MdClose, text: "Monday - Friday gym access" },
            { icon: MdClose, text: "No additional amentities" },
        ],
    },
    {
        title: "Professional",
        price: "60",
        benefits: [
            { icon: FaCheck, text: "Includes membership" },
            { icon: FaCheck, text: "Access to all gym facilities" },
            { icon: FaCheck, text: "Health and fitness tips" },
            { icon: FaCheck, text: "Full access to everything" },
            { icon: FaCheck, text: "Diet plan included" },
            { icon: FaCheck, text: "Monday - Friday gym access" },
            { icon: FaCheck, text: "No additional amentities" },
        ],
    },
];

const MembershipSlider = () => {
    return (
        <Swiper
            slidesPerView={1}
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
            className="min-h-[680px]"
        >
            {membershipData.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="border border-accent bg-black/50 backdrop-blur-sm w-full max-w-sm xl:max-w-none mx-auto hover:bg-primary-300/90 transition-all duration-300 mb-10">
                            {/* Plan Title ------------------------------ */}

                            <div className="border-b-2 border-accent w-full py-6 text-center">
                                <h4 className="h4 text-3xl tracking-[.5rem]">{item.title}</h4>
                            </div>

                            {/* Benefits -------------------------------- */}

                            <div className="py-[30px] px-[60px]">
                                <ul className="flex flex-col gap-5 mb-7">
                                    {item.benefits.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center gap-4">
                                                <item.icon className="text-accent text-lg" />
                                                {item.text}
                                            </li>
                                        );
                                    })}
                                </ul>

                                {/* Price & button ---------------------- */}

                                <div className="flex flex-col items-center">
                                    <div className=" mb-8 flex gap-1 items-center justify-center">
                                        <p className="text-5xl">$</p>
                                        <strong className="text-6xl ">{item.price}</strong>
                                        <em className="self-end text-2xl">/month</em>
                                    </div>
                                    <CustomButton
                                        containerStyle="w-[196px] h-[62px]"
                                        text="Buy Now"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default MembershipSlider;
