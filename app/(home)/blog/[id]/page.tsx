"use client";
import Image from "next/image";
import Header from "../../components/header";
import { useScrollAnimation } from "../../context/useScrollAnimation";
import Link from "next/link";

const BlogPage = () => {
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
                <span> Our Blogs </span>
              </h1>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Recent Articles </span>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Section - Blog --> */}
        <div className="section section-inner m-archive">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                {/* <!-- Blog Items --> */}
                <div className="articles-container">
                  <div
                    className="archive-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <Link href="blog-single.html">
                        <Image
                          width="600"
                          height="600"
                          src="/images/single7.jpg"
                          alt="The Main Thing For The Designer"
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    <div className="desc">
                      <div className="category lui-subtitle">
                        <span>October 31, 2022</span>
                      </div>
                      <h5 className="lui-title">
                        <Link href="blog-single.html">
                          The Main Thing For The Designer
                        </Link>
                      </h5>
                      <div className="lui-text">
                        <p>
                          Vivamus interdum suscipit lacus. Nunc ultrices
                          accumsan mattis. Aliquam vel sem vel velit efficitur
                          malesuada. Donec arcu lacus, ornare eget&hellip;{" "}
                        </p>
                        <div className="readmore">
                          <Link href="blog-single.html" className="lnk">
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pager">
                  <span className="page-numbers current">1</span>
                  <Link className="page-numbers" href="#">
                    2
                  </Link>
                  <Link className="next page-numbers" href="#">
                    Next
                  </Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                {/* <!-- sidebar --> */}
                <div
                  className="col__sedebar scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="content-sidebar">
                    <aside className="widget-area">
                      <div className="widget widget_block widget_search">
                        <form className="wp-block-search">
                          <div className="wp-block-search__inside-wrapper">
                            <input
                              type="search"
                              className="wp-block-search__input wp-block-search__input"
                              value=""
                            />
                            <button
                              type="submit"
                              className="wp-block-search__button wp-element-button"
                            >
                              Search
                            </button>
                          </div>
                        </form>
                      </div>

                      <section className="widget widget_block">
                        <div className="wp-block-group">
                          <div className="wp-block-group__inner-container">
                            <h2>Recent Posts</h2>
                            <ul className="wp-block-latest-posts__list wp-block-latest-posts">
                              <li>
                                <Link
                                  className="wp-block-latest-posts__post-title"
                                  href="blog-single.html"
                                >
                                  The Main Thing For The Designer
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="wp-block-latest-posts__post-title"
                                  href="blog-single.html"
                                >
                                  Follow Your Own Design Process
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="wp-block-latest-posts__post-title"
                                  href="blog-single.html"
                                >
                                  Usability Secrets to Create Better Interfaces
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="wp-block-latest-posts__post-title"
                                  href="blog-single.html"
                                >
                                  Three Ways To Level Up Your Photography
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="wp-block-latest-posts__post-title"
                                  href="blog-single.html"
                                >
                                  10 Useful Tips to Improve Your Skills
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section className="widget widget_block">
                        <div className="wp-block-group">
                          <div className="wp-block-group__inner-container">
                            <h2>Recent Comments</h2>
                            <ul className="wp-block-latest-comments">
                              <li className="wp-block-latest-comments__comment">
                                <span className="wp-block-latest-comments__comment-author">
                                  Ryan Berg
                                </span>{" "}
                                on{" "}
                                <Link
                                  className="wp-block-latest-comments__comment-link"
                                  href="blog-single.html"
                                >
                                  How to Become a Successful UI/UX Designer
                                </Link>
                              </li>
                              <li className="wp-block-latest-comments__comment">
                                <span className="wp-block-latest-comments__comment-author">
                                  Robert Brown
                                </span>{" "}
                                on{" "}
                                <Link
                                  className="wp-block-latest-comments__comment-link"
                                  href="blog-single.html"
                                >
                                  How to Become a Successful UI/UX Designer
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section className="widget widget_block">
                        <div className="wp-block-group">
                          <div className="wp-block-group__inner-container">
                            <h2>Archives</h2>
                            <ul className="wp-block-archives-list wp-block-archives">
                              <li>
                                <Link href="blog-single.html">
                                  October 2022
                                </Link>
                              </li>
                              <li>
                                <Link href="blog-single.html">
                                  November 2021
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      <section className="widget widget_block">
                        <div className="is-layout-flow wp-block-group">
                          <div className="wp-block-group__inner-container">
                            <h2>Categories</h2>
                            <ul className="wp-block-categories-list wp-block-categories">
                              <li className="cat-item cat-item-2">
                                <Link href="blog-single.html">Branding</Link>
                              </li>
                              <li className="cat-item cat-item-3">
                                <Link href="blog-single.html">Photography</Link>
                              </li>
                              <li className="cat-item cat-item-4">
                                <Link href="blog-single.html">UI Design</Link>
                              </li>
                              <li className="cat-item cat-item-5">
                                <Link href="blog-single.html">UX Design</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>
                    </aside>
                  </div>
                </div>
              </div>
            </div>

            <div className="v-line-left v-line-top">
              <div className="v-line-block">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
