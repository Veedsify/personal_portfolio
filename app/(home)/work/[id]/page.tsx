"use client";
import Footer from "@/app/(home)/components/footer";
import Header from "@/app/(home)/components/header";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Work",
};

const WorKPageSingle = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        {/* <!-- Section Started Heading --> */}
        <section className="section section-inner started-heading">
          {/* <!-- Heading --> */}
          <div className="container">
            <div className="m-titles align-left">
              <h1
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>Zorro</span>
              </h1>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>Branding, Photography</span>
              </div>
            </div>
          </div>

          {/* <!-- Details --> */}
          <div className="v-line v-line-right v-line-top">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                  <div className="m-details">
                    <div className="details-label">
                      <span>Year:</span>
                      <strong>
                        <span>2018</span>
                      </strong>
                    </div>
                    <div className="details-label">
                      <span>Technology:</span>
                      <strong>
                        <span>Photoshop, XD</span>
                      </strong>
                    </div>
                    <div className="details-label">
                      <span>Categories:</span>
                      <strong>
                        <span>Photography, Branding</span>
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                  <a
                    target="_blank"
                    href="https://bslthemes.com"
                    className="btn scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <span>Live Preview</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Section - Image --> */}
        <div className="section section-inner">
          {/* <!-- Image --> */}
          <div className="m-image-large">
            <div className="image">
              <div
                className="img js-parallax"
                style={{
                  backgroundImage: "url(/images/blog8.jpg)",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* <!-- Section - Description --> */}
        <section className="section section-inner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="post-content">
                  <h4>Description</h4>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="post-content">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using &lsquo;Content here, content here&rsquo;, making it
                    look like readable English.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="post-content">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using &lsquo;Content here, content here&rsquo;, making it
                    look like readable English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Section - Gallery --> */}
        <div className="section section-inner">
          <div className="container">
            {/* <!-- Section Gallery --> */}
            <div className="m-gallery">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="works-item">
                    <div
                      className="image scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="img">
                        <a
                          href="/images/work5.jpeg"
                          className="has-popup-image"
                        >
                          <Image
                            width="1000"
                            height="1000"
                            decoding="async"
                            src="/images/work5.jpeg"
                            alt="Item 1"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="works-item">
                    <div
                      className="image scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="img">
                        <a href="/images/blog8.jpg" className="has-popup-image">
                          <Image
                            width="1000"
                            height="1000"
                            decoding="async"
                            src="/images/blog8.jpg"
                            alt="Item 2"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="works-item">
                    <div
                      className="image scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="img">
                        <a href="/images/blog6.jpg" className="has-popup-image">
                          <Image
                            width="1000"
                            height="1000"
                            decoding="async"
                            src="/images/blog6.jpg"
                            alt="Item 3"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Section - Description --> */}
        <section className="section section-inner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="post-content">
                  <h4>Conclusion</h4>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="post-content">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using &lsquo;Content here, content here&rsquo;, making it
                    look like readable English.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="post-content">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using &lsquo;Content here, content here&rsquo;, making it
                    look like readable English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Section - Video --> */}
        <div className="section section-inner m-video-large">
          <div className="video">
            <div
              className="img js-parallax"
              style={{ backgroundImage: "url(/images/blog9.jpg)" }}
            ></div>
            <iframe
              className="js-video-iframe"
              data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&amp;rel=0&amp;autoplay=1"
            ></iframe>
            <div className="play"></div>
          </div>
        </div>

        {/* <!-- Section - Navigation --> */}
        <div className="section section-inner m-page-navigation">
          <div className="container">
            <div className="h-titles h-navs">
              <a href="work-single.html">
                <span
                  className="nav-arrow scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Next Project</span>
                </span>
                <span
                  className="h-title splitting-text-anim-2 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span>Gooir</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default WorKPageSingle;
