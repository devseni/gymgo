"use client";

import Image from "next/image";
import Link from "next/link";
import {
    FaEnvelope,
    FaFacebook,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import CustomButton from "./CustomButton";

const Footer = () => {
    return (
        <footer className="bg-primary-300 pt-16" id="contact">
            <div className="container mx-auto pb-16">
                <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
                    {/* Info ------------------------------ */}

                    <div className="flex flex-col gap-4">
                        <Link href="#">
                            <Image src="/assets/img/logo.svg" width={180} height={55} alt="GymGo" />
                        </Link>
                        <p className="max-w-sm ">
                            At GymGo, we believe that fitness is more than just a routine—it is a
                            lifestyle. Founded with the vision of creating a comprehensive and
                            inspiring space.
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-xl text-accent" />
                                <span>6211 Scarlett Gateway, 61336 Chicago</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaPhoneAlt className="text-xl text-accent" />
                                <span>(510) 987-4663 - (510)-423-2791</span>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center gap-4">
                                    <FaEnvelope className="text-xl text-accent" />
                                    <span>info@gymgo.com</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Blog ------------------------------ */}

                    <div>
                        <h4 className="h4 text-accent mb-4">Recent BLog Posts</h4>
                        {/* Posts --------- */}
                        {/* Single Post ----------------- */}
                        <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
                            <Link href="#" className="hover:text-accent transition-all ">
                                <h5 className="h5 leading-snug font-pathway text-xl">
                                    How to stay motivated for all exercises
                                </h5>
                                <p className="text-gray-400 text-[12px] tracking-[3px]">
                                    November 13, 2024
                                </p>
                            </Link>
                        </div>
                        {/* Single Post ----------------- */}
                        <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
                            <Link href="#" className="hover:text-accent transition-all ">
                                <h5 className="h5 leading-snug font-pathway text-xl">
                                    Excellent Diet for fitness
                                </h5>
                                <p className="text-gray-400 text-[12px] tracking-[3px]">
                                    June 02, 2024
                                </p>
                            </Link>
                        </div>
                        {/* Single Post ----------------- */}
                        <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
                            <Link href="#" className="hover:text-accent transition-all ">
                                <h5 className="h5 leading-snug font-pathway text-xl">
                                    What nutritions to eat after workout?
                                </h5>
                                <p className="text-gray-400 text-[12px] tracking-[3px]">
                                    February 29, 2024
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* Gallery --------------------------- */}

                    <div>
                        <h4 className="h4 text-accent mb-4">Gallery</h4>
                        {/* Gallery Images */}
                        <div className="flex flex-wrap gap-2">
                            <Link href="#">
                                <Image
                                    src="/assets/img/blog/post1.jpg"
                                    width={70}
                                    height={70}
                                    alt="Image"
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    src="/assets/img/blog/post2.jpg"
                                    width={70}
                                    height={70}
                                    alt="Image"
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    src="/assets/img/blog/post3.jpg"
                                    width={70}
                                    height={70}
                                    alt="Image"
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    src="/assets/img/blog/post4.jpg"
                                    width={70}
                                    height={70}
                                    alt="Image"
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    src="/assets/img/blog/post5.jpg"
                                    width={70}
                                    height={70}
                                    alt="Image"
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    src="/assets/img/blog/post6.jpg"
                                    width={70}
                                    height={70}
                                    alt="Image"
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    src="/assets/img/blog/post7.jpg"
                                    width={70}
                                    height={70}
                                    alt="Image"
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    src="/assets/img/blog/post8.jpg"
                                    width={70}
                                    height={70}
                                    alt="Image"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Newsletter ------------------------ */}

                    <div>
                        <h4 className="h4 text-accent mb-4">Newsletter</h4>
                        <div className="flex flex-col gap-4">
                            <p>
                                Join us at GymGo and achieve your fitness goals today! Feel free to
                                adjust the content to better fit your updates and news.
                            </p>
                            <form className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Your email address"
                                    className="h-[50px] outline-none px-4 text-primary-300"
                                />
                                <CustomButton containerStyle="h-[50px] px-5" text="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-white border-t border-white/20 py-10">
                <div className="container mx-auto h-full">
                    <div className="flex justify-between items-center h-full">
                        <span className="font-sans">
                            &copy; All rights has been reserved by 2024 GymGo
                        </span>
                        <ul className="flex gap-6 text-xl">
                            <li>
                                <Link
                                    href="#"
                                    className="text-white hover:text-accent transition-all"
                                >
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-white hover:text-accent transition-all"
                                >
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-white hover:text-accent transition-all"
                                >
                                    <FaYoutube />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
