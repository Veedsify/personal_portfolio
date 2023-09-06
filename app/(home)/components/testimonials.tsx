import Image from "next/image";
import TestimonialSingle from "./sub_components/testimonial_single";

const Testimonials = () => {
  return (
    <>
      <section
        className="lui-section lui-gradient-center"
        id="testimonials-section"
      >
        {/* <!-- Heading --> */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Testimonials </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  what <b>Customers Say</b>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Testimonials --> */}
        <div className="v-line v-line-right">
          <div className="container">
            <div
              className="swiper-container js-testimonials scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="swiper-wrapper">
                  <TestimonialSingle  />
                  <TestimonialSingle  />
                  <TestimonialSingle  />
                  <TestimonialSingle  />
              </div>*
              <div className="swiper-pagination"></div>
            </div>

            <div className="lui-bgtitle">
              <span> Reviews </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
