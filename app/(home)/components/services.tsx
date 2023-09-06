import ServicesSingle, {
  SinglePageProps,
} from "./sub_components/services_single";
import React from "react";
import axios, { AxiosResponse } from "axios";

interface ServicesProps {
  pageData: NormalPageData;
}

const Services: React.FC<ServicesProps> = async ({ pageData }) => {
  const { data: services }: AxiosResponse = await axios.get(
    `${process.env["NEXT_PUBLIC_BASE_URL"]}/api/services`
  );


  return (
    <>
      <section
        className="lui-section lui-gradient-bottom"
        id="services-section"
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
                <span>{pageData?.services_title}</span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  my <b>Services</b>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Services --> */}
        <div className="v-line v-line-right">
          <div className="container">
            <div
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="swiper-wrapper">
                {services.map((item: SinglePageProps) => (
                  <ServicesSingle key={item.id} {...item} />
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>

            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
