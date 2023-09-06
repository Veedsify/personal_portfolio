"use client";
import Image from "next/image";
import Header from "../components/header";
import { useScrollAnimation } from "../context/useScrollAnimation";
import Link from "next/link";

const WorKPage = () => {
  useScrollAnimation();

  return (
    <>
      <Header />
      <div className="wrapper">
        {/* <!-- Section Started Heading --> */}
        <section className="section section-inner started-heading">
          <div className="container">
            {/* <!-- Heading --> */}
            <div className="m-titles align-center">
              <h1
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h1>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Section - Works --> */}
        <section className="lui-section">
          {/* <!-- Works --> */}
          <div className="v-line v-line-right v-line-top">
            <div className="container">
              <div className="works-box">
                <div
                  className="filter-links scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <a
                    href="#"
                    className="lui-subtitle active"
                    data-href=".works-col"
                  >
                    All
                  </a>
                  <a
                    href="#"
                    className="lui-subtitle"
                    data-href=".sorting-ui-ux-design"
                  >
                    UI UX Design
                  </a>
                  <a
                    href="#"
                    className="lui-subtitle"
                    data-href=".sorting-photo"
                  >
                    Photography
                  </a>
                  <a
                    href="#"
                    className="lui-subtitle"
                    data-href=".sorting-development"
                  >
                    Development
                  </a>
                  <a
                    href="#"
                    className="lui-subtitle"
                    data-href=".sorting-branding"
                  >
                    Branding
                  </a>
                </div>
                <div className="works-items works-masonry-items row">
                  {/* SORTING IS BASED ON THE SORT CLASS DATA-HREF ATTRIBUTE AND THE CLASSNAME BELOW */}
                  <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                    <div
                      className="works-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <div className="img">
                          <Link href="/work/1">
                            <Image
                              width="600"
                              height="600"
                              decoding="async"
                              src="/images/work4.jpeg"
                              alt="Zorro"
                            />
                            <span className="overlay"></span>
                          </Link>
                        </div>
                      </div>
                      <div className="desc">
                        <span className="category">Branding, Photography</span>
                        <h5 className="name">
                          <Link href="/work/1">Zorro</Link>
                        </h5>
                        <div className="text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.
                          </p>
                        </div>
                        <Link href="/work/1" className="lnk">
                          See project
                        </Link>
                      </div>
                      <div
                        className="bg-img"
                        style={{ backgroundImage: "url(/images/pat-2.png)" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lui-bgtitle">
                <span> Portfolio </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorKPage;
