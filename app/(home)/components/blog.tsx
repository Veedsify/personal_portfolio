import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <section className="lui-section lui-gradient-top" id="blog-section">
        {/* <!-- Heading --> */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Latest Blog </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Articles and Advice</b>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Archive --> */}
        <div className="v-line v-line-right">
          <div className="container">
            <div className="blog-items row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <a href="blog-single.html">
                      <Image
                        width="600"
                        height="600"
                        decoding="async"
                        src="/images/single7.jpg"
                        alt="The Main Thing For The Designer"
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>October 31, 2022</span>
                    </div>
                    <h5 className="lui-title">
                      <a href="blog-single.html">
                        The Main Thing For The Designer
                      </a>
                    </h5>
                    <div className="lui-text">
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget&#8230;{" "}
                      </p>
                      <div className="readmore">
                        <a href="blog-single.html" className="lnk">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <a href="blog-single.html">
                      <Image
                        width="600"
                        height="600"
                        decoding="async"
                        src="/images/blog-4-scaled-1.jpg"
                        alt="Follow Your Own Design Process"
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>October 31, 2022</span>
                    </div>
                    <h5 className="lui-title">
                      <a href="blog-single.html">
                        Follow Your Own Design Process
                      </a>
                    </h5>
                    <div className="lui-text">
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget&#8230;{" "}
                      </p>
                      <div className="readmore">
                        <a href="blog-single.html" className="lnk">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div
                  className="archive-item scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <a href="blog-single.html">
                      <Image
                        width="600"
                        height="600"
                        decoding="async"
                        src="/images/blog-2.jpg"
                        alt="Usability Secrets to Create Better Interfaces"
                      />
                    </a>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>November 28, 2021</span>
                    </div>
                    <h5 className="lui-title">
                      <a href="blog-single.html">
                        Usability Secrets to Create Better Interfaces
                      </a>
                    </h5>
                    <div className="lui-text">
                      <p>
                        Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                        mattis. Aliquam vel sem vel velit efficitur malesuada.
                        Donec arcu lacus, ornare eget&#8230;{" "}
                      </p>
                      <div className="readmore">
                        <a href="blog-single.html" className="lnk">
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="load-more">
              <Link
                href="/blog"
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View Blog</span>
              </Link>
            </div>

            <div className="lui-bgtitle">
              <span> Blog </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
