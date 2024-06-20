"use client"

import { Link as ScrollLink } from "react-scroll";

const links = [
    { name: "home", target: "home", offset: -100 },
    { name: "about", target: "about", offset: -80 },
    { name: "class", target: "class", offset: -80 },
    { name: "team", target: "team", offset: 0 },
    { name: "membership", target: "membership", offset: -40 },
    { name: "testimonial", target: "testimonial", offset: 0 },
    { name: "blog", target: "blog", offset: 0 },
    { name: "contact", target: "contact", offset: 0 },
];

const Nav = ({ containerStyle }: { containerStyle: string }) => {
    return (
        <div className={`${containerStyle}`}>
            {links.map((link, index) => (
                <ScrollLink
                    key={index}
                    offset={link.offset}
                    to={link.target}
                    smooth
                    spy
                    activeClass="active"
                    className="cursor-pointer hover:text-accent transition-all"
                >
                    {link.name}
                </ScrollLink>
            ))}
        </div>
    );
};

export default Nav;
