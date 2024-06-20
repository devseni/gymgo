"use client";

import Link from "next/link";
import MobileNav from "./Nav/MobileNav";
import Nav from "./Nav/Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Detect Scroll
            setHeaderActive(window.scrollY > 50);
        };

        // Add scroll event
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                headerActive ? "h-[80px]" : "h-[80px]"
            } fixed top-0 max-w-[1920px] w-full bg-primary-300 h-[100px] transition-all z-50 `}
        >
            <div className="container mx-auto xs:px-0 sm:px-4 h-full flex items-center justify-between">
                {/* Logo ------------------------------------------------- */}
                <Link href="">
                    <Image src={"/assets/img/logo.svg"} width={117} height={55} alt="Logo" />
                </Link>

                {/* Mobile nav -> hidden on large devices ---------------- */}
                <MobileNav
                    containerStyle={`${headerActive ? "top-[80px]" : "top-[80px]"}
                    ${
                        openNav
                            ? "max-h-max pt-8 pb-10 border-t border-white/10"
                            : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
                    }    
                    flex flex-col text-center gap-8 fixed bg-primary-200 w-full top-[124px] text-base uppercase font-medium transition-all left-0 xl:hidden text-white`}
                />

                {/* Desktop nav -> hidden on small devices --------------- */}
                <Nav containerStyle="flex gap-7 text-white text-base font-medium transition-all uppercase hidden xl:flex" />
                {/* Hide/Open menu button -------------------------------- */}
                <div className="flex items-center gap-4">
                    {/* Login & Register button -------------------------- */}
                    <div className="hidden text-white md:flex items-center gap-4">
                        <button className="border px-6 py-1 border-accent hover:bg-accent hover:text-white transition-all text-base font-medium">
                            Login
                        </button>
                        <button className="bg-accent px-3 py-1 border border-accent hover:border hover:border-white transition-all text-base font-medium">
                            Register
                        </button>
                    </div>
                    <button onClick={() => setOpenNav(!openNav)} className="text-white xl:hidden ">
                        <MdMenu className="text-4xl" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
