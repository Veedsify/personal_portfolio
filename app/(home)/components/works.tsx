import Image from "next/image";
import Link from "next/link";

const Works = () => {
  return (
    <>
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* <!-- Heading --> */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
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
        </div>

        {/* <!-- Works --> */}
        <div className="v-line v-line-right">
          <div className="container">
            <div className="works-box">
              <div
                className="filter-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <Link
                  href="#"
                  className="lui-subtitle active"
                  data-href=".works-col"
                >
                  All
                </Link>
                <Link
                  href="#"
                  className="lui-subtitle"
                  data-href=".sorting-ui-ux-design"
                >
                  UI UX Design
                </Link>
                <Link href="#" className="lui-subtitle" data-href=".sorting-photo">
                  Photography
                </Link>
                <Link
                  href="#"
                  className="lui-subtitle"
                  data-href=".sorting-development"
                >
                  Development
                </Link>
                <Link
                  href="#"
                  className="lui-subtitle"
                  data-href=".sorting-branding"
                >
                  Branding
                </Link>
              </div>
              <div className="works-items works-masonry-items row">
                <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                  <div
                    className="works-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <div className="img">
                        <Link href="/work/1P">
                          <Image
                            priority
                            decoding="async"
                            src="/images/work4.jpeg"
                            alt="Zorro"
                            width="500"
                            height="500"
                          />
                          <span className="overlay"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="desc">
                      <span className="category"> Branding, Photography </span>
                      <h5 className="name">
                        <Link href="/work/1P">Zorro</Link>
                      </h5>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
                        </p>
                      </div>
                      <Link href="/work/1P" className="lnk">
                        See project
                      </Link>
                    </div>
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: "url(/images/pat-2.png)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
                  <div
                    className="works-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <div className="img">
                        <Link href="/work/1P">
                          <Image
                            priority
                            decoding="async"
                            src="/images/work2.jpeg"
                            alt="Gooir"
                            width="500"
                            height="500"
                          />
                          <span className="overlay"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="desc">
                      <span className="category"> Branding, UI UX Design </span>
                      <h5 className="name">
                        <Link href="/work/1P">Gooir</Link>
                      </h5>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
                        </p>
                      </div>
                      <Link href="/work/1P" className="lnk">
                        See project
                      </Link>
                    </div>
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: "url(/images/pat-2.png)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
                  <div
                    className="works-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <div className="img">
                        <Link href="/work/1P">
                          <Image
                            priority
                            decoding="async"
                            src="/images/work7.jpg"
                            alt="Explore"
                            width="500"
                            height="500"
                          />
                          <span className="overlay"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="desc">
                      <span className="category">
                        Development, UI UX Design
                      </span>
                      <h5 className="name">
                        <Link href="/work/1P">Explore</Link>
                      </h5>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
                        </p>
                      </div>
                      <Link href="/work/1P" className="lnk">
                        See project
                      </Link>
                    </div>
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: "url(/images/pat-2.png)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
                  <div
                    className="works-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <div className="img">
                        <Link href="/work/1P">
                          <Image
                            priority
                            decoding="async"
                            src="/images/work1.jpeg"
                            alt="Mozar"
                            width="500"
                            height="500"
                          />
                          <span className="overlay"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="desc">
                      <span className="category"> Branding, Photography </span>
                      <h5 className="name">
                        <Link href="/work/1P">Mozar</Link>
                      </h5>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
                        </p>
                      </div>
                      <Link href="/work/1P" className="lnk">
                        See project
                      </Link>
                    </div>
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: "url(/images/pat-2.png)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
                  <div
                    className="works-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <div className="img">
                        <Link href="/work/1P">
                          <Image
                            priority
                            decoding="async"
                            src="/images/single8.jpg"
                            alt="Stay Fit"
                            width="500"
                            height="500"
                          />
                          <span className="overlay"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="desc">
                      <span className="category">
                        Development, UI UX Design
                      </span>
                      <h5 className="name">
                        <Link href="/work/1P">Stay Fit</Link>
                      </h5>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
                        </p>
                      </div>
                      <Link href="/work/1P" className="lnk">
                        See project
                      </Link>
                    </div>
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: "url(/images/pat-2.png)",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
                  <div
                    className="works-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <div className="img">
                        <Link href="/work/1P">
                          <Image
                            priority
                            decoding="async"
                            src="/images/single6.jpg"
                            alt="Kana"
                            width="500"
                            height="500"
                          />
                          <span className="overlay"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="desc">
                      <span className="category">Development, Photography</span>
                      <h5 className="name">
                        <Link href="/work/1P">Kana</Link>
                      </h5>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
                        </p>
                      </div>
                      <Link href="/work/1P" className="lnk">
                        See project
                      </Link>
                    </div>
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: "url(/images/pat-2.png)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="load-more-link">
                <Link
                  href="/work"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>View More</span>
                </Link>
              </div>
            </div>

            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
