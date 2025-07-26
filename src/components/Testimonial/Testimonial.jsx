import classNames from "classnames"
import "./Testimonial.css"
import "../../index.css"
import { BsHouseGearFill } from "react-icons/bs";

export default function Testimonial({
    brand,
    brandLogo,
    author,
    meta,
    slashColor,
    className,
    style,
    children
}) {

    const brandDefault = (
        <>
            Work<span className="brand-accent">cation</span>
        </>
    );
    const quoteDefault = children ||
        (
            <>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo expedita voluptas culpa sapiente alias molestiae.
                Numquam corrupti in laborum sed rerum et corporis.
                ”
            </>
        )

    const testimonialBrandLogo = brandLogo || <BsHouseGearFill className="brand-logo" />
    const testimonialBrand = brand || brandDefault
    const testimonialAuthor = author || "May Andersons"
    const testimonialMeta = meta || "Workcation, CTO"


    return (
        <section className={classNames("testimonial-container", className)} style={style}>
            <span className="brand">
                {testimonialBrandLogo}
                {testimonialBrand}
            </span>
            <blockquote className="testimonial-quote">
                {children || quoteDefault}
                <footer>
                    <cite className="testimonial-author"
                        style={{ '--slash-color': slashColor || '#2E59F3' }}
                    >
                        {testimonialAuthor}
                    </cite>
                    <span className="testimonial-meta">
                        {testimonialMeta}
                    </span>
                </footer>
            </blockquote>
        </section>
    )
}


