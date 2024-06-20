"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type Props = {
    containerStyles: string;
    btnStyles: string;
    iconStyle: string;
};
const SwiperNavButtons = ({ containerStyles, btnStyles, iconStyle }: Props) => {
    const swiper = useSwiper();

    return (
        <div className={`${containerStyles}`}>
            <button className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={`${iconStyle}`} />
            </button>
            <button className={`${btnStyles}`} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={`${iconStyle}`} />
            </button>
        </div>
    );
};

export default SwiperNavButtons;
